# For Ma Ma 💚

A romantic personal website — every photo and word is a piece of my heart.

Static site with vanilla HTML/CSS/JS. Works offline on phone (photos + texts saved in `localStorage`).

## Features
- Hero with names + days/hours/minutes counter since a date
- Love letters (add / edit / delete)
- Photo gallery (upload, lightbox, long-press delete)
- Our Story timeline (+ add memories)
- 100 Reasons shuffle card
- Final letter + background music
- Floating hearts background
- Responsive: 16:9 desktop, 21:9 tall phones
- 🌐 English / မြန်မာ language toggle (top-right `မြန်မာ` / `English` button, saved per device)

## Run locally
```powershell
Set-Location -LiteralPath "D:\ForMaMa"
python -m http.server 8000 --bind 0.0.0.0
# PC: http://localhost:8000
# Phone (same Wi-Fi): http://<your-pc-ip>:8000
```

Or just open `index.html` in a browser.
