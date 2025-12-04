# GitHub Pages Deployment Guide (No Vercel, No Sanity)

## Overview

Deploy your portfolio website to GitHub Pages completely free using:
- ✅ GitHub Pages (Free hosting)
- ✅ Next.js Static Export (No server needed)
- ✅ Hardcoded content (No CMS)
- ✅ GitHub Actions (Automatic deployment)
- ✅ Custom domain support (Optional)

---

## What Changes We Need to Make

### ❌ Remove:
- Sanity CMS integration
- All Sanity packages
- ISR (Incremental Static Regeneration)
- Server-side rendering
- API routes
- Environment variables

### ✅ Keep:
- All pages (Home, Services, Projects, Blog, About, Contact)
- All animations (Framer Motion, GSAP, Three.js)
- All styling (Tailwind CSS)
- Responsive design
- All content (hardcoded instead of from Sanity)

---

## Complete Deployment Guide

I've created a detailed guide. Let me explain the **3 main approaches** you can take:

### **Option A: Full Cleanup (Recommended)**
- Remove all Sanity code and dependencies
- Convert to 100% static site
- Deploy to GitHub Pages
- **Time**: 30-45 minutes
- **Result**: Clean, simple, no external dependencies

### **Option B: Keep Current Code, Just Deploy Static**
- Keep Sanity code in place (but not used)
- Configure for static export
- Deploy to GitHub Pages
- **Time**: 15-20 minutes
- **Result**: Works but has unused code

### **Option C: New Branch for Static Version**
- Create separate branch for static deployment
- Keep main branch with Sanity for future
- **Time**: 20-30 minutes
- **Result**: Best of both worlds

---

## Quick Start - Option A (Clean Approach)

### Step 1: Remove Sanity Packages

```bash
npm uninstall sanity @sanity/vision @sanity/image-url @sanity/client next-sanity @portabletext/react @sanity/icons
```

### Step 2: Configure Next.js for Static Export

Update `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

### Step 3: Remove Sanity Files

```bash
rm -rf sanity/
rm -rf app/studio/
rm -f sanity.config.ts
rm -f .env.local
rm -rf scripts/migrate-*.ts
```

### Step 4: Restore Original Pages

```bash
# Restore services page
mv app/services/page.tsx.backup app/services/page.tsx
rm -f app/services/ServicesPageClient.tsx
```

### Step 5: Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v2
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v3
        id: deployment
```

### Step 6: Enable GitHub Pages

1. Go to: https://github.com/himanshuskukla/himanshu-portfolio/settings/pages
2. Under "Build and deployment" → Source: Select **"GitHub Actions"**
3. Save

### Step 7: Deploy

```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

Your site will be live at:
**https://himanshuskukla.github.io/himanshu-portfolio/**

---

## Would You Like Me To:

1. **Start the cleanup now?** I'll remove Sanity and configure everything
2. **Show what will change first?** Review all files that will be modified
3. **Create a test branch?** Try it out without affecting main branch

Let me know your preference and I'll proceed!
