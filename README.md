# B. Sarathi — Developer Portfolio

A single-page portfolio site styled like a code editor (title bar, tabs, terminal hero, commit-log timeline). No frameworks or build step — just HTML, CSS, and vanilla JavaScript.

## Files

```
portfolio/
├── index.html   ← all page structure/content
├── style.css    ← design system (colors, type, layout, animations)
├── script.js    ← typing effect, project/skill data, nav, form
└── README.md
```

## Before you publish — fill in these placeholders

Open **script.js** and edit the `CONFIG` object at the top:

```js
const CONFIG = {
  linkedin: "",                     // e.g. "https://linkedin.com/in/your-handle"
  email: "your.email@example.com",  // your real email
  resumeUrl: "",                    // link to a hosted PDF resume
};
```

- **LinkedIn**: paste your profile URL, or leave blank (buttons will link to the Contact section instead).
- **Email**: replace the placeholder — it's used for the "Email" contact card and the contact form's mailto fallback.
- **Resume**: upload your resume PDF somewhere (e.g. this repo, Google Drive, or GitHub itself) and paste the direct link. Until you do, the Download Resume button shows a reminder alert instead of downloading anything.

### Certificates
The Certificates section currently shows a placeholder. To populate it:
1. Add your certificate images to the [Certificates](https://github.com/Sarathix3/Certificates) repo (or an `assets/certificates/` folder here).
2. In `index.html`, replace the `.cert-placeholder` div inside `<section id="certificates">` with `.cert-card` entries, e.g.:
   ```html
   <div class="cert-card">
     <img src="assets/certificates/your-cert.png" alt="Certificate name" />
     <div class="cert-card-title">Certificate name</div>
   </div>
   ```

### Profile photo
No photo is included yet. If you'd like one in the hero or About section, add an `<img>` tag and a matching CSS rule — happy to wire this up if you share the image.

### Projects
`script.js` → `PROJECTS` array currently lists **HostelPro** and the **Calculator App**, pulled from your GitHub. Add more entries in the same format as you push new repos:
```js
{ name: "...", desc: "...", stack: ["..."], repo: "https://github.com/...", live: "" }
```

## Running locally
No build step needed — just open `index.html` in a browser, or serve the folder:
```bash
npx serve .
```

## Deploying
This is static HTML/CSS/JS, so it works as-is on:
- **GitHub Pages**: push this folder to a repo, enable Pages in Settings → Pages, pick the branch/root.
- **Netlify / Vercel**: drag-and-drop the folder or connect the repo — no build command needed.

## Customizing the look
All design tokens (colors, fonts, spacing) live at the top of `style.css` under `:root`. Change `--accent`, `--accent-2`, `--accent-3` to shift the whole palette without touching the rest of the file.
