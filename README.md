# Songtao Wang — Academic homepage

Website: **https://songtao-x.github.io/**

A simple academic homepage with a white background, a portrait placeholder, biography, publications, teaching, and interests. Adapted from [Laip11/academic-homepage-template](https://github.com/Laip11/academic-homepage-template); the original MIT license is preserved in `LICENSE`. Fonts and their licenses are bundled under `assets/fonts/`.

## Publishing

GitHub Pages publishes the `main` branch from the repository root. `index.html` is the complete static page, and `.nojekyll` tells Pages to serve the files directly. No dependency installation or build service is required. Changes go live after pushing to `main` and the GitHub Pages deployment completes.

## Editing

- `content/profile.md`: name, affiliation, and social links (HTML fragment).
- `content/main.md`: About me, publications, teaching, and hobbies (HTML fragment).
- `assets/avatar-placeholder.svg`: replace with a portrait, then update the image source and alt text in `content/profile.md`.
- `assets/site.css`: colors and responsive layout.
- `assets/main.js`: section navigation and footer year.
- `scripts/layout.html`: page structure and metadata.
- `CV.pdf`: the original CV, retained at its existing URL.

After changing a content fragment or the layout, run:

```sh
node scripts/render.mjs
```

Commit the updated `index.html` along with the source changes. On Vulcan, run Node or browser checks in a Slurm allocation. All page content also works without JavaScript.
