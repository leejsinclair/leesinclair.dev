#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generate report.md from the JSON results in ./results, using fields.yaml for
field/category structure. Handles both flat and nested JSON shapes.
"""

import json
import re
from pathlib import Path

import yaml

TOPIC_DIR = Path(__file__).parent
RESULTS_DIR = TOPIC_DIR / "results"
FIELDS_PATH = TOPIC_DIR / "fields.yaml"
OUTLINE_PATH = TOPIC_DIR / "outline.yaml"
REPORT_PATH = TOPIC_DIR / "report.md"

# User-selected TOC summary field(s)
TOC_FIELDS = ["confidence"]

CATEGORY_MAPPING = {
    "basic_info": ["basic_info", "Basic Info"],
    "core_stat": ["core_stat", "Core Stat"],
    "measurement_type": ["measurement_type", "Measurement Type"],
    "trust_check_relationship": ["trust_check_relationship", "Trust Check Relationship"],
    "seniority_breakdown": ["seniority_breakdown", "Seniority Breakdown"],
    "source_confidence": ["source_confidence", "Source Confidence"],
    "overlap_with_existing_essay": ["overlap_with_existing_essay", "Overlap With Existing Essay"],
}

CATEGORY_TITLES = {
    "basic_info": "Basic Info",
    "core_stat": "Core Stat",
    "measurement_type": "Measurement Type",
    "trust_check_relationship": "Trust / Check Relationship",
    "seniority_breakdown": "Seniority Breakdown",
    "source_confidence": "Source Confidence",
    "overlap_with_existing_essay": "Overlap With Existing Essay",
}

_SKIP_TOP_KEYS = {"_source_file", "uncertain", "name", "category"}
_NESTED_KEYS = {k for keys in CATEGORY_MAPPING.values() for k in keys}


def load_fields():
    data = yaml.safe_load(FIELDS_PATH.read_text(encoding="utf-8")) or {}
    fn = data.get("fields", {})
    field_order = []  # (category, field_name, description)
    for cname, flist in fn.items():
        if cname == "uncertain":
            continue
        for field in flist:
            field_order.append((cname, field["name"], field.get("description", "")))
    return field_order


def slugify(name: str) -> str:
    s = name.lower()
    s = re.sub(r"[^a-z0-9\s-]", "", s)
    s = re.sub(r"\s+", "-", s.strip())
    s = re.sub(r"-+", "-", s)
    return s


def find_field_value(data: dict, field_name: str):
    """Look up field_name: top level -> category mapping key -> any nested dict."""
    if field_name in data:
        return data[field_name]
    for key, aliases in CATEGORY_MAPPING.items():
        for alias in aliases:
            if alias in data and isinstance(data[alias], dict):
                if field_name in data[alias]:
                    return data[alias][field_name]
    # fallback: search all nested dicts
    for v in data.values():
        if isinstance(v, dict) and field_name in v:
            return v[field_name]
    return None


def is_uncertain(value, field_name, uncertain_list) -> bool:
    if field_name in uncertain_list:
        return True
    if value is None or value == "":
        return True
    if isinstance(value, str) and "[uncertain]" in value:
        return True
    return False


def format_value(value) -> str:
    if value is None:
        return ""
    if isinstance(value, str):
        v = value.strip()
        if len(v) > 100:
            return f"\n    > {v}"
        return v
    if isinstance(value, list):
        if all(isinstance(i, dict) for i in value) and value:
            lines = []
            for item in value:
                lines.append("    - " + " | ".join(f"{k}: {v}" for k, v in item.items()))
            return "\n" + "\n".join(lines)
        if all(isinstance(i, str) for i in value):
            joined = ", ".join(value)
            if len(joined) <= 100:
                return joined
            return "\n" + "\n".join(f"    - {i}" for i in value)
        return "\n" + "\n".join(f"    - {i}" for i in value)
    if isinstance(value, dict):
        return "\n" + "\n".join(f"    - **{k}**: {v}" for k, v in value.items())
    return str(value)


def collect_extra_fields(data: dict, known_fields: set) -> dict:
    extra = {}
    for k, v in data.items():
        if k in _SKIP_TOP_KEYS or k in _NESTED_KEYS or k in known_fields:
            continue
        extra[k] = v
    return extra


def main():
    field_order = load_fields()
    known_fields = {name for _, name, _ in field_order}

    outline = yaml.safe_load(OUTLINE_PATH.read_text(encoding="utf-8")) or {}
    topic = outline.get("topic", "Research Report")

    items = []
    for jf in sorted(RESULTS_DIR.glob("*.json")):
        data = json.loads(jf.read_text(encoding="utf-8"))
        items.append((jf.stem, data))

    lines = []
    lines.append(f"# {topic}")
    lines.append("")
    lines.append(f"_{len(items)} sources, generated from `{RESULTS_DIR.relative_to(TOPIC_DIR)}`._")
    lines.append("")
    lines.append("## Table of Contents")
    lines.append("")

    for i, (stem, data) in enumerate(items, start=1):
        name = data.get("name", stem)
        anchor = slugify(name)
        toc_bits = []
        for tf in TOC_FIELDS:
            val = find_field_value(data, tf)
            uncertain_list = data.get("uncertain", [])
            if val and not is_uncertain(val, tf, uncertain_list):
                toc_bits.append(f"{tf.replace('_', ' ').title()}: {val}")
        suffix = f" — {' | '.join(toc_bits)}" if toc_bits else ""
        lines.append(f"{i}. [{name}](#{anchor}){suffix}")

    lines.append("")
    lines.append("---")
    lines.append("")

    for stem, data in items:
        name = data.get("name", stem)
        anchor = slugify(name)
        uncertain_list = data.get("uncertain", [])

        lines.append(f"## {name}")
        lines.append(f'<a id="{anchor}"></a>')
        lines.append("")

        category = data.get("category")
        if category:
            lines.append(f"*Category: {category}*")
            lines.append("")

        # group fields by category in fields.yaml order
        by_category = {}
        for cname, fname, _desc in field_order:
            by_category.setdefault(cname, []).append(fname)

        for cname, fnames in by_category.items():
            rows = []
            for fname in fnames:
                val = find_field_value(data, fname)
                if is_uncertain(val, fname, uncertain_list):
                    continue
                rows.append((fname, val))
            if not rows:
                continue
            lines.append(f"**{CATEGORY_TITLES.get(cname, cname)}**")
            lines.append("")
            for fname, val in rows:
                label = fname.replace("_", " ").title()
                lines.append(f"- **{label}**: {format_value(val)}")
            lines.append("")

        extra = collect_extra_fields(data, known_fields)
        if extra:
            lines.append("**Other Info**")
            lines.append("")
            for k, v in extra.items():
                label = k.replace("_", " ").title()
                lines.append(f"- **{label}**: {format_value(v)}")
            lines.append("")

        if uncertain_list:
            lines.append("**Uncertain fields (excluded above):**")
            lines.append("")
            for u in uncertain_list:
                lines.append(f"- {u}")
            lines.append("")

        lines.append("---")
        lines.append("")

    REPORT_PATH.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {REPORT_PATH} ({len(items)} items)")


if __name__ == "__main__":
    main()
