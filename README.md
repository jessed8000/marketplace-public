# Quantic Test Website

A Next.js website for Quantic Test - Real World Asset Tokenization Platform.

## Features

- 🎨 Responsive design matching Sketch mockups
- 📝 Decap CMS for content management
- ⚡ Static site generation with Next.js
- 🎯 TypeScript for type safety
- 💨 Tailwind CSS for styling
- 📱 Mobile-first design

## Quick Start

1. Clone this repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

## Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `out`
4. Enable Netlify Identity for CMS access

### Vercel
1. Import your GitHub repository in Vercel
2. Deploy automatically

## CMS Access

After deployment, access the CMS at `/admin` to manage content.

## Project Structure

- `pages/` - Next.js pages
- `components/` - React components
- `content/` - Markdown content files
- `lib/` - Utility functions
- `public/admin/` - Decap CMS configuration

## License

MIT License