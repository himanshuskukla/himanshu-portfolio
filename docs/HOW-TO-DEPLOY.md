# How to Deploy Your Website Live

## Best Option: Vercel (FREE & RECOMMENDED)

**Why Vercel?**
- ✅ **100% FREE** for personal/portfolio sites
- ✅ **Perfect for Next.js** (made by same team)
- ✅ **Free SSL certificate** (https://)
- ✅ **Auto-deploy on updates** (connect to GitHub)
- ✅ **Fast global CDN**
- ✅ **Form handling available**
- ✅ **Custom domain support** (free)

---

## Step-by-Step Deployment Guide

### Step 1: Create GitHub Repository (5 minutes)

1. **Create Account**: Go to [github.com](https://github.com) and sign up (free)

2. **Create New Repository**:
   - Click the "+" icon → "New repository"
   - Name: `himanshu-portfolio` (or any name)
   - Keep it "Public"
   - Don't initialize with README
   - Click "Create repository"

3. **Upload Your Code**:

   Open Terminal in your project folder and run:
   ```bash
   cd "/Users/himanshushukla/Desktop/Claude access files/Himanshu website/demo-8-final"

   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/himanshu-portfolio.git
   git push -u origin main
   ```

   Replace `YOUR-USERNAME` with your GitHub username.

### Step 2: Deploy to Vercel (3 minutes)

1. **Go to Vercel**: Visit [vercel.com](https://vercel.com)

2. **Sign Up**: Click "Sign Up" → Choose "Continue with GitHub"

3. **Import Project**:
   - Click "Add New..." → "Project"
   - Select your `himanshu-portfolio` repository
   - Click "Import"

4. **Configure**:
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (auto-filled)
   - Click **"Deploy"**

5. **Wait**: Takes 2-3 minutes to build

6. **Done!** You'll get a URL like: `himanshu-portfolio.vercel.app`

---

## Add Custom Domain (Optional)

### If You Have a Domain (like himanshushukla.com):

1. **In Vercel Dashboard**:
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your domain: `himanshushukla.com`

2. **Update DNS** (at your domain provider):
   - Type: `A Record`
   - Name: `@`
   - Value: `76.76.21.21`

   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`

3. **Wait**: DNS changes take 1-24 hours

### Buy a Domain (Optional):

- **Namecheap**: $8-12/year ([namecheap.com](https://namecheap.com))
- **Google Domains**: $12/year
- **GoDaddy**: $10-15/year

---

## Enable Contact Form

### Option 1: Using Vercel Forms (FREE, easiest)

1. Install package:
   ```bash
   npm install @vercel/analytics
   ```

2. Update `app/contact/page.tsx` form action:
   ```typescript
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option 2: Using Formspree (FREE - 50 submissions/month)

1. **Sign Up**: Go to [formspree.io](https://formspree.io)

2. **Create Form**:
   - Click "New Form"
   - Name it: "Contact Form"
   - Copy the form endpoint: `https://formspree.io/f/xyzabc123`

3. **Update Your Contact Form** (`app/contact/page.tsx`):

Find the form tag (around line 946) and update:

```typescript
<form
  action="https://formspree.io/f/YOUR_FORM_ID"  // Paste your endpoint
  method="POST"
  className="space-y-6"
>
  {/* Add name attributes to inputs */}
  <input type="text" name="name" placeholder="John Doe" />
  <input type="email" name="email" placeholder="john@example.com" />
  <input type="text" name="company" placeholder="Your Company" />
  <textarea name="message" placeholder="Tell me about your project..." />

  <button type="submit">Send Message</button>
</form>
```

4. **Test**: Submit a test form - you'll receive email!

### Option 3: Using Web3Forms (FREE - Unlimited)

1. **Get API Key**: Go to [web3forms.com](https://web3forms.com)
2. Enter your email
3. Copy the access key

4. **Update Form**:
```typescript
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="YOUR-API-KEY-HERE" />
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

---

## Auto-Deploy Updates

Once connected to GitHub + Vercel:

1. **Make changes locally** (edit files)
2. **Save and commit**:
   ```bash
   git add .
   git commit -m "Updated content"
   git push
   ```
3. **Vercel automatically deploys** (takes 2-3 minutes)
4. **Your site updates automatically!**

---

## Cost Comparison

| Service | Price | Features |
|---------|-------|----------|
| **Vercel** | FREE | Unlimited projects, SSL, CDN, auto-deploy |
| Netlify | FREE | Similar to Vercel, 100GB bandwidth |
| GitHub Pages | FREE | Static only, no server functions |
| AWS Amplify | FREE tier | More complex setup |
| Traditional Hosting | $5-20/month | More control, more maintenance |

**Recommendation**: Start with Vercel (free forever for portfolios)

---

## Complete Deployment Checklist

- [ ] Create GitHub account
- [ ] Upload code to GitHub
- [ ] Create Vercel account
- [ ] Connect GitHub to Vercel
- [ ] Deploy project (3 minutes)
- [ ] Test your live site
- [ ] Set up form handling (Formspree/Web3Forms)
- [ ] Test contact form
- [ ] (Optional) Add custom domain
- [ ] Share your URL!

---

## Troubleshooting

### Build Failed?
- Check Terminal for errors
- Make sure all files are committed: `git status`
- Try local build first: `npm run build`

### Form Not Working?
- Check form action URL
- Verify name attributes on inputs
- Test Formspree dashboard for submissions

### Domain Not Working?
- Wait 24 hours for DNS propagation
- Check DNS settings at your domain provider
- Verify A and CNAME records

---

## Your Deployment URLs

After deployment, you'll have:
- **Free Vercel URL**: `your-project.vercel.app`
- **Custom Domain** (if added): `himanshushukla.com`

Both will show the same site!

---

## Blog Setup (Future)

For now, blog posts are static. To make them dynamic:

### Option 1: Content Management System (CMS)
- **Sanity.io** (FREE tier available)
- **Contentful** (FREE tier available)
- **Strapi** (Self-hosted, FREE)

### Option 2: Markdown Files (Simple)
- Create `.md` files in `content/blog/`
- Use `gray-matter` and `markdown-it` packages
- Tutorial: [Next.js + Markdown Blog](https://nextjs.org/learn/basics/create-nextjs-app)

### Option 3: Notion as CMS (Easy)
- Write posts in Notion
- Use Notion API to fetch
- Tutorial: [notion.so/developers](https://developers.notion.com)

---

## Need Help?

1. **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
2. **Formspree Docs**: [help.formspree.io](https://help.formspree.io)
3. **Next.js Deployment**: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)

**Quick Support**:
- Vercel Discord: Fast community help
- Stack Overflow: Search existing questions
- YouTube: "Deploy Next.js to Vercel" tutorials
