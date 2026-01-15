# GEMINI.md

## Project Overview

This project is a static portfolio website for **OST Consultancy BV**, a consultancy focused on JVM-based backend development, Kubernetes, and scalable cloud-native architectures. The project is owned by Oleksandr Shtykhno.

The website is a fully functional professional portfolio showcasing:
- Professional experience and career history
- Technical skills and expertise
- Education and certifications
- Downloadable CVs in English and Dutch (PDF format)
- Contact information

The project is built using:
- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Custom styles with responsive design (no external CSS framework)
- **JavaScript** - Interactive features including typed.js animations, smooth scrolling, and navigation
- **Typed.js** - For typing animation effects in the hero section
- **Font Awesome** - For icons
- **Google Fonts** - DM Sans font family

A Python script (`md_to_pdf.py`) is included as a utility to convert Markdown CV files to PDF format.

## Building and Running

This is a static website and does not require a build process.

To view the website, you can either:
1. Open the `index.html` file directly in your web browser.
2. Run a simple local web server in the project's root directory. For example, using Python:

    ```bash
    python -m http.server
    ```
    Then, navigate to `http://localhost:8000` in your browser.

## Development Conventions

- **Styling**: The project uses custom CSS without external frameworks. Styles follow a mobile-first responsive approach.
- **Accessibility**: The website includes accessibility features such as skip links, ARIA labels, and semantic HTML.
- **CV Generation**: The `md_to_pdf.py` script converts Markdown CV files (`CV_EN.md`, `CV_NL.md`) to PDF format.

## Git Conventions

- **Commits**: Do not commit changes to the local repository unless explicitly requested by the user.
- **Pushing**: Never push changes to a remote repository. This action is strictly reserved for the user.

## Key Files

- **`index.html`**: The main entry point for the website - a complete portfolio page.
- **`css/styles.css`**: The primary stylesheet with custom responsive styles.
- **`js/scripts.js`**: Custom JavaScript for navigation, animations, and interactive features.
- **`CV_EN.md`**: The English version of the CV in Markdown format.
- **`CV_NL.md`**: The Dutch version of the CV in Markdown format.
- **`CV_EN_Oleksandr_Shtykhno.pdf`**: The English version of the CV (generated PDF).
- **`CV_NL_Oleksandr_Shtykhno.pdf`**: The Dutch version of the CV (generated PDF).
- **`md_to_pdf.py`**: A Python script to convert Markdown CV files to PDF.
- **`README.md`**: The project's README file.
- **`CNAME`**: Custom domain configuration for GitHub Pages (ost-consultancy.nl).
- **`assets/`**: Contains static assets including:
  - `favicon.ico` - Website favicon
  - `img/` - Images including mobile fallback background
  - `mp4/` - Background video file
