# For Ma Ma 💚

A romantic personal website — every photo and word is a piece of my heart.

Static site (vanilla HTML/CSS/JS) on GitHub Pages. **No backend, no database,
no accounts, no limits** — all content lives in the code, so every device
shows exactly the same thing after each deploy (~1–2 min).

## Update content (no database needed)

- **Photos:** put JPG files in `photos/` named `photo1.jpg` … `photo8.jpg`
  (phone photos are often HEIC — convert to JPG first, browsers can't show HEIC).
  Captions live in the `PHOTOS` array at the top of `script.js`.
- **Love letters:** edit `defaultLetters_my` (Burmese) / `defaultLetters_en`
  (English) in `script.js`.
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
