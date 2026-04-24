# Vedika Weddings — Production-Ready Next.js Website

> Luxury wedding photography & planning website for Nepal (Pokhara + Kathmandu)

---

## 🚀 Quick Start

### 1. Prerequisites
- Node.js 18+ ([nodejs.org](https://nodejs.org))
- npm or yarn

### 2. Install dependencies
```bash
cd vedika-weddings
npm install
```

### 3. Configure environment variables
```bash
cp .env.example .env.local
```

Edit `.env.local` with your values:

| Variable | Description | Required |
|---|---|---|
| `SMTP_HOST` | SMTP server (e.g., `smtp.gmail.com`) | For email |
| `SMTP_PORT` | SMTP port (usually `587`) | For email |
| `SMTP_USER` | Your Gmail/SMTP email address | For email |
| `SMTP_PASS` | Gmail App Password (not your real password) | For email |
| `CONTACT_TO_EMAIL` | Where inquiries are sent | For email |
| `NEXT_PUBLIC_SITE_URL` | Your live domain (no trailing slash) | SEO |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number with country code | WhatsApp |

> **Gmail App Password**: Go to Google Account → Security → 2-Step Verification → App passwords. Create one for "Mail".

### 4. Run locally
```bash
npm run dev
```
Visit: http://localhost:3000

### 5. Build for production
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata, global providers
│   ├── page.tsx            # Homepage (assembles all sections)
│   ├── globals.css         # Design system, CSS variables, global styles
│   ├── blog/
│   │   ├── page.tsx        # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx    # Dynamic blog post page
│   ├── api/
│   │   └── contact/
│   │       └── route.ts    # Contact form API (email + inquiry storage)
│   ├── sitemap.ts          # Auto-generated sitemap for SEO
│   └── robots.ts           # robots.txt for SEO
│
├── components/
│   ├── Navbar.tsx           # Sticky nav with scroll-aware styling + mobile menu
│   ├── Hero.tsx             # Full-screen hero with Framer Motion animations
│   ├── AboutStrip.tsx       # Brand story + statistics
│   ├── Portfolio.tsx        # Gallery grid with lightbox viewer
│   ├── Packages.tsx         # 4-tier pricing cards
│   ├── PlanningHub.tsx      # 5 expandable planning sections (modular data)
│   ├── Tools.tsx            # Tools launcher
│   ├── tools/
│   │   ├── ChecklistModal.tsx   # Wedding checklist (localStorage)
│   │   ├── BudgetModal.tsx      # Budget calculator (localStorage)
│   │   └── GuestListModal.tsx   # Guest list with RSVP (localStorage)
│   ├── Testimonials.tsx     # Infinite-scroll testimonial carousel
│   ├── BlogPreview.tsx      # Featured + sidebar blog layout
│   ├── AboutSection.tsx     # Photographer story + philosophy
│   ├── InstagramGrid.tsx    # 6-photo Instagram preview
│   ├── ContactSection.tsx   # Form with real API call + WhatsApp
│   ├── Footer.tsx           # Links + social + copyright
│   ├── FadeInView.tsx       # Scroll-triggered animation wrapper
│   ├── WhatsAppFloat.tsx    # Fixed WhatsApp button
│   └── StickyCTA.tsx        # Mobile sticky "Book Now" bar
│
├── hooks/
│   ├── useLocalStorage.ts   # Persistent state hook (SSR-safe)
│   └── useScrolled.ts       # Scroll position hook for navbar
│
└── lib/
    ├── blog.ts              # Blog data layer (replace with CMS)
    ├── planning.ts          # Planning hub content (modular data)
    └── types.ts             # Shared TypeScript types
```

---

## 🌐 Deploy to Vercel

### Option A — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option B — Vercel Dashboard (recommended)
1. Push code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Vedika Weddings"
   git remote add origin https://github.com/YOUR_USERNAME/vedika-weddings.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Add environment variables in Vercel dashboard (Settings → Environment Variables)
5. Click **Deploy**

### Option C — Prabhu Host / cPanel (if needed)
Since you're on Prabhu Host with cPanel, use the **Static Export** method:
```bash
# In next.config.js, add: output: 'export'
npm run build
# Upload the /out folder to public_html via cPanel File Manager
```
> Note: API routes (contact form) won't work with static export. Use Formspree or EmailJS as alternatives.

---

## 📧 Contact Form — No SMTP Setup?

If you don't have SMTP, use **Formspree** (free tier):
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form → get your endpoint URL
3. In `ContactSection.tsx`, replace the fetch call:
   ```tsx
   const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(form),
   })
   ```

---

## 🗄️ Upgrading to a Real Database

The contact form currently saves inquiries to `data/inquiries.json`. To use a real database:

### Supabase (recommended — free tier)
```bash
npm install @supabase/supabase-js
```
In `src/app/api/contact/route.ts`, replace `saveInquiry()` with:
```ts
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!)
await supabase.from('inquiries').insert(inquiry)
```

---

## 📝 Adding Blog Posts

Blog posts are in `src/lib/blog.ts`. To add a post:
```ts
{
  slug: 'my-new-post',              // URL: /blog/my-new-post
  title: 'My Article Title',
  excerpt: 'Short description...',
  category: 'Planning',
  date: 'April 2025',
  readTime: '5 min read',
  image: 'https://...',
  featured: false,
  content: `<p>Your HTML content here...</p>`,
}
```

### Connect to a CMS (for non-technical content updates)
Replace `getAllPosts()` in `blog.ts` with:
- **Contentful**: `contentfulClient.getEntries({ content_type: 'blogPost' })`
- **Sanity**: `client.fetch('*[_type == "post"]')`
- **Notion API**: Fetch from a Notion database

---

## 🎨 Customising the Design

All design tokens are in `src/app/globals.css`:
```css
:root {
  --gold: #C9A84C;       /* Change brand gold */
  --gold-light: #E8D5A3;
  --black: #0A0A0A;
  --white: #FDFCF8;
  /* etc. */
}
```

Fonts are configured in `src/app/layout.tsx` (Cormorant Garamond + Jost from Google Fonts).

---

## 📱 Features Summary

| Feature | Implementation |
|---|---|
| Contact form | API route + Nodemailer + auto-reply email |
| Inquiry storage | JSON file (swap for Supabase/Postgres) |
| Wedding checklist | Interactive, persists in localStorage |
| Budget calculator | Live-updating, persists in localStorage |
| Guest list | Add/remove/RSVP, persists in localStorage |
| Portfolio lightbox | Click-to-zoom image viewer |
| Blog | Dynamic routes, SEO meta per post |
| Sitemap | Auto-generated at /sitemap.xml |
| WhatsApp button | Floating + pre-filled message |
| Mobile sticky CTA | Appears after scrolling 300px |
| Animations | Framer Motion scroll-triggered fadeUp |
| Testimonials | CSS infinite-scroll marquee |
| Planning hub | 5 expandable detail sections |
| SEO | Per-page metadata, OG tags, robots.txt |
| Image optimisation | next/image with WebP/AVIF + lazy loading |

---

## 🔑 SEO Keywords Targeted

- "wedding photographer in Pokhara"
- "wedding photography Nepal"
- "wedding photographer Kathmandu"
- "luxury wedding photography Nepal"
- "pre-wedding photography Nepal"
- "cinematic wedding film Nepal"
- "destination wedding Nepal"
- "Nepali wedding photographer"

---

## 📞 Support

For customisation or questions, contact the developer or refer to:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vercel Deployment Guide](https://vercel.com/docs)
