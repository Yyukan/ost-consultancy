# AGENTS.md - AI Agent Guidelines

## Project Overview

This is a static portfolio website for **OST Consultancy BV**, a consultancy focused on JVM-based backend development, Kubernetes, and scalable cloud-native architectures. The project is owned by Oleksandr Shtykhno.

The website showcases professional experience, technical skills, education, certifications, downloadable CVs (English and Dutch), and contact information.

### Technologies
- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Custom styles with responsive design
- **JavaScript** - Vanilla JS with modern APIs
- **Typed.js** - Typing animation library
- **Font Awesome** - Icons
- **Google Fonts** - DM Sans font family

---

## Build, Lint, and Test Commands

This is a static website with no build process or test framework.

### Running Locally
```bash
# Start local development server
python -m http.server

# Or open directly in browser
open index.html
```

### CV PDF Generation
```bash
# Install dependencies
pip install markdown weasyprint

# Generate PDFs from Markdown
python md_to_pdf.py
```

### Validation (Manual)
- Open `index.html` in browser and verify rendering
- Check responsive design at different viewport sizes
- Validate HTML: https://validator.w3.org/
- Verify accessibility with browser dev tools

---

## Code Style Guidelines

### HTML
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`)
- Include `lang` attribute on `<html>` element
- Use descriptive `alt` text for all images
- Include skip links for accessibility
- Use ARIA labels where appropriate
- Keep attributes in alphabetical order within tags

### CSS
- Follow mobile-first responsive approach
- Use CSS custom properties (variables) for colors and spacing
- Place variables at the top of `styles.css`
- Group styles by section (base, layout, components, utilities)
- Use semantic class names (e.g., `.btn-primary`, not `.red-button`)
- Prefer flexbox and grid for layouts
- Include comments to separate major sections

### JavaScript
- Use ES6+ syntax (`const`/`let`, arrow functions, template literals)
- Use semantic function names (e.g., `initNavigation`, not `doStuff`)
- Keep functions small and focused
- Use `addEventListener` instead of inline event handlers
- Wrap in IIFE or use `DOMContentLoaded` to avoid global scope pollution

### Naming Conventions
- **Files**: kebab-case (`styles.css`, `scripts.js`)
- **CSS Classes**: kebab-case (`.main-header`, `.nav-links`)
- **JavaScript Functions**: camelCase (`initNavigation`, `scrollToSection`)
- **Constants**: UPPER_SNAKE_CASE for configuration values

### Accessibility
- Ensure WCAG 2.1 AA compliance
- Support `prefers-reduced-motion` media query
- Use sufficient color contrast (4.5:1 for normal text)
- Make all interactive elements keyboard accessible
- Include focus states for all clickable elements

---

## Development Workflow

### Git Conventions
- **Commits**: Do not commit changes unless explicitly requested by the user
- **Pushing**: Never push to remote - this is reserved for the user
- Use clear, descriptive commit messages focused on the "why"

### CV Updates
When updating CVs:
1. Edit `CV_EN.md` (English) and `CV_NL.md` (Dutch) simultaneously
2. Run `python md_to_pdf.py` to regenerate PDFs
3. Verify PDF output matches Markdown content

### Before Submitting Work
- Verify all external CDN links are accessible
- Test in multiple browsers if possible
- Ensure no console errors in browser dev tools

---

## Key Files

| File | Description |
|------|-------------|
| `index.html` | Main portfolio page |
| `css/styles.css` | Primary stylesheet |
| `js/scripts.js` | Interactive features |
| `CV_EN.md` / `CV_NL.md` | CV source (Markdown) |
| `CV_EN_Oleksandr_Shtykhno.pdf` | English CV (PDF) |
| `CV_NL_Oleksandr_Shtykhno.pdf` | Dutch CV (PDF) |
| `assets/` | Static assets (images, video, favicon) |
