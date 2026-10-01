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

## Cross-device sync (Supabase, free)

By default everything lives in each device's `localStorage`. To share photos +
texts between two phones, enable cloud sync. Free tier (≈500MB database + 1GB
photo storage + realtime) is plenty for personal use:

1. Go to https://supabase.com → New project (free) → wait until it is ready.
2. **SQL Editor** → New query → paste this → Run:
   ```sql
   create table if not exists site_data (
     key text primary key,
     data jsonb not null default '{}'::jsonb
   );
   create table if not exists photos (
     id uuid primary key default gen_random_uuid(),
     site text not null default 'shared',
     src text not null,
     path text not null default '',
     cap text not null default '',
     ts bigint not null default (extract(epoch from now())*1000)::bigint
   );
   alter table site_data enable row level security;
   alter table photos enable row level security;
   create policy "anon all site_data" on site_data
     for all using (true) with check (true);
   create policy "anon all photos" on photos
     for all using (true) with check (true);
   insert into storage.buckets (id, name, public)
     values ('photos', 'photos', true)
     on conflict (id) do update set public = true;
   create policy "public read photos" on storage.objects
     for select using (bucket_id = 'photos');
   create policy "anon upload photos" on storage.objects
     for insert with check (bucket_id = 'photos');
   create policy "anon delete photos" on storage.objects
     for delete using (bucket_id = 'photos');
   alter publication supabase_realtime add table site_data;
   alter publication supabase_realtime add table photos;
   ```
3. **Authentication** → enable **Anonymous sign-ins**.
4. **Project Settings → API** → copy the **Project URL** + **anon public key** →
   paste them as `SUPABASE_URL` / `SUPABASE_ANON_KEY` in `script.js` →
   commit + push.

Notes: language choice stays per-device (not synced). Anyone opening the site
gets anonymous access, so treat the URL as shared-private.
