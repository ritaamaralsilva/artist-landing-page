# Rita Silva — Artist Website

Personal artist website built with modern web technologies, combining music, visual identity, and backend functionality.

This project serves both as:
- my official artist landing page
- a technical portfolio demonstrating frontend and backend integration

---

## Features

- Fullscreen hero landing with background image
- Custom audio player (manual MP3 tracks)
- Page-based navigation with clean URLs (`/about`, `/music`, etc.)
- Fixed navigation with active state
- Responsive design (desktop & mobile)
- About, Music, Live Shows and Workshops pages with scrollable content
- Live Shows page with archived concerts by year
- Music page with embedded Spotify player and external platform links
- Video page with YouTube embed
- Contact form with real backend email delivery
- Domain-verified email sending via Resend

---

## Tech Stack

### Frontend
- Next.js (Pages Router)
- React
- Tailwind CSS

### Backend
- Next.js API Routes
- Resend API (email delivery)
- Environment variables via `.env.local`

### Hosting
- Designed for Vercel
- Custom domain: https://www.ritasilva.online

---

## Contact Form (Backend)

The contact form:
- Sends emails via a secure API route
- Uses a verified subdomain for email deliverability
- Does not store user data
- Sends messages directly to a booking email address

*(This is a real backend implementation, not a mock.)*

---

## 📌 Status (DEPLOYED)

**URL:** https://www.ritasilva.online  

This project is deployed and under active development.

### ✅ Recently implemented
- Refactored navigation to page-based routing (removed hash navigation)
- Clean URLs with proper browser history support
- Page-level code splitting via Next.js routing
- Improved mobile navigation behavior
- Route-based scroll control
- Accessibility improvements (active navigation state via `aria-current`)
- Per-page SEO metadata (title, description, Open Graph tags)
- Google Search Console setup and sitemap submission
- GA4 analytics with client-side route tracking
- Social sharing previews (Open Graph image)
- Structured data (JSON-LD) for artist entity

### 🚧 Planned improvements
- PT / EN language switch
- Dynamic live shows (Songkick API integration)
- CMS-style content management
- Further performance and accessibility refinements
