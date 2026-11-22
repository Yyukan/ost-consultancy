# OST Consultancy - Portfolio Website

Professional portfolio website for **OST Consultancy**

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
├── apps/                   # iOS apps & games: support, FAQ, privacy (one page)
│   ├── index.html
│   ├── apps-data.js        # All app data: add a new app here
│   ├── apps.css / apps.js
│   └── icons/              # 256x256 app icons, <id>.png
├── <app-id>/index.html     # Redirect stubs: URLs used in App Store listings
├── CV_EN.md                # English CV (Markdown)
├── CV_NL.md                # Dutch CV (Markdown)
├── CV_EN_Oleksandr_Shtykhno.pdf  # English CV (PDF)
├── CV_NL_Oleksandr_Shtykhno.pdf  # Dutch CV (PDF)
├── CNAME                   # GitHub Pages custom domain
└── AGENTS.md               # AI assistant guidelines
```

## 📱 Apps page

`/apps/` lists every iOS app with help, a shared FAQ, one Buy Me a Coffee link and one privacy policy.
Everything is generated from `apps/apps-data.js`.

**Add an app:** put its icon in `apps/icons/<id>.png` and add one entry to `apps` in `apps/apps-data.js`.
The left menu, card, privacy row and credits appear automatically.

**Old App Store URLs** (`/aircombat/`, `/seacombat/`, …) are kept as tiny redirect pages to `/apps/#<id>`.
Do not delete them: they are the Support/Privacy URLs in App Store Connect.

## 👤 Author

**Oleksandr Shtykhno**  
Senior Solution Architect & Software Engineer

- 🔗 [LinkedIn](https://www.linkedin.com/in/yukan/)
- 🐙 [GitHub](https://github.com/Yyukan)
- 📧 info@ost-consultancy.nl

## 📝 License

© 2026 OST Consultancy. All rights reserved.
