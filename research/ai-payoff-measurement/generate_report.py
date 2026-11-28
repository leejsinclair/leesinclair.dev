#!/usr/bin/env python3
"""Build report.md from results/*.json, skipping [uncertain] values and fields."""
import glob
import json
import os
import re

import yaml

HERE = os.path.dirname(os.path.abspath(__file__))
FIELDS = yaml.safe_load(open(os.path.join(HERE, "fields.yaml")))["fields"]
OUTLINE = yaml.safe_load(open(os.path.join(HERE, "outline.yaml")))
RESULTS = os.path.join(HERE, OUTLINE["execution"].get("output_dir", "./results"))

CATEGORY_MAPPING = {
    "basic_info": ["basic_info", "Basic Info"],
    "findings": ["findings", "Findings"],
    "caveats": ["caveats", "Caveats"],
}
INTERNAL = {"_source_file", "uncertain", *[k for v in CATEGORY_MAPPING.values() for k in v]}
TOC_FIELDS = ["data_type"]  # default taken (non-interactive run)


UNCERTAIN_RE = re.compile(r"\[uncertain(?:\]|[:\s][^\]]*\])", re.IGNORECASE)


def is_uncertain(v):
    """True for any [uncertain] marker, including qualified ones like [uncertain: note]."""
    return isinstance(v, str) and bool(UNCERTAIN_RE.search(v))


def lookup(d, cat, name):
    if name in d:
        return d[name]
    for key in CATEGORY_MAPPING.get(cat, []):
        if isinstance(d.get(key), dict) and name in d[key]:
            return d[key][name]
    for v in d.values():
        if isinstance(v, dict) and name in v:
            return v[name]
    return None


def fmt(v):
    if isinstance(v, list):
        items = [x for x in v if not is_uncertain(x) and not (isinstance(x, dict) and any(is_uncertain(y) for y in x.values()))]
        if not items:
            return None
        if all(isinstance(x, dict) for x in items):
            return "\n".join("- " + " | ".join(f"{k}: {fmt(y)}" for k, y in x.items()) for x in items)
        if all(isinstance(x, str) and len(x) < 40 for x in items):
            return ", ".join(items)
        return "\n".join(f"- {fmt(x)}" for x in items)
    if isinstance(v, dict):
        parts = [f"- **{k}**: {fmt(y)}" for k, y in v.items() if fmt(y)]
        return "\n".join(parts) or None
    if v is None or v == "" or is_uncertain(v):
        return None
    s = str(v)
    return s


def anchor(s):
    return re.sub(r"[^a-z0-9 -]", "", s.lower()).strip().replace(" ", "-")


def main():
    files = sorted(glob.glob(os.path.join(RESULTS, "*.json")))
    docs = [(os.path.splitext(os.path.basename(f))[0].replace("_", " "), json.load(open(f))) for f in files]
    out = [f"# {OUTLINE['topic']}", "", "Generated from results/*.json. Values marked [uncertain] and fields in each file's uncertain list are left out.", "", "## Contents", ""]
    for i, (name, d) in enumerate(docs, 1):
        skip = set(d.get("uncertain", []))
        extra = " | ".join(f"{f}: {fmt(lookup(d, '', f))}" for f in TOC_FIELDS if f not in skip and fmt(lookup(d, '', f)))
        out.append(f"{i}. [{name}](#{anchor(name)})" + (f" - {extra}" if extra else ""))
    out.append("")
    defined = {f["name"] for fs in FIELDS.values() for f in fs}
    for name, d in docs:
        skip = set(d.get("uncertain", []))
        out += [f"## {name}", ""]
        for cat, fs in FIELDS.items():
            block = []
            for f in fs:
                if f["name"] in skip:
                    continue
                val = fmt(lookup(d, cat, f["name"]))
                if val:
                    block += [f"**{f['name']}**", "", val, ""]
            if block:
                out += [f"### {cat}", ""] + block
        other = {k: v for k, v in d.items() if k not in defined and k not in INTERNAL and k not in skip}
        if other:
            out += ["### Other Info", ""]
            for k, v in other.items():
                if fmt(v):
                    out += [f"**{k}**", "", fmt(v), ""]
        if skip:
            out += ["### Uncertain fields (omitted)", ""] + [f"- {u}" for u in sorted(skip)] + [""]
    open(os.path.join(HERE, "report.md"), "w").write("\n".join(out))
    print(f"Wrote report.md with {len(docs)} items")


if __name__ == "__main__":
    main()
