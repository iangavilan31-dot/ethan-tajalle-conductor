# Ethan Tajalle – Conductor Portfolio

A premium, concert-hall-inspired portfolio website for conductor Ethan Tajalle, built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Design Philosophy

This website embodies the elegance and sophistication of world-renowned concert halls—Carnegie Hall, Vienna Musikverein, Berlin Philharmonic. The design prioritizes:

- **Editorial refinement** over trendy aesthetics
- **Timeless elegance** that will remain relevant for 10–15 years
- **Concert hall aesthetic** with deep blacks, warm ivories, muted golds, and burgundy accents
- **Cinematic motion** with Framer Motion for tasteful transitions and reveals
- **Accessibility and performance** as core priorities

## Color Palette

- **Concert Black**: `#0B0B0B` (Primary background)
- **Ivory/Parchment**: `#f5f1e8` (Primary text)
- **Mahogany**: `#3d2817` (Accent)
- **Muted Gold**: `#a89968` (Highlights and CTAs)
- **Burgundy**: `#4a1f1f` (Secondary accent, velvet tones)

## Typography

- **Headings**: Playfair Display (elegant serif)
- **Body**: Inter (clean, restrained sans-serif)
- **Treatment**: Large, confident type with strong hierarchy and generous spacing

## Pages

1. **Home** – Cinematic hero, featured videos, bio preview, upcoming events, CTA
2. **About** – Professional biography, artistic vision, education, mentorship, downloads
3. **Videos** – Cinematic gallery of conducting performances and rehearsals
4. **Repertoire** – Organized by category (Symphonic, Contemporary, Opera, Chamber, Choral)
5. **Press** – Reviews, press kit materials, media downloads
6. **Calendar** – Upcoming and past engagements with elegant timeline
7. **Contact** – Contact form, media inquiries, social links

## Features

- ✅ Fully responsive design (mobile-first)
- ✅ Framer Motion animations (fade-ins, scroll reveals, hover states)
- ✅ SEO metadata for each page
- ✅ Accessible contrast and keyboard navigation
- ✅ YouTube video embeds with cinematic thumbnails
- ✅ Clean component architecture
- ✅ High performance (optimized images, lazy loading)

## Getting Started

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customization Guide

### Replace Placeholder Content

#### Bio and About
- Edit: `app/about/page.tsx`
- Replace placeholder biography, training, mentorship sections
- Add real education dates and venues

#### Videos
- Replace YouTube IDs in:
  - `app/page.tsx` (home featured videos)
  - `app/videos/page.tsx` (full videos gallery)
- Update titles, descriptions, and categories

#### Images & Headshots
- Replace headshot placeholder in `app/page.tsx`
- Add high-resolution portraits to `/public`
- Update Image paths with actual photo file names

#### Press Materials
- Update press quotes in `app/press/page.tsx`
- Add real reviews and publication names
- Link to actual PDF downloads for CV, bio, headshots

#### Calendar & Events
- Update events in:
  - `app/page.tsx` (upcoming preview)
  - `app/calendar/page.tsx` (full calendar)
- Replace with real dates, venues, and engagements

#### Contact Information
- Update email addresses in:
  - `components/Footer.tsx`
  - `app/contact/page.tsx`
  - `app/press/page.tsx`
- Add phone number if desired
- Update location information
- Set up contact form backend (see below)

#### Social Media Links
- Update social media URLs in:
  - `components/Footer.tsx` (Instagram, LinkedIn, YouTube)
  - `app/contact/page.tsx` (social links section)

### Contact Form Backend

The contact form is currently a placeholder. To enable functionality, integrate with:

**Option 1: Formspree (Free)**
```typescript
// In app/contact/page.tsx handleSubmit:
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: JSON.stringify(formState),
});
```

**Option 2: EmailJS**
```typescript
import emailjs from '@emailjs/browser';
emailjs.init('YOUR_PUBLIC_KEY');
const result = await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formState);
```

**Option 3: Custom Backend**
Set up a serverless function (Vercel, AWS Lambda, etc.) to handle email sending.

## Component Architecture

### Reusable Components

- **Navbar** – Fixed navigation with mobile menu
- **Footer** – Site footer with links and social media
- **Hero** – Section headers with optional CTAs
- **SectionHeading** – Centered or left-aligned section titles
- **VideoCard** – YouTube video cards with cinematic thumbnails
- **EventCard** – Timeline event cards
- **PressQuote** – Styled press quote blocks

## Deployment

### Vercel (Recommended)

```bash
vercel
```

### GitHub Pages / Netlify

Connect your repository for automatic deployment.

---

**Built with precision, elegance, and a passion for orchestral music.**
