#!/usr/bin/env python3
"""Merge results/*.json into report.md, skipping uncertain values.

A string value carrying [uncertain] is dropped whole. In a list or dict, only the elements
carrying [uncertain] are dropped, so a field named in an item's `uncertain` array still shows
its verified elements. A string field named in that array is dropped.
"""

import json
import re
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent
OUTLINE = yaml.safe_load((ROOT / "outline.yaml").read_text(encoding="utf-8"))
FIELDS = yaml.safe_load((ROOT / "fields.yaml").read_text(encoding="utf-8"))["fields"]
RESULTS = (ROOT / OUTLINE["execution"]["output_dir"]).resolve()

CATEGORY_MAPPING = {
    "Basic Info": ["basic_info", "Basic Info"],
    "Technical Features": ["technical_features", "technical_characteristics", "Technical Features"],
    "Performance Metrics": ["performance_metrics", "performance", "Performance Metrics"],
    "Milestone Significance": ["milestone_significance", "milestones", "Milestone Significance"],
    "Business Info": ["business_info", "commercial_info", "Business Info"],
    "Competition & Ecosystem": ["competition_ecosystem", "competition", "Competition & Ecosystem"],
    "History": ["history", "History"],
    "Market Positioning": ["market_positioning", "market", "Market Positioning"],
}
NESTED_KEYS = {k for keys in CATEGORY_MAPPING.values() for k in keys} | set(FIELDS)
INTERNAL = {"_source_file", "uncertain"}


FILES = {
    "Ragazas, Ancient Origins article (30 September 2026)": "Ragazas_Ancient_Origins_article",
    "Sigari 2017, boat engravings at Boyuk Das": "Sigari_2017_boat_engravings",
    "Sigari et al. 2025, Rock Art Relationships Between Central Asia and Europe: The Role of Gobustan": "Sigari_et_al_2025_role_of_Gobustan",
    "Farajova on dating Gobustan petroglyphs and Ana Zaga cave": "Farajova_dating_and_Ana_Zaga",
    "UNESCO Gobustan Rock Art Cultural Landscape": "UNESCO_Gobustan_Rock_Art_Cultural_Landscape",
    "Gobustan boat typology and Heyerdahl": "Gobustan_boat_typology_and_Heyerdahl",
    "Ancient literary sources for the Argo and Aia": "Ancient_literary_sources_for_the_Argo_and_Aia",
    "Caspian to Phasis corridor in ancient geography": "Caspian_to_Phasis_corridor",
    "Golden Fleece historicity theories": "Golden_Fleece_historicity_theories",
}


def file_slug(name):
    return FILES.get(name) or re.sub(r"[^A-Za-z0-9_-]", "", name.replace(" ", "_"))


def tagged(v):
    return "[uncertain]" in json.dumps(v, ensure_ascii=False)


def prune(v):
    """Drop list elements and dict entries that carry [uncertain]; None if nothing is left."""
    if isinstance(v, list):
        kept = [p for p in (prune(x) for x in v) if p is not None]
        return kept or None
    if isinstance(v, dict):
        kept = {k: p for k, p in ((k, prune(x)) for k, x in v.items()) if p is not None}
        return kept or None
    return None if tagged(v) else v


def first_sentence(v):
    text = fmt(v).split("\n")[0].lstrip("- ")
    return re.split(r"(?<=[a-z)])\. ", text)[0].rstrip(".")[:90]


def anchor(text):
    return re.sub(r"\s", "-", re.sub(r"[^\w\s-]", "", text.lower()).strip())


def find(data, name, category):
    """Top level, then category key, then any nested dict."""
    if name in data:
        return data[name]
    for key in CATEGORY_MAPPING.get(category, []) + [category]:
        if isinstance(data.get(key), dict) and name in data[key]:
            return data[key][name]
    for v in data.values():
        if isinstance(v, dict) and name in v:
            return v[name]
    return None


def fmt(v):
    if isinstance(v, dict):
        return "; ".join(f"{k}: {fmt(x)}" for k, x in v.items())
    if isinstance(v, list):
        if all(isinstance(x, dict) for x in v):
            return "\n".join("- " + " | ".join(f"{k}: {fmt(x)}" for k, x in d.items()) for d in v)
        items = [fmt(x) for x in v]
        if sum(len(i) for i in items) <= 100:
            return ", ".join(items)
        return "\n".join(f"- {i}" for i in items)
    return str(v)


def skip(v):
    return v is None or (isinstance(v, str) and not v.strip())


def label(name):
    return name.replace("_", " ").capitalize()


def block(text):
    if "\n" in text:
        return "\n" + text
    return text if len(text) <= 100 else f"\n> {text}"


items = OUTLINE["items"]
toc, body = [], []

for n, item in enumerate(items, 1):
    name = item["name"]
    path = RESULTS / f"{file_slug(name)}.json"
    body.append(f"## {name}\n")
    if not path.exists():
        toc.append(f"{n}. [{name}](#{anchor(name)})")
        body.append("_No result file._\n")
        continue
    data = json.loads(path.read_text(encoding="utf-8"))
    summary = " | ".join(
        f"{label(k)}: {first_sentence(data[k])}" for k in ("source_tier", "access_status") if prune(data.get(k))
    )
    toc.append(f"{n}. [{name}](#{anchor(name)})" + (f" - {summary}" if summary else ""))
    uncertain = set(data.get("uncertain") or [])
    defined = set()
    for cat, flist in FIELDS.items():
        lines = []
        for f in flist:
            fname = f["name"]
            defined.add(fname)
            v = find(data, fname, cat)
            if fname in uncertain and isinstance(v, str):
                continue
            v = prune(v)
            if skip(v):
                continue
            lines.append(f"- **{label(fname)}:** {block(fmt(v))}")
        if lines:
            body.append(f"### {label(cat)}\n\n" + "\n".join(lines) + "\n")
    extras = [
        f"- **{label(k)}:** {block(fmt(v))}"
        for k, v in ((k, prune(v)) for k, v in data.items())
        if k not in INTERNAL and k not in NESTED_KEYS and k not in defined and not skip(v)
    ]
    if extras:
        body.append("### Other info\n\n" + "\n".join(extras) + "\n")
    if uncertain:
        body.append("### Fields with unverified values (those values omitted above)\n\n" + "\n".join(f"- {u}" for u in sorted(uncertain)) + "\n")

out = f"# {OUTLINE['topic']}\n\n## Contents\n\n" + "\n".join(toc) + "\n\n" + "\n".join(body)
(ROOT / "report.md").write_text(out, encoding="utf-8")
print(f"Wrote {ROOT / 'report.md'} ({len(items)} items)")
