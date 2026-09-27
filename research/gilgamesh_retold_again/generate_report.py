#!/usr/bin/env python3
"""Build report.md from the research results.

Reads outline.yaml (item order, group, year), fields.yaml (field categories)
and every JSON file in the output directory. Fields whose value contains
[uncertain], that are listed in an item's `uncertain` array, or that are
empty or "N/A" are left out.
"""

import json
import re
import unicodedata
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent
INTERNAL_KEYS = {"_source_file", "uncertain", "id", "group"}
SKIP_VALUES = {"", "n/a"}

CATEGORY_MAPPING = {
    "Basic Info": ["basic_info", "Basic Info"],
    "Source Handling": ["source_handling", "Source Handling"],
    "Reading of the Arc": ["reading_of_the_arc", "Reading of the Arc"],
    "Voice and Register": ["voice_and_register", "Voice and Register"],
    "Reception": ["reception", "Reception"],
    "Recovery Method": ["recovery_method", "Recovery Method"],
    "Essay Angle": ["essay_angle", "Essay Angle"],
}
KEY_TO_TITLE = {k: title for title, keys in CATEGORY_MAPPING.items() for k in keys}
NESTED_KEYS = set(KEY_TO_TITLE)


def file_slug(name):
    """Slug used for result filenames: drop accents and punctuation, spaces to _."""
    ascii_name = unicodedata.normalize("NFKD", name).encode("ascii", "ignore").decode()
    return "_".join(re.sub(r"[^A-Za-z0-9 ]", "", ascii_name).split())


def anchor(name):
    ascii_name = unicodedata.normalize("NFKD", name).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", ascii_name.lower()).strip("-")


def title_case(key):
    return key.replace("_", " ").capitalize()


def lookup(data, field, category):
    """Top level, then the category's nested dict, then any nested dict."""
    if field in data:
        return data[field]
    for key in CATEGORY_MAPPING.get(KEY_TO_TITLE.get(category, category), [category]):
        sub = data.get(key)
        if isinstance(sub, dict) and field in sub:
            return sub[field]
    for sub in data.values():
        if isinstance(sub, dict) and field in sub:
            return sub[field]
    return None


def is_uncertain(value):
    return "[uncertain]" in json.dumps(value, ensure_ascii=False)


def is_empty(value):
    return value is None or (isinstance(value, str) and value.strip().lower() in SKIP_VALUES)


def fmt(value, depth=0):
    """Render a value as markdown."""
    if isinstance(value, dict):
        parts = [f"{k}: {fmt(v, depth + 1)}" for k, v in value.items() if not is_empty(v)]
        return "; ".join(parts) if depth else "<br>".join(parts)
    if isinstance(value, list):
        if all(isinstance(v, dict) for v in value):
            return "\n".join(
                "- " + " | ".join(f"{k}: {fmt(v, depth + 1)}" for k, v in item.items()) for item in value
            )
        items = [fmt(v, depth + 1) for v in value]
        if sum(len(i) for i in items) <= 120:
            return ", ".join(items)
        return "\n".join(f"- {i}" for i in items)
    return str(value).strip()


def render_field(label, value):
    text = fmt(value)
    if "\n" in text or len(text) > 100:
        body = text if text.startswith("- ") else "\n".join(f"> {line}" if line else ">" for line in text.split("\n"))
        return f"**{label}**\n\n{body}\n"
    return f"**{label}:** {text}\n"


def main():
    outline = yaml.safe_load((ROOT / "outline.yaml").read_text(encoding="utf-8"))
    fields = yaml.safe_load((ROOT / "fields.yaml").read_text(encoding="utf-8"))["fields"]
    # output_dir is written relative to the project root (the directory above this one)
    out_dir = (ROOT.parent / outline["execution"]["output_dir"]).resolve()

    results = {p.stem: json.loads(p.read_text(encoding="utf-8")) for p in sorted(out_dir.glob("*.json"))}
    by_id = {d.get("id"): stem for stem, d in results.items() if d.get("id")}
    defined = {f["name"] for flist in fields.values() for f in flist}

    entries, missing = [], []
    for item in outline["items"]:
        stem = file_slug(item["name"])
        if stem not in results:
            stem = by_id.get(item["id"])
        if stem is None:
            missing.append(item["name"])
            continue
        year = re.findall(r"\b(1[89]\d\d|20\d\d)\b", item["name"])
        entries.append((item, results.pop(stem), year[0] if year else None))
    orphans = sorted(results)  # JSON files not matched to any outline item

    lines = [
        f"# {outline['topic']}",
        "",
        outline.get("angle", "").strip(),
        "",
        f"{len(entries)} items. Fields marked uncertain, and fields that do not apply to an item's group, are left out; "
        "each item lists the uncertain fields it omits.",
        "",
        "## Contents",
        "",
    ]
    for n, (item, data, year) in enumerate(entries, 1):
        meta = [item.get("group", "").capitalize()]
        if year:
            meta.append(year)
        meta.append(f"{len(data.get('uncertain', []))} uncertain")
        lines.append(f"{n}. [{item['name']}](#{anchor(item['name'])}) - {' | '.join(m for m in meta if m)}")
    lines.append("")

    for n, (item, data, _) in enumerate(entries, 1):
        uncertain = set(data.get("uncertain", []))
        lines += ["---", "", f'<a id="{anchor(item["name"])}"></a>', "", f"## {n}. {item['name']}", ""]
        for cat, flist in fields.items():
            block = []
            for f in flist:
                value = lookup(data, f["name"], cat)
                if f["name"] in uncertain or is_empty(value) or is_uncertain(value):
                    continue
                block.append(render_field(title_case(f["name"]), value))
            if block:
                lines += [f"### {KEY_TO_TITLE.get(cat, title_case(cat))}", ""] + block

        extras = {
            k: v for k, v in data.items()
            if k not in defined and k not in INTERNAL_KEYS and k not in NESTED_KEYS
            and not is_empty(v) and not is_uncertain(v)
        }
        if extras or uncertain:
            lines += ["### Other Info", ""]
            for k, v in extras.items():
                lines.append(render_field(title_case(k), v))
            if uncertain:
                lines.append("**Omitted as uncertain**\n")
                lines += [f"- {u}" for u in sorted(uncertain)]
                lines.append("")

    if missing or orphans:
        lines += ["---", "", "## Unmatched", ""]
        lines += [f"- No result file for: {m}" for m in missing]
        lines += [f"- Result file not in outline: {o}.json" for o in orphans]
        lines.append("")

    (ROOT / "report.md").write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {ROOT / 'report.md'}: {len(entries)} items, {len(missing)} missing, {len(orphans)} unmatched files")


if __name__ == "__main__":
    main()
