# GreenEarth – Environmental Protection Website

GreenEarth is a public-facing site that educates users, promotes sustainable actions, and encourages community participation across climate, wildlife, ocean, and zero-waste initiatives.

## Theme
Eco-forward experience with calming greens and sand tones, spotlighting action-oriented content and accessible forms for volunteering and contact.

## Tech Stack
- React 18 + TypeScript
- Vite
- React Router
- Tailwind CSS (+ forms plugin)
- pnpm for package management

## Getting Started
1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Run the dev server:
   ```bash
   pnpm dev
   ```
3. Build for production:
   ```bash
   pnpm build
   ```
4. Preview the production build:
   ```bash
   pnpm preview
   ```

## Project Structure
- `src/`
  - `components/` reusable UI (layout, cards, hero, nav, footer)
  - `pages/` routed views (Home, About, Initiatives, Articles, ArticleDetail, Get Involved, Contact)
  - `data/` typed mock data for initiatives and articles
  - `types/` TypeScript definitions
  - `hooks/` shared hooks (scroll restoration)
  - `utils/` helpers (date formatting)
  - `App.tsx` routing + layout
  - `main.tsx` app entry

## Features Implemented
- Home hero with CTA and featured focus areas
- About with mission, values, and goals
- Initiatives grid with category filter (Climate, Wildlife, Ocean, Recycling)
- Articles list and article detail pages (mock content)
- Get Involved volunteer form with validation and success message
- Contact form with validation and confirmation message
- Responsive layout, navigation, and footer
- Accessible form labels, aria states, and focus styles
- Lazy-loaded routes for performance

## Manual Validation Checklist
- Navigate across all pages via navbar and mobile menu
- Resize to mobile/tablet/desktop and confirm layout adapts
- Test initiative category filters
- Open article detail from list and via URL
- Submit Get Involved form with/without required fields and verify validation + success notice
- Submit Contact form and confirm validation + confirmation message

## Known Limitations
- No backend/API calls; all data is local mock data
- Forms show success messages but do not send real requests
