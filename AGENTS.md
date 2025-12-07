# Arantxa Portfolio - Project Context

## About

This is a portfolio website for **Arantxa**, a 22-year-old pop singer from Lima, Peru.

## Tech Stack

- **Framework**: Next.js 16.0.7 with App Router
- **Styling**: Tailwind CSS 4
- **Package Manager**: Bun
- **Font**: Outfit (Google Fonts)

## Language

All user-facing content should be in **Spanish**.

## Project Structure

```
app/
├── components/
│   ├── Navbar.tsx           # Main navigation
│   ├── NavLink.tsx          # Nav link with active state
│   ├── SocialIcons.tsx      # Instagram & TikTok icons
│   └── styleguide/          # Style guide components
├── styleguide/              # Style guide page
├── biografia/               # Biography page
├── musica/                  # Music page (album + singles)
├── videoclips/              # Video clips page
├── merch/                   # Merchandise page
├── contacto/                # Contact/subscribe page
├── globals.css              # Global styles & CSS variables
├── layout.tsx               # Root layout with Navbar
└── page.tsx                 # Home page
```

## Navigation

1. **Biografía** - Artist biography
2. **Música** - Latest album + 3 singles with streaming links
3. **Videoclips** - Embedded music videos
4. **Merch** - Merchandise store
5. **Suscríbete / Contacto** - Newsletter subscription and contact

## Assets

- `/public/icon/` - Fairy icon in various colors (brand icon)
- `/public/logo/` - "Arantxa" text logo in various colors

## Social Links

- Instagram: https://www.instagram.com/arantxamusica_/
- TikTok: https://www.tiktok.com/discover/arantxa-reategui

## Data Storage

JSON files will be used for data storage (sufficient for this portfolio).

