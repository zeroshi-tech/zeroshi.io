# Zero Shi — Portfolio Website

A responsive, static portfolio template made with plain HTML, CSS, and JavaScript. No build tools or paid software required.

## Preview on your computer
1. Extract the ZIP file.
2. Open `index.html` in Chrome, Edge, or Firefox.
3. You can edit the files with VS Code, Notepad++, or another text editor.

## Main files
- `index.html` — page content, project titles, links, contact email.
- `styles.css` — colors, typography, spacing, responsive layout.
- `script.js` — active navigation and automatic copyright year.
- `assets/` — replaceable sample artwork.

## How to add your own portfolio images
1. Export your project preview as JPG, PNG, or WebP.
2. Put it in the `assets` folder, for example `my-project.jpg`.
3. Open `index.html` and find a project image line like:
   `<img src="assets/project-01.svg" alt="Abstract monochrome motion artwork">`
4. Change the `src` to your file, e.g. `src="assets/my-project.jpg"`.
5. Change the project title, category, and year in the nearby text.
6. Save and refresh the browser.

For best results, use landscape thumbnails around 1600 × 900 pixels. Keep filenames simple (letters, numbers, hyphens; no special characters).

## How to change the text
Use Ctrl+F in `index.html` to find `Zero Shi`, `Motion Designer`, `Project Title`, or the placeholder contact email. Replace those values with your own content.

## How to change colors
Open `styles.css` and edit the variables at the top:
- `--bg`: page background
- `--text`: main text
- `--muted`: secondary text
- `--blue` and `--purple`: accent colors

## Update links
- Social links are in the `.socials` section in `index.html`; replace each `href="#"` with your real profile URL.
- Contact email is in `mailto:hello@example.com`; replace `hello@example.com` with your email.
- Project cards currently link to `#contact`. You can change each `href` to a project page, YouTube video, Behance page, or Google Drive link.

## Publish on GitHub Pages
1. Create or open your GitHub repository.
2. Upload `index.html`, `styles.css`, `script.js`, and the entire `assets` folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then Save.
6. Wait a minute or two and open the URL GitHub provides.

Important: keep the filenames and folder structure intact, or update the matching paths in the HTML/CSS. The Google Fonts import requires internet access; the site still works without it using fallback fonts.
