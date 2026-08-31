# leoschaub.me

Source for Leo Schaub's personal portfolio site. Plain HTML/CSS/JS — no build step, no
framework, no dependencies beyond a Google Fonts stylesheet.

## Files

- `index.html` — page content and structure
- `style.css` — all styling
- `script.js` — mobile nav toggle + footer year
- `CNAME` — tells GitHub Pages to serve this site at `leoschaub.me`

## Before you deploy — fill these in

Search the files for `TODO` comments and replace the placeholders:

- `index.html` — the GitHub and LinkedIn links (currently `href="https://github.com/"` and
  `href="https://linkedin.com/"`)
- `index.html` — the `resume.pdf` link in the hero section. Either add a real `resume.pdf`
  file to this folder, or point the link somewhere else (a Google Drive link, etc.), or
  remove the button.

## Deploy with GitHub Pages (free)

1. **Create a GitHub repo.** Go to github.com → New repository. Name it anything, e.g.
   `leoschaub-site`. Public repo (required for free GitHub Pages, unless you're on a paid plan).

2. **Push these files to it.**

   ```bash
   cd leoschaub-site
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/leoschaub-site.git
   git push -u origin main
   ```

3. **Enable GitHub Pages.** In the repo: Settings → Pages → under "Build and deployment",
   set Source to "Deploy from a branch", branch `main`, folder `/ (root)`. Save.

4. **Add the custom domain in GitHub.** Still in Settings → Pages, under "Custom domain"
   enter `leoschaub.me` and save. (The `CNAME` file in this repo does the same thing
   automatically, but setting it in the UI also lets GitHub manage HTTPS for you.)

5. **Point your domain's DNS at GitHub Pages.** Log in to wherever you bought
   `leoschaub.me` (Namecheap, Google Domains/Squarespace, GoDaddy, Cloudflare, etc.) and
   edit its DNS records:

   - For the apex domain (`leoschaub.me`), add **four A records** all pointing to GitHub
     Pages' IP addresses:

     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

   - For `www.leoschaub.me`, add a **CNAME record** pointing to:

     ```
     <your-username>.github.io.
     ```

   - Remove any conflicting A/CNAME records the registrar created by default (parking
     page records, etc.).

   DNS changes can take anywhere from a few minutes to ~24 hours to propagate.

6. **Wait, then verify HTTPS.** Once DNS resolves, go back to Settings → Pages in GitHub
   and check "Enforce HTTPS" (it may take a little while to become available after DNS
   propagates — GitHub needs to issue a certificate first).

7. **Visit https://leoschaub.me** to confirm it's live.

## Alternatives to GitHub Pages

Netlify and Vercel both offer free static hosting with equally simple custom-domain setup
(drag-and-drop the folder or connect the GitHub repo, then add the domain in their
dashboard and update DNS as they instruct). GitHub Pages is the simplest option here since
there's no build step and no account beyond GitHub itself.

## Local preview

Open `index.html` directly in a browser, or serve it locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
