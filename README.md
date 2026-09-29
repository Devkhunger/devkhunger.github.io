# Dev Khunger — Portfolio

A static site made of plain HTML, CSS and JavaScript. It has no build step and needs no packages installed.

```
portfolio/
├── index.html            # All page content
├── styles.css            # Design and layout
├── script.js             # Your links (edit at the top) and animations
└── assets/
    ├── favicon.svg
    ├── og-image.png      # Preview image shown when the link is shared on LinkedIn
    └── Dev_Khunger_Resume.pdf   # ← add your CV here with exactly this name
```

## Before publishing
1. All links are in the `LINKS` object at the top of `script.js`. Any link left empty is hidden automatically.
2. To update your CV, replace `assets/Dev_Khunger_Resume.pdf` and keep the same file name.
3. The site URL (`https://devkhunger.github.io/`) is set in the `og:url`, `og:image` and `canonical` tags in `index.html`. Update them if you move to a custom domain.
4. Optional: to show a photo, replace the text `DK` inside `.about__avatar` in `index.html` with `<img src="assets/photo.jpg" alt="Dev Khunger">`.

## Hosting (free)
- **GitHub Pages:** Push the files to a repo named `<username>.github.io`. The site then goes live at `https://<username>.github.io`.
- **Netlify or Vercel:** Drag and drop the `portfolio` folder, or connect the repo.

## Adding it to LinkedIn
- Profile → **Edit intro** → **Website**: paste your site URL.
- Profile → **Featured** → **Add a link**: this shows the preview card from `og-image.png`.
