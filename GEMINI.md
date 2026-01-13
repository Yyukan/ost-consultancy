# GEMINI.md

## Project Overview

This project is a static website for **OST Consultancy BV**, a consultancy focused on JVM-based backend development, Kubernetes, and scalable cloud-native architectures. The project is owned by Oleksandr Shtykhno.

Currently, the `index.html` serves as a "Coming Soon" landing page. However, the `PLAN.md` file contains a comprehensive and detailed plan to build a full-fledged professional portfolio website. The final website will showcase experience, skills, and certifications, and provide downloadable CVs in English and Dutch.

The project is built using:
- **HTML5**
- **CSS3** (with the Bootstrap framework)
- **JavaScript** (currently minimal, but planned for interactive features)
- A Python script (`extract_cv.py`) is included as a utility to extract text from the PDF CVs.

## Building and Running

This is a static website and does not require a build process.

To view the website, you can either:
1.  Open the `index.html` file directly in your web browser.
2.  Run a simple local web server in the project's root directory. For example, using Python:

    ```bash
    python -m http.server
    ```
    Then, navigate to `http://localhost:8000` in your browser.

## Development Conventions

- **Framework**: The project uses the [Bootstrap](https://getbootstrap.com/) CSS framework. Development should adhere to Bootstrap conventions and best practices.
- **Project Plan**: The `PLAN.md` file is the source of truth for the future direction of the website. It outlines design concepts, color palettes, key features, and implementation steps. Any new development should follow this plan.
- **CV Extraction**: The `extract_cv.py` script is available to parse and display the content of the CV PDFs. It requires the `pypdf` library. To install the dependencies, you can use pip:
    ```bash
    pip install -r requirements.txt 
    ```
    (Note: a `requirements.txt` file does not exist yet, but would be the conventional way to manage this dependency).

## Git Conventions

- **Commits**: Do not commit changes to the local repository unless explicitly requested by the user.
- **Pushing**: Never push changes to a remote repository. This action is strictly reserved for the user.

## Key Files

- **`index.html`**: The main entry point for the website.
- **`css/styles.css`**: The primary stylesheet, which includes Bootstrap and custom styles.
- **`js/scripts.js`**: Intended for custom JavaScript. Currently empty.
- **`CV_EN_Oleksandr_Shtykhno.pdf`**: The English version of the CV.
- **`CV_NL_Oleksandr_Shtykhno.pdf`**: The Dutch version of the CV.
- **`extract_cv.py`**: A Python script to extract text from the CV PDF files.
- **`README.md`**: The project's README file.
- **`assets/`**: Contains static assets like images, videos, and the favicon.
