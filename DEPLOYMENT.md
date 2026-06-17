# Deployment Guide

Complete guide for deploying the GoAivora website to Vercel with a custom domain via GoDaddy.

---

## Prerequisites

- Node.js 18.17 or later
- npm 9+
- GitHub account
- Vercel account (free tier works)
- GoDaddy domain (goaivora.com)

---

## 1. Local Development Setup

```bash
# Clone or unzip the project
cd goaivora-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:3000 — the site should load immediately.

```bash
# Check for TypeScript errors
npx tsc --noEmit

# Run production build locally
npm run build
npm start
```

---

## 2. Push to GitHub

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: GoAivora website"

# Create a new repo on GitHub (github.com/new)
# Then push:
git remote add origin https://github.com/YOUR_USERNAME/goaivora-website.git
git branch -M main
git push -u origin main
```

---

## 3. Deploy to Vercel

### Option A: Vercel Dashboard (Recommended)

1. Go to https://vercel.com/new
2. Click **"Import Git Repository"**
3. Select your `goaivora-website` repo
4. Vercel auto-detects Next.js — no configuration needed
5. Click **Deploy**

Vercel will assign a URL like: `goaivora-website.vercel.app`

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: goaivora-website
# - Which directory: ./
# - Override settings? No

# Deploy to production
vercel --prod
```

---

## 4. Environment Variables

If you add any environment variables (e.g. for a contact form), set them in:

**Vercel Dashboard → Project → Settings → Environment Variables**

Currently no environment variables are required for the static site.

---

## 5. Custom Domain via GoDaddy

### Step 1: Add domain in Vercel

1. Go to Vercel Dashboard → Your Project → **Settings → Domains**
2. Click **Add Domain**
3. Enter: `goaivora.com`
4. Also add: `www.goaivora.com`
5. Vercel will show you DNS records to configure

### Step 2: Configure GoDaddy DNS

1. Log in to GoDaddy → **My Products → Domains → Manage**
2. Click your domain → **DNS**
3. Delete any existing A records for `@`

**Add these records:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 76.76.19.19 | 600 |
| CNAME | www | cname.vercel-dns.com | 3600 |

> Note: Vercel's IP may differ — use the exact value shown in your Vercel dashboard.

### Step 3: Verify

DNS propagation takes 5–60 minutes. Vercel will show a green checkmark when the domain is verified.

To check propagation:
```bash
nslookup goaivora.com
```

---

## 6. HTTPS / SSL

Vercel automatically provisions a free SSL certificate via Let's Encrypt for all custom domains. No action required.

---

## 7. Redirects

The `next.config.js` is pre-configured with security headers. To add redirects (e.g. redirect `www` to apex domain), add to `next.config.js`:

```js
async redirects() {
  return [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'www.goaivora.com' }],
      destination: 'https://goaivora.com/:path*',
      permanent: true,
    },
  ]
}
```

---

## 8. SEO Checklist

Before going live:

- [ ] Replace `/public/og-image.png` with a real 1200×630 OG image
- [ ] Replace `/public/favicon.ico` with actual favicon
- [ ] Update `metadata.openGraph.url` in `app/layout.tsx` to production URL
- [ ] Update Calendly link in `components/CTA.tsx`
- [ ] Update email address in `components/CTA.tsx` and `app/contact/page.tsx`
- [ ] Update LinkedIn URL in `components/Footer.tsx` and `app/contact/page.tsx`
- [ ] Submit sitemap to Google Search Console: `https://goaivora.com/sitemap.xml`
- [ ] Set up Google Analytics or Vercel Analytics
- [ ] Test page speed with PageSpeed Insights

---

## 9. Automatic Deployments

Once connected to GitHub, every push to `main` triggers an automatic Vercel deployment. Pull request previews are also generated automatically.

```bash
# Push changes
git add .
git commit -m "Update hero copy"
git push
```

Vercel deploys within ~30 seconds.

---

## 10. Performance Notes

- Next.js App Router uses React Server Components by default — pages load fast
- Images should be placed in `/public` and served via `next/image` for automatic optimization
- Framer Motion animations use `whileInView` with `once: true` to prevent re-animation
- Google Fonts are loaded via CSS `@import` in `globals.css` — consider moving to `next/font` for production performance

---

## Support

For deployment issues: https://vercel.com/docs
For Next.js issues: https://nextjs.org/docs
