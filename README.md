# exitscore.nl

Statische landingspagina voor Exit Score, het platform van Verkoop je Zaak.

## Stack
- Vanilla HTML5 + CSS + minimale JS, geen build-tool.
- Fonts via Google Fonts (Prompt Bold + Poppins).
- Huisstijl Verkoop je Zaak (zie Branding map).

## Lokaal previewen
```bash
cd /home/umbrel/exitscore-nl
python3 -m http.server 8765
# open http://localhost:8765
```

## Deploy
- Doel: Vercel (statisch project) onder `exitscore.nl`.
- Wachten op assets: demo-video, foto Maarten, screenshots platform.

## Te vervangen vóór live
1. Demo-video in `.video-frame` (hero)
2. Foto Maarten in `.founder-photo .photo-placeholder`
3. Vijf screenshots in `.feature-visual .placeholder` (privacy-modus aan)
4. Cijfers in `.authority-list` (aantal trajecten, jaren ervaring, kerncijfer)
5. Echte URL voor Scorecard CTA als die afwijkt van `/scorecard`
