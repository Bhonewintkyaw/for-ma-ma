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

## Cross-device sync (Firebase, free)

By default everything lives in each device's `localStorage`. To share photos +
texts between two phones, enable cloud sync (Spark plan is free):

1. Go to https://console.firebase.google.com → Add project (e.g. `for-ma-ma`).
   Analytics is optional.
2. **Authentication** → Get started → Sign-in method → enable **Anonymous** → Save.
3. **Firestore Database** → Create database → production mode → pick the
   closest region (e.g. `asia-southeast1`) → Enable. Then open the **Rules**
   tab, paste this, Publish:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /love/{docId} {
         allow read, write: if request.auth != null;
       }
     }
   }
   ```
4. **Storage** → Get started → production mode → Done. **Rules** tab, paste,
   Publish:
   ```
   rules_version = '2';
   service firebase.storage {
     match /b/{bucket}/o {
       match /photos/{siteId}/{fileName} {
         allow read: if true;
         allow write: if request.auth != null;
       }
     }
   }
   ```
5. Project Overview → `</>` (web app) → register → copy the `firebaseConfig`
   object → paste it as `FIREBASE_CONFIG` in `script.js` → commit + push.

Notes: language choice stays per-device (not synced). Anyone opening the site
gets anonymous access, so treat the URL as shared-private.
