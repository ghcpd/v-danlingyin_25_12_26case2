# GreenEarth - Environmental Protection Website

🌍 **GreenEarth** is a modern, responsive environmental protection website built with React, TypeScript, and Tailwind CSS. The website educates users about environmental issues, promotes sustainable actions, and encourages community participation.

## 🌱 About the Project

GreenEarth is designed to be a public-facing platform for environmental education and advocacy. The website features:

- **Educational Content**: Articles and resources about climate change, wildlife protection, and sustainable living
- **Environmental Initiatives**: Showcase of ongoing projects across different categories
- **Community Engagement**: Volunteer sign-up and contact forms for user participation
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices

### Environmental Protection Theme

The website uses an eco-friendly color palette centered around greens and earth tones, creating a visual connection to nature and sustainability. The design emphasizes:

- Clean, accessible interfaces
- Nature-inspired imagery
- Clear calls-to-action for environmental engagement

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3.4
- **Routing**: React Router DOM 6
- **Package Manager**: pnpm

## 📦 Installation

### Prerequisites

- Node.js 18+ installed
- pnpm package manager installed

```bash
# Install pnpm if you haven't already
npm install -g pnpm
```

### Setup

1. Clone or navigate to the project directory:

```bash
cd greenearth
```

2. Install dependencies:

```bash
pnpm install
```

## 🚀 Development

Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Production Build

Build for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## 📁 Project Structure

```
greenearth/
├── public/
│   └── leaf.svg              # Favicon
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx    # Site footer
│   │   │   ├── Layout.tsx    # Main layout wrapper
│   │   │   ├── Navbar.tsx    # Navigation bar
│   │   │   └── index.ts
│   │   ├── ui/
│   │   │   ├── Badge.tsx     # Badge component
│   │   │   ├── Button.tsx    # Button component
│   │   │   ├── Card.tsx      # Card components
│   │   │   ├── FormElements.tsx  # Input, Textarea, Select
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── data/
│   │   ├── articles.ts       # Mock article data
│   │   ├── content.ts        # Navigation, values, goals
│   │   ├── initiatives.ts    # Mock initiative data
│   │   └── index.ts
│   ├── hooks/
│   │   ├── useForm.ts        # Form state management hook
│   │   └── index.ts
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── ArticleDetailPage.tsx
│   │   ├── ArticlesPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── GetInvolvedPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── InitiativesPage.tsx
│   │   └── index.ts
│   ├── types/
│   │   └── index.ts          # TypeScript type definitions
│   ├── utils/
│   │   └── index.ts          # Utility functions
│   ├── App.tsx               # Root component with routing
│   ├── index.css             # Global styles
│   ├── main.tsx              # Application entry point
│   └── vite-env.d.ts
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## ✨ Implemented Features

### Pages

1. **Home Page**
   - Hero section with headline and CTA button ("Take Action")
   - Statistics section
   - Featured sections (Climate Change, Wildlife Protection, Sustainable Living)
   - Impact section with accomplishments
   - Call-to-action section
   - Latest news preview

2. **About Page**
   - Mission statement
   - Organization values (6 core values)
   - Environmental goals with progress indicators
   - Leadership team section
   - Timeline/history section

3. **Initiatives Page**
   - List of 12 environmental initiatives
   - Category filtering (All, Climate, Wildlife, Ocean, Recycling)
   - Responsive grid layout
   - Each initiative has title, description, category badge

4. **Articles/Knowledge Page**
   - List of 6 educational articles
   - Article cards with title, summary, date, author
   - Click to open article detail view
   - Tags for categorization

5. **Article Detail Page**
   - Full article content
   - Related articles section
   - Social sharing buttons
   - Back navigation

6. **Get Involved Page**
   - Volunteer sign-up form
     - Name field
     - Email field
     - Area of interest dropdown
   - Form validation (required fields, email format)
   - Success message on submission
   - Volunteer opportunities section

7. **Contact Page**
   - Contact form (Name, Email, Message)
   - Form validation
   - Success confirmation message
   - Contact information cards
   - FAQ section

### Technical Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ React Router for navigation
- ✅ Lazy loading for pages (code splitting)
- ✅ Strict TypeScript configuration
- ✅ Tailwind CSS styling with custom eco-friendly theme
- ✅ Accessible forms with ARIA labels
- ✅ Semantic HTML structure
- ✅ Custom useForm hook for form management
- ✅ Mock data stored locally
- ✅ Fully typed data models
- ✅ Reusable UI components
- ✅ 404 Not Found page

## 🧪 Manual Validation

To validate the UI manually:

1. **Navigation**: Click through all navigation links to verify routing
2. **Responsive Design**: 
   - Resize browser window or use dev tools device emulation
   - Test on mobile (< 640px), tablet (640-1024px), desktop (> 1024px)
3. **Forms**:
   - Submit empty forms to verify validation messages
   - Enter invalid email to check email validation
   - Complete forms successfully to see success messages
4. **Initiatives Filtering**: Click category buttons to filter initiatives
5. **Articles**: Click articles to view detail pages
6. **Accessibility**:
   - Tab through interactive elements
   - Verify focus styles are visible
   - Check ARIA labels using browser dev tools

## ⚠️ Known Limitations

- **No Backend**: All forms submit to mock handlers (console.log)
- **No Authentication**: No user login/registration system
- **No External APIs**: All data is mocked locally
- **Images**: Uses Unsplash placeholder images (requires internet)
- **Social Links**: Footer social links are placeholders (#)
- **Newsletter**: Newsletter subscription is UI only
- **Map**: Contact page map is a placeholder

## 📄 License

This project is for educational and demonstration purposes.

---

Built with 💚 for a sustainable future.
