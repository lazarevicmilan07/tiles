# CLAUDE.md

## Pregled projekta

Next.js 15 web sajt za ProTile Services — firmu za ugradnju keramičkih pločica, renovacije kupatila i vodovodne instalacije. Sajt je na srpskom jeziku.

## Tehnološki stack

- Next.js 15 (App Router), React 18, TypeScript, Tailwind CSS
- Nema baze podataka ni backenda — svi podaci su u `data/` folderu

## Podaci firme

Svi promenljivi podaci nalaze se u `data/` — nikad ih ne hardkoduj direktno u komponente:

- `data/business.ts` — naziv, tagline, opisi, lokacija, radno vreme, vrednosti, SEO
- `data/contact.ts` — telefon, email, WhatsApp, adresa, Google Maps embed URL
- `data/services.ts` — lista usluga
- `data/pricing.ts` — cenovnik

## Konvencije

- Komponente u `components/`, stranice u `app/`
- Dark mode podržan — koristi `dark:` Tailwind varijante
- `@/` alias mapira na root projekta (`tsconfig.json`)
- Tekst sajta je na srpskom (latinica)

## Česte izmene

**Promena adrese/kontakta** → uredi `data/contact.ts`

**Promena teksta o firmi** → uredi `data/business.ts`

**Dodavanje/izmena usluge** → uredi `data/services.ts`

**Promena cena** → uredi `data/pricing.ts`

**Google Maps embed** → zameni `mapsEmbedUrl` u `data/contact.ts` sa `src` vrednosti iz Google Maps → Share → Embed a map
