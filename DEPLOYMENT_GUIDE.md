# Deployment Guide - Himanshu Portfolio Website

## Current Status

✅ **GitHub Repository**: https://github.com/himanshuskukla/himanshu-portfolio.git
✅ **Latest Code**: Partially pushed (needs update with recent changes)
✅ **Ready for Deployment**: Yes (with steps below)

---

## Deployment Options for Next.js + Sanity

### ⭐ **Recommended: Vercel (Best for Next.js)**

**Why Vercel?**
- Built by the creators of Next.js
- **FREE** for personal/hobby projects (unlimited bandwidth)
- Automatic deployments from GitHub
- Full support for Next.js features (ISR, API routes, etc.)
- Custom domain support (free SSL)
- Environment variables management
- Preview deployments for each commit
- Global CDN with edge functions
- **GitHub Pro not required** - Vercel's free tier is better than GitHub Pages for Next.js

**What GitHub Pages Can't Do:**
- ❌ No server-side rendering (SSR)
- ❌ No API routes
- ❌ No ISR (Incremental Static Regeneration)
- ❌ No environment variables
- ❌ Only static HTML/CSS/JS

**Vercel Can Do Everything:**
- ✅ Full Next.js support
- ✅ ISR for content updates
- ✅ Sanity CMS integration
- ✅ Environment variables
- ✅ Analytics & performance monitoring

---

## Step-by-Step Deployment Guide

### Phase 1: Commit & Push Latest Changes to GitHub

**Current Uncommitted Changes:**
- Services Sanity integration
- Homepage & About schemas
- Migration scripts
- Documentation files

**Steps:**

```bash
# 1. Navigate to project directory
cd "/Users/himanshushukla/Desktop/Claude access files/Himanshu website/demo-8-final"

# 2. Check current status
git status

# 3. Add all changes
git add .

# 4. Commit changes
git commit -m "feat: Add Services Sanity integration and deployment scripts"

# 5. Push to GitHub
git push origin main
```

**Note:** `.env.local` won't be pushed (it's in .gitignore for security). You'll add environment variables directly in Vercel.

---

### Phase 2: Deploy to Vercel

#### Option A: Using Vercel Dashboard (Easiest)

**Step 1: Sign Up/Login to Vercel**
1. Go to https://vercel.com
2. Click "Sign Up" or "Login"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

**Step 2: Import Your Repository**
1. Click "Add New..." → "Project"
2. Find "himanshuskukla/himanshu-portfolio" in the list
3. Click "Import"

**Step 3: Configure Project**
1. **Framework Preset**: Next.js (auto-detected)
2. **Root Directory**: ./
3. **Build Command**: `npm run build` (default)
4. **Output Directory**: `.next` (default)
5. **Install Command**: `npm install` (default)

**Step 4: Add Environment Variables**
Click "Environment Variables" and add these:

| Name | Value | Source |
|------|-------|--------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `1rylst8j` | From your .env.local |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | From your .env.local |
| `SANITY_API_TOKEN` | `skbXtTZae...` | From your .env.local (full token) |

**Important:**
- Make sure to add the **full API token** for `SANITY_API_TOKEN`
- Environment variables are encrypted by Vercel
- You can edit them later in Project Settings → Environment Variables

**Step 5: Deploy**
1. Click "Deploy"
2. Wait 2-3 minutes for build to complete
3. You'll get a URL like: `https://himanshu-portfolio-xyz.vercel.app`

**Step 6: Add Custom Domain (Optional)**
1. Go to Project Settings → Domains
2. Add your domain (e.g., `himanshushukla.com`)
3. Follow DNS configuration instructions
4. Vercel automatically provisions SSL certificate

---

#### Option B: Using Vercel CLI (Advanced)

```bash
# 1. Install Vercel CLI globally
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy from project directory
cd "/Users/himanshushukla/Desktop/Claude access files/Himanshu website/demo-8-final"
vercel

# 4. Follow prompts:
# - Setup and deploy? Yes
# - Which scope? Your username
# - Link to existing project? No
# - Project name? himanshu-portfolio
# - Directory? ./
# - Override settings? No

# 5. Add environment variables
vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID production
# Enter: 1rylst8j

vercel env add NEXT_PUBLIC_SANITY_DATASET production
# Enter: production

vercel env add SANITY_API_TOKEN production
# Enter: your full Sanity token

# 6. Deploy to production
vercel --prod
```

---

### Phase 3: Configure Sanity for Production

**Step 1: Add Production URL to Sanity CORS**
1. Go to https://sanity.io/manage
2. Select your project (ID: 1rylst8j)
3. Go to "API" → "CORS Origins"
4. Click "Add CORS Origin"
5. Add your Vercel URL: `https://your-project.vercel.app`
6. Enable credentials: ✅
7. Save

**Step 2: Update Sanity Studio URL (if you want public studio)**
In `sanity.config.ts`, you can optionally set a production URL for the studio.

---

### Phase 4: Verify Deployment

**Checklist:**

```bash
# 1. Visit your deployed site
https://your-project.vercel.app

# 2. Check these pages work:
✅ Homepage (/)
✅ Services (/services)
✅ Projects (/projects)
✅ Blog (/blog)
✅ About (/about)
✅ Contact (/contact)

# 3. Check Sanity Studio
https://your-project.vercel.app/studio

# 4. Test content updates:
- Edit a service in Sanity Studio
- Wait 5+ minutes (ISR revalidation)
- Refresh the services page
- Verify changes appear

# 5. Check browser console for errors
Press F12 → Console tab
Should see no errors

# 6. Test responsiveness
- Mobile view
- Tablet view
- Desktop view
```

---

## Automatic Deployments

**How it works:**
1. You push changes to GitHub (any branch)
2. Vercel automatically detects the push
3. Vercel builds and deploys your site
4. You get a unique preview URL for each branch/PR
5. `main` branch deploys to production

**Example workflow:**
```bash
# Make changes locally
git add .
git commit -m "Update homepage content"
git push origin main

# Vercel automatically:
# - Detects the push
# - Runs `npm install`
# - Runs `npm run build`
# - Deploys to production
# - Sends you a notification
```

---

## Environment Variables Management

**Adding new variables:**
1. Go to Vercel Dashboard → Your Project
2. Settings → Environment Variables
3. Add variable
4. Choose environments: Production, Preview, Development
5. Save
6. Redeploy for changes to take effect

**Local development:**
Keep using `.env.local` file - it won't be pushed to GitHub.

---

## Troubleshooting

### Build Fails on Vercel

**Error: "Module not found"**
```bash
# Solution: Check package.json dependencies
npm install
npm run build

# If builds locally, check Vercel build logs
```

**Error: "Environment variable not found"**
```bash
# Solution: Add missing variables in Vercel dashboard
# Project Settings → Environment Variables
```

**Error: "Sanity connection failed"**
```bash
# Solution:
1. Verify SANITY_PROJECT_ID is correct
2. Check SANITY_API_TOKEN has write permissions
3. Add Vercel URL to Sanity CORS origins
```

### Site Deployed but Content Not Updating

**Problem: Edited content in Sanity but site doesn't show changes**

```bash
# Solution: ISR revalidation period
# Pages revalidate every 5 minutes (300 seconds)
# Wait 5+ minutes after editing, then hard refresh (Cmd+Shift+R)

# Or force revalidation in Vercel:
vercel deploy --prod
```

### Sanity Studio Not Loading

**Problem: /studio route shows 404 or blank**

```bash
# Check:
1. app/studio/[[...tool]]/page.tsx exists
2. Sanity packages are installed
3. Environment variables are set
4. Clear browser cache
```

---

## Performance Optimization (Post-Deployment)

### 1. Enable Analytics
```bash
# In Vercel Dashboard:
Settings → Analytics → Enable
```

### 2. Image Optimization
```javascript
// Already configured with next/image
// Vercel automatically optimizes images
```

### 3. Edge Functions
```javascript
// For faster global performance
// Add to next.config.js:
module.exports = {
  experimental: {
    runtime: 'edge',
  },
}
```

### 4. Caching Strategy
```javascript
// Already configured with ISR
export const revalidate = 300 // 5 minutes
```

---

## Cost Breakdown

### Vercel (FREE Tier)
- ✅ Unlimited deployments
- ✅ Unlimited bandwidth
- ✅ 100 GB-hours of compute
- ✅ 1000 GB bandwidth
- ✅ Custom domains
- ✅ SSL certificates
- ✅ Analytics (basic)
- ✅ Preview deployments

**Paid if you need:**
- More than 100 GB-hours compute (~1M requests/month)
- Team collaboration features
- Advanced analytics
- Password protection

### Sanity CMS (FREE Tier)
- ✅ 3 users
- ✅ Unlimited API requests
- ✅ 10GB bandwidth
- ✅ 5GB assets storage
- ✅ Full Studio access

**Paid if you need:**
- More users
- More storage
- Advanced features

### GitHub (You already have Pro)
- ✅ Unlimited private repos
- ✅ Advanced tools
- ✅ Not needed for deployment (Vercel handles it)

**Total Monthly Cost: $0** (for standard portfolio usage)

---

## Next Steps After Deployment

### 1. Set Up Custom Domain
**If you own a domain:**
1. Vercel Dashboard → Domains
2. Add domain: `himanshushukla.com`
3. Update DNS records:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com

   Type: A
   Name: @
   Value: 76.76.21.21
   ```
4. Wait for DNS propagation (5-60 minutes)
5. SSL auto-provisioned

### 2. Set Up Monitoring
- Enable Vercel Analytics
- Set up Google Analytics (optional)
- Add error tracking (Sentry, optional)

### 3. SEO Optimization
- Add meta tags (title, description)
- Create sitemap.xml
- Submit to Google Search Console
- Add robots.txt

### 4. Backup Strategy
- GitHub has your code (automatic backup)
- Sanity has your content (automatic backup)
- Optional: Set up automated backups using Sanity CLI

---

## Quick Reference Commands

```bash
# Push changes to GitHub
git add .
git commit -m "Your message"
git push origin main

# Deploy with Vercel CLI
vercel --prod

# Check deployment status
vercel ls

# View deployment logs
vercel logs

# Open project in browser
vercel open

# Add environment variable
vercel env add VARIABLE_NAME production
```

---

## Support & Resources

**Vercel Documentation:**
- https://vercel.com/docs
- https://vercel.com/docs/frameworks/nextjs

**Sanity Documentation:**
- https://www.sanity.io/docs
- https://www.sanity.io/docs/deployment

**Next.js Documentation:**
- https://nextjs.org/docs
- https://nextjs.org/docs/deployment

**Your Project:**
- GitHub: https://github.com/himanshuskukla/himanshu-portfolio
- Sanity: https://sanity.io/manage (Project ID: 1rylst8j)

---

## Summary

**Recommended Deployment Path:**
1. ✅ Push latest code to GitHub
2. ✅ Deploy to Vercel (free, automatic)
3. ✅ Add environment variables
4. ✅ Configure Sanity CORS
5. ✅ Add custom domain (optional)
6. ✅ Enable analytics

**Why not GitHub Pages?**
- Can't run Next.js server features
- Can't use Sanity CMS
- Can't use ISR
- Limited to static HTML only

**GitHub Pro Benefits:**
- Good for code management
- Not needed for deployment
- Vercel free tier > GitHub Pages for Next.js

---

**Last Updated:** 2025-12-03
**Status:** Ready to deploy
**Estimated Time:** 15-20 minutes for first deployment
