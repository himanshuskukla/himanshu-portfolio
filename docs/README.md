# Website Documentation

Welcome to your portfolio website documentation!

## 📚 Quick Links

1. **[How to Update Images](./HOW-TO-UPDATE-IMAGES.md)** - Change photos and images
2. **[How to Edit Content](./HOW-TO-EDIT-CONTENT.md)** - Update text and information
3. **[How to Add New Blogs](./HOW-TO-ADD-NEW-BLOGS.md)** - Manage blog posts
4. **[How to Deploy](./HOW-TO-DEPLOY.md)** - Make your website live

---

## 🚀 Quick Start

### Running Locally

```bash
cd "/Users/himanshushukla/Desktop/Claude access files/Himanshu website/demo-8-final"
npm run dev
```

Visit: `http://localhost:3008`

### Make Changes

1. **Edit files** in VS Code or any text editor
2. **Save** (Cmd/Ctrl + S)
3. **Browser auto-refreshes** to show changes

---

## 📁 Project Structure

```
demo-8-final/
├── app/                      # Main application pages
│   ├── page.tsx             # Homepage (Hero, Projects, About)
│   ├── services/page.tsx    # Services page
│   ├── projects/page.tsx    # Projects page
│   ├── about/page.tsx       # About page
│   ├── blog/page.tsx        # Blog page
│   └── contact/page.tsx     # Contact page
├── components/              # Reusable components
│   └── Navbar.tsx          # Navigation bar
├── public/                  # Static files (images, etc.)
│   └── images/             # Your images go here
├── docs/                    # Documentation (you are here!)
└── package.json            # Dependencies
```

---

## 🎨 Color Scheme

Your website uses a consistent color palette:

- **Primary Blue-Purple**: `from-blue-500 to-purple-600`
- **Purple-Pink**: `from-purple-500 to-pink-600`
- **Indigo-Purple**: `from-indigo-500 to-purple-600`

To maintain consistency, use these gradient classes when adding new content.

---

## 📝 Common Tasks

### 1. Change Your Name
**File**: `app/page.tsx` → Line 442
```typescript
<span className="text-primary">Your Name Here</span>
```

### 2. Update Projects
**File**: `app/page.tsx` → Line 326
```typescript
const projects = [
  {
    title: "Project Name",
    subtitle: "Short description",
    // ...
  }
]
```

### 3. Add New Service
**File**: `app/services/page.tsx` → Line 9
Add a new object to the services array.

### 4. Change Contact Email
**File**: `app/page.tsx` → Line 910
```typescript
value: 'your-email@example.com',
href: 'mailto:your-email@example.com'
```

---

## 🖼️ Image Locations

| Location | Current Method | File |
|----------|---------------|------|
| Project images | Unsplash URLs | `app/page.tsx` |
| Profile photo | Placeholder | `app/page.tsx` line 667 |

See [HOW-TO-UPDATE-IMAGES.md](./HOW-TO-UPDATE-IMAGES.md) for detailed instructions.

---

## 🌐 Deployment

**Recommended**: Vercel (FREE)

Quick steps:
1. Push code to GitHub
2. Connect GitHub to Vercel
3. Deploy (auto-builds in 3 minutes)
4. Get free URL: `your-site.vercel.app`

See [HOW-TO-DEPLOY.md](./HOW-TO-DEPLOY.md) for full guide.

---

## 📧 Contact Form Setup

### Option 1: Formspree (Easiest)
- **Cost**: FREE (50 submissions/month)
- **Setup**: 5 minutes
- **Emails**: Sent to your inbox

### Option 2: Web3Forms
- **Cost**: FREE (unlimited)
- **Setup**: 5 minutes
- **Emails**: Sent to your inbox

See deployment guide for setup instructions.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 14.2.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + GSAP
- **3D**: Three.js (React Three Fiber)
- **Icons**: Lucide React

---

## 📦 Available Scripts

```bash
# Development server (port 3008)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

---

## 🎯 Page Descriptions

### Homepage (`/`)
- Hero section with 3D particle animation
- Animated statistics
- Services overview (3 cards)
- Featured projects (5 projects)
- About section
- Blog preview
- Contact form

### Services (`/services`)
- 3 service cards with hover effects
- Expandable detail sections
- Engagement models (2 types)
- Proven approach timeline
- CTA section

### Projects (`/projects`)
- All 5 projects in detail
- Alternating layout
- Metrics and technologies
- Challenge-solution-impact structure

### About (`/about`)
- Professional bio
- Career journey timeline
- Skills and expertise
- Industry experience

### Blog (`/blog`)
- Blog post cards (placeholder)
- Ready for CMS integration

### Contact (`/contact`)
- Contact form
- Email and social links
- Animated background

---

## 🚨 Troubleshooting

### Site won't start?
```bash
npm install
npm run dev
```

### Changes not showing?
- Hard refresh: Cmd/Ctrl + Shift + R
- Clear browser cache
- Check console for errors (F12)

### Build fails?
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

---

## 📞 Need Help?

1. **Check the guides** in this `docs/` folder
2. **Google** the error message + "Next.js"
3. **Stack Overflow**: Great for specific issues
4. **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)

---

## ✅ Pre-Launch Checklist

Before going live:

- [ ] Update all content with your information
- [ ] Replace placeholder images with real photos
- [ ] Add your email address
- [ ] Test contact form
- [ ] Add LinkedIn/GitHub links
- [ ] Review all 18 blog posts
- [ ] Review all pages for typos
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Test blog post navigation
- [ ] Set up analytics (Google Analytics)
- [ ] Create favicon (icon in browser tab)

---

## 🎉 You're All Set!

Your portfolio website is ready to customize and deploy. Start by:

1. Reading **[HOW-TO-EDIT-CONTENT.md](./HOW-TO-EDIT-CONTENT.md)**
2. Making your first edit
3. When ready, follow **[HOW-TO-DEPLOY.md](./HOW-TO-DEPLOY.md)**

Good luck! 🚀
