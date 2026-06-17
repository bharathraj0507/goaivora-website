# GoAivora Website

Enterprise analytics modernization website for GoAivora Technologies Pvt Ltd.

Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Next.js 15** — App Router, React Server Components
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Scroll animations
- **Lucide React** — Icons

## Project Structure

```
goaivora-website/
├── app/
│   ├── layout.tsx              # Root layout with Navbar + Footer
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles + Tailwind
│   ├── migration/page.tsx      # Migration services page
│   ├── ai-solutions/page.tsx   # AI solutions page
│   ├── marketplace/page.tsx    # Dashboard marketplace page
│   ├── worksim/page.tsx        # WorkSim product page
│   ├── case-studies/page.tsx   # Case studies page
│   ├── about/page.tsx          # About page
│   └── contact/page.tsx        # Contact / book assessment page
├── components/
│   ├── Navbar.tsx              # Sticky navigation
│   ├── LogoMark.tsx            # Reusable SVG logo mark
│   ├── Hero.tsx                # Hero section with architecture card
│   ├── ArchitectureCard.tsx    # Reusable architecture framework card
│   ├── Services.tsx            # Services overview section
│   ├── MigrationFramework.tsx  # Migration table + flow
│   ├── AISolutions.tsx         # AI capabilities section
│   ├── Marketplace.tsx         # Dashboard marketplace section
│   ├── WorkSim.tsx             # WorkSim simulation interface
│   ├── CaseStudies.tsx         # Case studies section
│   ├── CTA.tsx                 # Final CTA + contact links
│   └── Footer.tsx              # Site footer
├── public/
│   ├── logo.svg                # Brand logo SVG
│   ├── favicon.ico             # Favicon
│   └── og-image.png            # Open Graph image
├── lib/
│   └── utils.ts                # Utility functions (cn)
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

## Design System

### Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#05070A` | Primary page background |
| `--bg-secondary` | `#0B0F14` | Section backgrounds |
| `--bg-tertiary` | `#111827` | Card backgrounds |
| `--text-primary` | `#F8FAFC` | Headlines |
| `--text-secondary` | `#94A3B8` | Body text |
| `--text-muted` | `#475569` | Supporting text |
| `--accent-cyan` | `#22D3EE` | Logo / gradient start |
| `--accent-blue` | `#3B82F6` | Logo / gradient mid |
| `--accent-purple` | `#8B5CF6` | Logo / gradient end |

### Typography

- Font: Inter (Google Fonts)
- Hero title: 54px, weight 600, letter-spacing -0.04em
- Section titles: 42px, weight 600, letter-spacing -0.035em
- Body: 16-17px, weight 400

### Gradient Usage

The cyan → blue → purple gradient is used **only**:
1. The logo mark (SVG polygon fill)
2. Hero title emphasis text (CSS background-clip)
3. WorkSim progress bar (functional, not decorative)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with all sections |
| `/migration` | Tableau to Power BI & Fabric migration |
| `/ai-solutions` | AI copilots, agents, and conversational BI |
| `/marketplace` | Production-ready dashboard marketplace |
| `/worksim` | GoAivora WorkSim product |
| `/case-studies` | Client case studies |
| `/about` | About GoAivora |
| `/contact` | Book assessment |

## SEO

Each page has:
- `title` and `description` metadata
- Open Graph tags
- Twitter Card tags
- Robots configuration
- Semantic HTML structure with proper heading hierarchy
- ARIA labels on interactive elements

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for full deployment instructions.
