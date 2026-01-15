# OST Consultancy BV - Portfolio Website

Professional portfolio website for **OST Consultancy BV**

## 🌐 Live Site

[ost-consultancy.nl](https://ost-consultancy.nl)

## ✨ Features

- **Responsive Design** - Mobile-first approach, works on all devices
- **Smooth Animations** - Scroll-triggered animations with Intersection Observer
- **Typed.js Effect** - Dynamic typing animation in hero section
- **Downloadable CVs** - English and Dutch versions (PDF)
- **Accessibility** - Skip links, ARIA labels, semantic HTML, reduced motion support
- **SEO Optimized** - Meta tags, Open Graph for social sharing

## 🛠 Technologies

- **HTML5** - Semantic markup
- **CSS3** - Custom styles with Bootstrap 5.2.3
- **JavaScript** - Vanilla JS with modern APIs
- **Typed.js** - Typing animation library
- **Font Awesome 6.3** - Icons
- **Google Fonts** - DM Sans font family

## 🚀 Quick Start

### Option 1: Open Directly
```bash
open index.html
```

### Option 2: Local Server
```bash
python -m http.server 8000
# Then visit http://localhost:8000
```

## 📄 CV Generation

Generate PDF versions of the CV from Markdown sources:

```bash
# Install dependencies
pip install markdown weasyprint

# Generate PDFs
python md_to_pdf.py
```

## 📁 Project Structure

```
ost-consultancy/
├── index.html              # Main portfolio page
├── css/
│   └── styles.css          # Stylesheet (Bootstrap + custom)
├── js/
│   └── scripts.js          # Interactive features
├── assets/
│   ├── favicon.ico         # Site favicon
│   ├── img/                # Images
│   └── mp4/                # Background video
├── CV_EN.md                # English CV (Markdown)
├── CV_NL.md                # Dutch CV (Markdown)
├── CV_EN_Oleksandr_Shtykhno.pdf  # English CV (PDF)
├── CV_NL_Oleksandr_Shtykhno.pdf  # Dutch CV (PDF)
├── md_to_pdf.py            # PDF generation script
├── CNAME                   # GitHub Pages custom domain
└── GEMINI.md               # AI assistant guidelines
```

## 👤 Author

**Oleksandr Shtykhno**  
Senior Solution Architect & Software Engineer

- 🔗 [LinkedIn](https://www.linkedin.com/in/yukan/)
- 🐙 [GitHub](https://github.com/Yyukan)
- 📧 ost.consultancy@gmail.com

## 📝 License

© 2026 OST Consultancy BV. All rights reserved.
