#!/usr/bin/env python3
"""Generate report.md from results/*.json + fields.yaml for this research topic."""

import json
import re
from pathlib import Path

import yaml

TOPIC_DIR = Path(__file__).parent
RESULTS_DIR = TOPIC_DIR / "results"
FIELDS_PATH = TOPIC_DIR / "fields.yaml"
OUTLINE_PATH = TOPIC_DIR / "outline.yaml"
REPORT_PATH = TOPIC_DIR / "report.md"

# Fields to surface in the TOC next to each item name, per user selection.
TOC_SUMMARY_FIELDS = ["publication_date", "methodology_type"]

CATEGORY_MAPPING = {
    "Basic info": ["basic_info", "Basic info", "Basic Info"],
    "Trust and verification metrics": ["trust_and_verification_metrics", "Trust and verification metrics"],
    "Who carries the gap": ["who_carries_the_gap", "Who carries the gap"],
    "Why the gap persists": ["why_the_gap_persists", "Why the gap persists"],
    "Comparative and framing material": ["comparative_and_framing_material", "Comparative and framing material"],
}

INTERNAL_KEYS = {"_source_file", "uncertain"}
NESTED_TOP_LEVEL_KEYS = {
    k for keys in CATEGORY_MAPPING.values() for k in keys
}


def slugify_anchor(name: str) -> str:
    """GitHub-style markdown anchor slug."""
    s = name.lower()
    s = re.sub(r"[^\w\s-]", "", s)
    s = re.sub(r"\s+", "-", s.strip())
    return s


def is_uncertain(value) -> bool:
    if value is None:
        return True
    if isinstance(value, str):
        if value.strip() == "":
            return True
        if "[uncertain]" in value.lower():
            return True
    return False


def find_field_value(data: dict, field_name: str):
    """Look up field_name: top level -> category-mapped nested dict -> any nested dict."""
    if field_name in data and not isinstance(data[field_name], dict):
        return data[field_name]
    if field_name in data:
        return data[field_name]

    for category_keys in CATEGORY_MAPPING.values():
        for key in category_keys:
            sub = data.get(key)
            if isinstance(sub, dict) and field_name in sub:
                return sub[field_name]

    for value in data.values():
        if isinstance(value, dict) and field_name in value:
            return value[field_name]

    return None


def format_value(value) -> str:
    if isinstance(value, list):
        if all(isinstance(v, dict) for v in value) and value:
            lines = []
            for item in value:
                parts = [f"{k}: {v}" for k, v in item.items()]
                lines.append("- " + " | ".join(parts))
            return "\n".join(lines)
        joined = ", ".join(str(v) for v in value)
        if len(joined) <= 100:
            return joined
        return "\n".join(f"- {v}" for v in value)
    if isinstance(value, dict):
        return "; ".join(f"{k}: {v}" for k, v in value.items())
    text = str(value)
    if len(text) > 100:
        return f"> {text}"
    return text


def load_fields():
    with open(FIELDS_PATH) as f:
        return yaml.safe_load(f)


def load_outline():
    with open(OUTLINE_PATH) as f:
        return yaml.safe_load(f)


def load_results():
    results = []
    for path in sorted(RESULTS_DIR.glob("*.json")):
        with open(path) as f:
            data = json.load(f)
        data["_source_file"] = path.name
        results.append(data)
    return results


def build_toc(results, fields_def) -> str:
    lines = ["## Table of Contents", ""]
    for i, data in enumerate(results, 1):
        name = data.get("source_name") or data["_source_file"]
        anchor = slugify_anchor(name)
        summary_parts = []
        for field_name in TOC_SUMMARY_FIELDS:
            value = find_field_value(data, field_name)
            if is_uncertain(value) or field_name in data.get("uncertain", []):
                continue
            label = field_name.replace("_", " ").capitalize()
            summary_parts.append(f"{label}: {value}")
        suffix = f" - {' | '.join(summary_parts)}" if summary_parts else ""
        lines.append(f"{i}. [{name}](#{anchor}){suffix}")
    lines.append("")
    return "\n".join(lines)


def build_item_section(data: dict, fields_def: dict) -> str:
    name = data.get("source_name") or data["_source_file"]
    uncertain_list = data.get("uncertain", []) or []
    lines = [f"## {name}", ""]

    defined_field_names = set()
    for category, field_list in fields_def.get("fields", {}).items():
        rendered_rows = []
        for field_spec in field_list:
            field_name = field_spec["name"]
            defined_field_names.add(field_name)
            if field_name in uncertain_list:
                continue
            value = find_field_value(data, field_name)
            if is_uncertain(value):
                continue
            label = field_spec.get("description", field_name).split(".")[0]
            rendered_rows.append((field_name, format_value(value)))

        if not rendered_rows:
            continue
        lines.append(f"### {category}")
        lines.append("")
        for field_name, formatted in rendered_rows:
            label = field_name.replace("_", " ").capitalize()
            if "\n" in formatted:
                lines.append(f"**{label}:**")
                lines.append("")
                lines.append(formatted)
                lines.append("")
            else:
                lines.append(f"- **{label}:** {formatted}")
        lines.append("")

    # Extra fields not defined in fields.yaml
    extra = {}
    for key, value in data.items():
        if key in INTERNAL_KEYS or key in NESTED_TOP_LEVEL_KEYS:
            continue
        if key in defined_field_names:
            continue
        if is_uncertain(value):
            continue
        extra[key] = value

    if extra:
        lines.append("### Other info")
        lines.append("")
        for key, value in extra.items():
            label = key.replace("_", " ").capitalize()
            lines.append(f"- **{label}:** {format_value(value)}")
        lines.append("")

    if uncertain_list:
        lines.append("### Uncertain fields")
        lines.append("")
        for field_name in uncertain_list:
            lines.append(f"- {field_name}")
        lines.append("")

    return "\n".join(lines)


def main():
    outline = load_outline()
    fields_def = load_fields()
    results = load_results()

    topic = outline.get("topic", "Research Report")

    parts = [f"# {topic}", ""]
    description = outline.get("description")
    if description:
        parts.append(description.strip())
        parts.append("")

    parts.append(build_toc(results, fields_def))

    parts.append("## Detailed Findings")
    parts.append("")
    for data in results:
        parts.append(build_item_section(data, fields_def))
        parts.append("---")
        parts.append("")

    REPORT_PATH.write_text("\n".join(parts))
    print(f"Wrote {REPORT_PATH} ({len(results)} items)")


if __name__ == "__main__":
    main()
