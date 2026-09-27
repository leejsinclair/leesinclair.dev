#!/usr/bin/env python3
"""Merge results/*.json into report.md, skipping uncertain values."""

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


def file_slug(name):
    return re.sub(r"[^A-Za-z0-9_-]", "", name.replace(" ", "_"))


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
    return v is None or (isinstance(v, str) and not v.strip()) or "[uncertain]" in json.dumps(v, ensure_ascii=False)


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
    toc.append(f"{n}. [{name}](#{anchor(name)})")
    path = RESULTS / f"{file_slug(name)}.json"
    body.append(f"## {name}\n")
    if not path.exists():
        body.append("_No result file._\n")
        continue
    data = json.loads(path.read_text(encoding="utf-8"))
    uncertain = set(data.get("uncertain") or [])
    defined = set()
    for cat, flist in FIELDS.items():
        lines = []
        for f in flist:
            fname = f["name"]
            defined.add(fname)
            v = find(data, fname, cat)
            if fname in uncertain or skip(v):
                continue
            lines.append(f"- **{label(fname)}:** {block(fmt(v))}")
        if lines:
            body.append(f"### {label(cat)}\n\n" + "\n".join(lines) + "\n")
    extras = [
        f"- **{label(k)}:** {block(fmt(v))}"
        for k, v in data.items()
        if k not in INTERNAL and k not in NESTED_KEYS and k not in defined and not skip(v)
    ]
    if extras:
        body.append("### Other info\n\n" + "\n".join(extras) + "\n")
    if uncertain:
        body.append("### Unverified (omitted above)\n\n" + "\n".join(f"- {u}" for u in sorted(uncertain)) + "\n")

out = f"# {OUTLINE['topic']}\n\n## Contents\n\n" + "\n".join(toc) + "\n\n" + "\n".join(body)
(ROOT / "report.md").write_text(out, encoding="utf-8")
print(f"Wrote {ROOT / 'report.md'} ({len(items)} items)")
