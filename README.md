# Orbit Scholars

A responsive coaching website inspired by the spacious layouts and playful visual direction in the supplied Family reference recording. All illustrations are original inline SVG/CSS; no Family assets are included.

## Develop

Requires Node.js 20.19+ or 22.12+ (tested with Node 24).

```sh
npm ci
npm run dev
```

## Build and deploy

```sh
npm run build
npm run preview
```

Import this repository into Vercel. Select the Vite framework preset, build command `npm run build`, and output directory `dist`. Set `main` as the production branch once code has been pushed there. No environment variables are needed for the demonstration.

## Included

- Home and Results capsule navigation with shareable hash routes.
- Introduction, services, teacher placeholders, contact placeholder, FAQ.
- Original animated education illustrations, scroll reveals, hover effects, reduced-motion support.
- Demo results for classes 6–12, sections A/B, and two weekly exams; student name/ID search and empty state.
- Mobile layouts and a horizontally scrollable results table.

## Before public launch

Orbit Scholars is provisional branding inferred from the repository name. Replace it with the confirmed coaching name, add real teacher profiles and contact information, and verify the service descriptions.

Results are fictional and prominently marked as a demo. There is no spreadsheet integration, teacher login, or real student data in this version. To connect a private Google Sheet, implement a server endpoint that uses server-only credentials, reads only approved published rows, validates the result schema, and returns the minimum public fields. Never expose credentials or the private spreadsheet link in browser code. Agree on what student information is public before publishing live marks.

## Validation

Production build passed. Browser checks in Chromium covered navigation, result filters, ID search, empty state/reset, direct result route reload, FAQ, contact navigation, mobile overflow, and reduced-motion behavior. No browser JavaScript exceptions were observed.
