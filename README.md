# Portfolio Node

A clean portfolio starter built with **Node.js + Express + EJS**.

## Run locally
```bash
npm install
npm run dev  # or: npm start
```

Then open http://localhost:3000

## Customize
- Edit your name in `views/partials/nav.ejs`
- Update the hero text in `views/index.ejs`
- Add projects in `data/works.js`
- Tweak colors in `public/css/styles.css`

## Tailwind CSS
- Edit styles in `src/input.css` (contains `@tailwind` plus custom styles).
- Build once: `npm run build:css`
- Watch while developing (second terminal): `npm run tailwind:watch`
- Output is generated to `public/css/styles.css`.

## Personalization
- Your name appears in `views/partials/nav.ejs` and `views/index.ejs`.
- Update bio in `views/about.ejs` and projects in `data/works.js`.
