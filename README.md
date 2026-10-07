# exitscore.nl

Statische productsite voor de Exit Score (het getal van 0 tot 100 en het Exit Score platform van Verkoop je Zaak). Eén CTA: de Exit Scorecard op verkoopjezaak.nl.

## Stack
- Vanilla HTML5 + CSS + minimale JS, geen build-tool.
- Fonts via Google Fonts (Prompt Bold + Poppins), huisstijl Verkoop je Zaak.
- Demo-animaties zijn CSS/SVG met fictieve getallen; ze respecteren prefers-reduced-motion.

## Lokaal previewen
```bash
python3 -m http.server 8765
```

## Hosting
- Cloudflare Pages (DNS en hosting op Cloudflare, project `exitscore`, ook op exitscore.pages.dev).
- `_headers` zet `X-Robots-Tag: noindex` op alle pages.dev-adressen; het eigen domein valt erbuiten.
- Feitenbasis voor alle claims: Cortex `projecten/exitscore-nl/feitenbasis.md`.

## Open vóór live
1. Proof over het platform zelf (klantquote met toestemming).
2. Optioneel: echte schermafbeeldingen, alleen van preview met privacymodus en testdata.
