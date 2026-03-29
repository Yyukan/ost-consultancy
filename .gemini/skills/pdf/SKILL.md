---
name: pdf
description: Converts Markdown CV files (CV_EN.md, CV_NL.md) to professional PDF format using a specialized Python script. Use this skill whenever the user asks to generate, export, rebuild, or update the PDF versions of the CV or curriculum vitae — even if they just say "make the PDFs", "export to PDF", "regenerate PDFs", or "convert CV to PDF". Trigger this skill any time PDF output of the CV is needed, not just when the user says "regenerate".
---

Automates the conversion of Markdown-based CVs into professional, styled PDF documents.

## Workflow

1. **Verify inputs**: Confirm `CV_EN.md` and `CV_NL.md` exist in the project root.
2. **Activate venv**: Run `source .venv/bin/activate` from the project root.
3. **Run conversion from project root**:
   ```
   python3 .claude/skills/pdf/scripts/pdf.py
   ```
4. **Verify output**: Confirm `CV_EN_Oleksandr_Shtykhno.pdf` and `CV_NL_Oleksandr_Shtykhno.pdf` exist and are non-empty.

> The script uses relative paths, so it **must** be run from the project root directory.

## Handling dependency errors

If `markdown` or `weasyprint` are missing:
```
pip install markdown weasyprint
```
Both are already installed in `.venv`.

## Bundled Resources

### Scripts

- `scripts/pdf.py`: Python script using `markdown` and `weasyprint` to generate styled PDFs from `CV_EN.md` and `CV_NL.md`.

## Styling Details

The generated PDFs use a clean, professional Swiss-style look:
- **Typography**: Helvetica Neue / Arial
- **Header**: Large uppercase name with a thick black underline
- **Sections**: High-contrast black background with white text for section headers
- **Layout**: A4 margins with justified text
