# For Ma Ma 💚

A romantic personal website — every photo and word is a piece of my heart.

Static site (vanilla HTML/CSS/JS) on GitHub Pages. **No backend, no database,
no accounts, no limits** — all content (including photos, embedded in
`script.js`) lives in the code, so every device shows exactly the same thing
after each deploy (~1–2 min). Burmese only.

## Update content (no database needed)

- **Photos:** send new JPGs to the site keeper — they get embedded into the
  `PHOTOS` array in `script.js` (with captions). Originals stay in
  `photos/originals/` (not committed).
- **Love letters:** edit `defaultLetters_my` in `script.js`.
- **Names / anniversary:** `HER_NAME`, `MY_NAME`, `ANNIVERSARY` in `script.js`.
- **Timeline / reasons / final letter:** `TIMELINE_DEFS` (text via the
  `story.*` i18n keys), `reasons_my` / `reasons_en`, `final.body`.
- **Song:** `YT_VIDEO_ID` in `script.js`.

Then commit + push — GitHub Pages redeploys automatically.

## Run locally

```powershell
Set-Location -LiteralPath "D:\ForMaMa"
python -m http.server 8000 --bind 0.0.0.0
# PC: http://localhost:8000
# Phone (same Wi-Fi): http://<your-pc-ip>:8000
```

Or just open `index.html` in a browser.
