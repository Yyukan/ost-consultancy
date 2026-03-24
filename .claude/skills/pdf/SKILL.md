---
name: pdf
description: Converts Markdown CV files (CV_EN.md, CV_NL.md) to professional PDF format using a specialized Python script. Use when CV content is updated or when the user requests to regenerate the PDF versions of the curriculum vitae.
---

# CV PDF Generator

This skill automates the conversion of Markdown-based CVs into professional, styled PDF documents.

## Workflow

1.  **Identify Markdown Sources**: Ensure `CV_EN.md` and `CV_NL.md` are present in the project root.
2.  **Execute Conversion**: Run the bundled `pdf.py` script.
3.  **Verify Output**: Confirm that `CV_EN_Oleksandr_Shtykhno.pdf` and `CV_NL_Oleksandr_Shtykhno.pdf` have been successfully generated.

## Bundled Resources

### Scripts

- `scripts/pdf.py`: A Python executable that uses `markdown` and `weasyprint` to generate styled PDFs.
  - **Usage**: 
    1. Ensure the virtual environment is activated: `source .venv/bin/activate`
    2. Run the script: `python3 .gemini/skills/pdf/scripts/pdf.py`
  - **Requirements**: `pip install markdown weasyprint` (installed in `.venv`).

## Styling Details

The generated PDFs use a clean, professional Swiss-style look:
- **Typography**: Helvetica Neue / Arial.
- **Header**: Large uppercase name with a thick black underline.
- **Sections**: High-contrast black background with white text for section headers.
- **Layout**: Optimized A4 margins with justified text for readability.
