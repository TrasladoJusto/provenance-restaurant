# PROVENANCE — Fine Dining Restaurant Website

A production-ready, Michelin-starred restaurant website built with **Next.js 15**, **Tailwind CSS v4**, **TypeScript**, and deployed to **Cloudflare Workers** via **OpenNext**.

## 🌟 Features

- **8 Complete Pages**: Home, Menu, Chef, Experience, Events, Reservations, Gallery, Contact
- **Design System**: Faithful implementation of the PROVENANCE Stitch design (dark mode, gold accent, Libre Caslon Text / Inter typography)
- **Smooth Animations**: Framer Motion + IntersectionObserver scroll reveals, stagger effects, parallax
- **Real-time Reservations**: Multi-step booking form with email confirmations (Resend)
- **Contact Forms**: Inquiry routing with email notifications
- **Gallery Lightbox**: Fullscreen image viewer with keyboard navigation
- **Wine Pairing Table**: Interactive tasting menu with sommelier selections
- **Private Events**: Multi-space venue showcase with inquiry forms
- **SEO Optimized**: JSON-LD structured data (Restaurant, Menu, Event, Person), Open Graph, sitemap.xml, robots.txt
- **Accessibility**: WCAG 2.2 AA compliant (semantic HTML, ARIA, focus management, color contrast)
- **Performance**: Static generation where possible, optimized images, code splitting

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15.5 (App Router, React 19, Turbopack) |
| Styling | Tailwind CSS v4 (CSS-first `@theme` config) |
| Language | TypeScript (strict mode) |
| Animations | Framer Motion 11 |
| Forms | React Hook Form + Zod validation |
| Email | Resend API |
| Deployment | Cloudflare Workers via OpenNext |
| Analytics | Cloudflare Web Analytics + Plausible |
| Monitoring | Sentry (errors) + Vercel Speed Insights |

## 📁 Project Structure

```
provenance-restaurant/
├── app/
│   ├── (public)/
│   │   ├── layout.tsx          # Root layout + providers
│   │   ├── page.tsx            # Homepage
│   │   ├── menu/
│   │   │   ├── page.tsx        # Menu overview
│   │   │   └── [slug]/page.tsx # Individual dish (future)
│   │   ├── chef/page.tsx
│   │   ├── experiencia/page.tsx
│   │   ├── eventos/page.tsx
│   │   ├── reservas/page.tsx
│   │   ├── galeria/page.tsx
│   │   └── contacto/page.tsx
│   ├── api/
│   │   ├── reservations/route.ts
│   │   └── contact/route.ts
│   ├── globals.css             # Design tokens + base styles
│   └── favicon.ico
├── components/
│   ├── ui/                     # Button, Input, Card, etc.
│   ├── layout/                 # Header, Footer
│   ├── sections/               # Hero, MenuGrid, ChefProfile, Gallery, etc.
│   └── animations/             # ScrollReveal, Parallax, Stagger
├── lib/
│   ├── design-tokens.ts        # Exported design system
│   ├── utils.ts                # cn(), formatCurrency, etc.
│   └── reservations.ts         # Booking logic
├── open-next.config.ts         # OpenNext config
├── wrangler.toml               # Cloudflare Workers config
├── next.config.ts
├── tsconfig.json
├── package.json
└── .env.example
```

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- npm 10+
- Cloudflare account (for deployment)
- Resend account (for emails)

### Installation

```bash
# Clone and install
cd provenance-restaurant
npm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local with your Resend API key

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Development Commands

```bash
npm run dev          # Start dev server (Turbopack)
npm run build        # Production build
npm run cf-build     # Build for Cloudflare Workers
npm run deploy       # Deploy to Cloudflare Workers
npm run lint         # ESLint
npm run type-check   # TypeScript check
```

## 🎨 Design System

The design system is defined in `app/globals.css` using Tailwind v4's `@theme` directive:

### Colors (Dark Mode)
- **Primary Gold**: `#e5c476` (CTAs, accents)
- **Background**: `#16130e` (near black)
- **Surface**: `#16130e` / `#221f1a` / `#2d2a24` (elevated surfaces)
- **Text**: `#e9e1d8` (warm white), `#d0c5b4` (muted)
- **Borders**: `#999080` / `#4d4639`

### Typography
- **Display/Headlines**: Libre Caslon Text (serif, high contrast)
- **Body/UI**: Inter (sans-serif, technical)
- **Labels**: Inter, uppercase, tracked

### Spacing
- Base unit: 4px
- Scale: xs(4) sm(8) md(16) lg(24) xl(40) xxl(80)
- Container max: 1280px
- Gutter: 24px

## 📦 Deployment

### Cloudflare Workers (Recommended)

```bash
# Build for Cloudflare
npm run cf-build

# Deploy
npm run deploy
```

Configure in Cloudflare Dashboard:
1. Workers & Pages → Create Worker
2. Connect GitHub repo
3. Build command: `npm run cf-build`
4. Add environment variables (RESEND_API_KEY)
5. Add custom domain: `provenance-restaurant.com`

### Environment Variables (Production)

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://provenance-restaurant.com
```

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels and roles
- Focus management (visible outlines)
- Color contrast ratios (WCAG AA)
- Keyboard navigation
- Screen reader optimized
- Reduced motion support

## 📊 SEO & Analytics

### Structured Data (JSON-LD)
- `Restaurant` (homepage)
- `Menu` + `MenuItem` (menu page)
- `Person` (chef page)
- `Event` (events page)
- `FAQPage` (contact page)

### Meta Tags
- Open Graph / Twitter Cards
- Canonical URLs
- Robots.txt / Sitemap.xml

### Analytics
- Cloudflare Web Analytics (privacy-first)
- Plausible (optional)

## 🧪 Testing

```bash
# Run tests (when added)
npm test

# E2E tests
npm run test:e2e
```

## 📄 License

MIT License - feel free to use for your own restaurant projects.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push and open PR

---

Built with ❤️ for exceptional dining experiences.