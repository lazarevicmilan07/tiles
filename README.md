# ProTile Services

Web sajt za firmu ProTile Services — ugradnja keramičkih pločica, renovacije kupatila i vodovodne instalacije.

## Tehnologije

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Stranice

| Ruta | Opis |
|---|---|
| `/` | Naslovna — hero, statistike, pregled usluga |
| `/services` | Sve usluge |
| `/pricing` | Cenovnik |
| `/about` | O firmi |
| `/contact` | Kontakt forma i mapa |

## Struktura projekta

```
app/              # Next.js App Router stranice
components/       # Zajednički React komponenti
data/             # Podaci o firmi (kontakt, usluge, cene)
```

## Pokretanje lokalno

```bash
npm install
npm run dev
```

Aplikacija se pokreće na [http://localhost:3000](http://localhost:3000).

## Ostale komande

```bash
npm run build   # Produkcijski build
npm run start   # Pokretanje produkcijskog builda
npm run lint    # ESLint provera
```

## Konfiguracija

Svi podaci firme nalaze se u `data/` folderu:

- `data/business.ts` — naziv firme, lokacija, opis, SEO
- `data/contact.ts` — adresa, telefon, email, WhatsApp, Google Maps embed
- `data/services.ts` — lista usluga
- `data/pricing.ts` — cenovnik
