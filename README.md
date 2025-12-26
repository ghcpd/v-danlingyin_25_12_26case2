# GreenEarth - Environmental Protection Website

A modern, responsive environmental protection website built with React, TypeScript, and Tailwind CSS. GreenEarth educates users about environmental issues, promotes sustainable actions, and encourages community participation through various initiatives and volunteer opportunities.

## 🌍 Project Overview

GreenEarth is a public-facing website dedicated to environmental protection and sustainability. The platform serves as an educational hub and community engagement tool for environmental activists, students, volunteers, and anyone passionate about protecting our planet.

### Environmental Theme

The website promotes environmental awareness through:
- **Climate Action**: Information and initiatives on combating global warming
- **Wildlife Conservation**: Programs for protecting endangered species and biodiversity
- **Ocean Protection**: Marine conservation and pollution prevention efforts
- **Sustainable Living**: Resources for eco-friendly lifestyle choices
- **Community Engagement**: Volunteer opportunities and educational programs

## 🚀 Tech Stack

- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (custom eco-friendly color palette)
- **Routing**: React Router v6
- **Package Manager**: pnpm
- **Type Checking**: TypeScript (strict mode)
- **Code Quality**: ESLint

## 📁 Project Structure

```
greenearth-environmental-website/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx      # Customizable button component
│   │   ├── Card.tsx        # Card container component
│   │   ├── Header.tsx      # Navigation header with mobile menu
│   │   └── Footer.tsx      # Footer with links and social media
│   ├── pages/              # Page-level components
│   │   ├── Home.tsx        # Landing page with hero section
│   │   ├── About.tsx       # Mission, values, and goals
│   │   ├── Initiatives.tsx # Filterable project list
│   │   ├── Articles.tsx    # Educational articles list
│   │   ├── ArticleDetail.tsx # Individual article view
│   │   ├── GetInvolved.tsx # Volunteer sign-up form
│   │   └── Contact.tsx     # Contact form and info
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts        # Shared interfaces and types
│   ├── utils/              # Utility functions
│   │   └── validation.ts   # Form validation helpers
│   ├── data/               # Mock data
│   │   ├── initiatives.ts  # Environmental initiatives data
│   │   └── articles.ts     # Educational articles data
│   ├── App.tsx             # Root component with routing
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles and Tailwind imports
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind customization
├── vite.config.ts          # Vite configuration
└── README.md              # This file
```

## 📦 Installation

### Prerequisites

- Node.js 18+ installed
- pnpm package manager (install with: `npm install -g pnpm`)

### Setup Instructions

1. **Clone or navigate to the project directory**
   ```bash
   cd greenearth-environmental-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**
   - The app will automatically open at `http://localhost:3000`
   - If not, navigate to the URL shown in your terminal

## 🛠️ Available Scripts

```bash
# Start development server with hot reload
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview

# Run ESLint to check code quality
pnpm lint
```

## ✨ Implemented Features

### Pages & Navigation
- ✅ **Home Page**: Hero section with CTA, featured areas (Climate, Wildlife, Sustainable Living), statistics
- ✅ **About Page**: Mission statement, core values (6 cards), environmental goals (6 goals)
- ✅ **Initiatives Page**: 10 environmental initiatives with category filtering (All, Climate, Wildlife, Ocean, Recycling)
- ✅ **Articles Page**: List of 6 educational articles with summaries and publish dates
- ✅ **Article Detail Page**: Full article content with navigation between articles
- ✅ **Get Involved Page**: Volunteer sign-up form with validation and success messaging
- ✅ **Contact Page**: Contact form with validation, contact information, FAQ section
- ✅ **Responsive Navigation**: Header with mobile hamburger menu, footer with links

### Components
- ✅ **Button**: Reusable component with variants (primary, secondary, outline) and sizes
- ✅ **Card**: Container component with optional hover effects
- ✅ **Header**: Sticky navigation with mobile-responsive menu
- ✅ **Footer**: Site links, social media icons, copyright information

### Features & Functionality
- ✅ **Routing**: React Router with 7 routes including dynamic article detail pages
- ✅ **Form Validation**: Real-time validation for email format and required fields
- ✅ **Category Filtering**: Interactive filter on Initiatives page
- ✅ **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- ✅ **TypeScript**: Fully typed with strict mode enabled
- ✅ **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation support
- ✅ **Mock Data**: 10 initiatives and 6 articles with complete content

### Design & Styling
- ✅ **Custom Color Palette**: Eco-friendly green and ocean blue theme
- ✅ **Tailwind CSS**: Utility-first styling with custom configurations
- ✅ **Hover Effects**: Interactive elements with smooth transitions
- ✅ **Card Layouts**: Consistent grid-based layouts throughout
- ✅ **Typography**: Clean, readable font hierarchy

## 🧪 Manual Validation

### Testing the Application

1. **Navigation**
   - Click all navigation links in the header
   - Test mobile menu on smaller screens (resize browser or use DevTools)
   - Verify footer links work correctly

2. **Home Page**
   - Check hero section displays correctly
   - Verify "Take Action" button navigates to Get Involved page
   - Test responsive layout on different screen sizes

3. **Initiatives Page**
   - Click each category filter button (All, Climate, Wildlife, Ocean, Recycling)
   - Verify initiatives filter correctly
   - Check initiative count updates dynamically

4. **Articles**
   - Click on article cards to navigate to detail pages
   - Test "Previous Article" and "Next Article" navigation
   - Verify "Back to Articles" link works

5. **Forms**
   - **Get Involved Form**:
     - Try submitting with empty fields (should show errors)
     - Enter invalid email format (should show error)
     - Submit valid form (should show success message and reset form)
   - **Contact Form**:
     - Same validation tests as above
     - Verify textarea field works properly

6. **Responsive Design**
   - Test on mobile (320px - 767px)
   - Test on tablet (768px - 1023px)
   - Test on desktop (1024px+)
   - Check that all layouts adapt appropriately

7. **TypeScript**
   - Run `pnpm build` to verify no type errors
   - Check console for any runtime errors

## 🎯 Known Limitations

1. **No Backend**: Forms don't persist data (console.log only)
2. **Mock Data**: All initiatives and articles are static/hardcoded
3. **No Authentication**: No user accounts or login system
4. **No API Integration**: No external data sources
5. **Limited Search**: No search functionality for articles or initiatives
6. **Static Social Links**: Social media icons are placeholder links

These limitations are intentional per the specification requirements (no backend, no APIs, no authentication needed).

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This is a demonstration project for educational purposes.

## 🤝 Contributing

This is a showcase project. For a production version, consider adding:
- Backend API integration
- Database for dynamic content
- User authentication
- Real-time search functionality
- Blog CMS integration
- Newsletter subscription
- Donation payment integration

---

Built with ❤️ for the environment by GreenEarth Team
