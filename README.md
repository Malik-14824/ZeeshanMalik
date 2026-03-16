# Zeeshan Malik Portfolio

A modern, responsive personal portfolio website for showcasing software engineering, web development, SEO, and digital marketing work.

## Live Demo

- Website: [https://zeeshanmalik.me](https://zeeshanmalik.me)

## Preview

![Portfolio Preview](assets/images/Digital%20Products.png)

## About This Project

This project is a single-page portfolio built with modular HTML sections, custom CSS animations, and lightweight JavaScript utilities.

The site is designed to:

- Present professional profile and services
- Showcase featured projects with category filters
- Highlight skills and career journey
- Provide a direct contact channel for clients and recruiters

## Key Features

- Responsive design optimized for desktop, tablet, and mobile
- Modular page composition using dynamic section/component loading
- Smooth reveal animations for sections and content blocks
- Active navigation state (scrollspy behavior)
- Dark/light theme toggle with local preference persistence
- Interactive project filtering by category
- Contact form with validation and async submission
- Social links and professional profile integration

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- Tailwind CSS (CDN runtime config)
- Google Fonts + Material Symbols

## Project Structure

```
.
├── index.html
├── CNAME
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   ├── animations.js
│   │   ├── scrollspy.js
│   │   └── theme.js
│   ├── images/
│   └── icons/
├── components/
│   ├── header.html
│   └── footer.html
└── sections/
	├── hero.html
	├── about.html
	├── skills.html
	├── services.html
	├── projects.html
	├── experience.html
	└── contact.html
```

## How It Works

`index.html` loads reusable sections (`components/*`, `sections/*`) using `fetch`, then initializes scripts after the DOM is assembled.

This keeps the structure clean and makes each section easier to maintain independently.

## Getting Started (Local Development)

Because this project loads HTML fragments via `fetch`, you should run it with a local HTTP server (not by opening `index.html` directly).

### Option 1: Python

```bash
python -m http.server 5500
```

## Contact Form Configuration

The contact form is currently connected to FormSubmit via:

`https://formsubmit.co/ajax/zeeshan.malik14824@gmail.com`

To use your own email inbox:

1. Open `index.html`
2. Find the FormSubmit endpoint in the `fetch(...)` call
3. Replace the email with your own FormSubmit target

## Customization Guide

- Personal info: update `sections/hero.html`, `sections/about.html`, `sections/contact.html`
- Skills and services: update `sections/skills.html` and `sections/services.html`
- Projects and categories: update `sections/projects.html`
- Navigation/footer links: update `components/header.html` and `components/footer.html`
- Theme colors and visual styles: update Tailwind config in `index.html` and styles in `assets/css/main.css`

## Deployment

This project is static and can be deployed to:

- GitHub Pages
- Netlify
- Vercel
- Any static hosting provider

The included `CNAME` file is configured for custom domain usage.

## Performance and UX Notes

- Lightweight architecture with no heavy framework runtime
- Progressive section animations with reduced-motion respect
- Smooth hover states and visual hierarchy for project cards
- Sticky, scroll-aware navigation for better usability

## Roadmap Ideas

- Add downloadable resume link target
- Add project detail pages/case studies
- Add multilingual support
- Add blog/articles section
- Add Lighthouse CI checks

## License

This project is for personal portfolio use.

If you want to reuse the structure, please customize content, branding, and assets before publishing.

## Author

**Zeeshan Malik**

- GitHub: [Zeeshan-Malik33](https://github.com/Zeeshan-Malik33)
- LinkedIn: [zeeshan-malik27](https://www.linkedin.com/in/zeeshan-malik27/)
- Website: [zeeshanmalik.me](https://zeeshanmalik.me)
