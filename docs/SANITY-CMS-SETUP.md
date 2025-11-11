# Sanity CMS Setup Guide

## What You've Got So Far ✅

I've installed and configured Sanity CMS for your portfolio website! Here's what's ready:

- ✅ Sanity packages installed
- ✅ Content schemas created (Blog Posts, Projects)
- ✅ Image upload capability configured
- ✅ Studio route set up at `/studio`
- ✅ Client configuration for fetching data

## What You Need to Do (5 Minutes)

### Step 1: Create Your Sanity Project

Run this command in your terminal:

```bash
npx sanity@latest init --create-project "Himanshu Portfolio" --dataset production
```

**What will happen:**
1. It will ask you to log in (choose Google, GitHub, or email)
2. It will create a new Sanity project
3. You'll get a **Project ID** - SAVE THIS!

**Example output:**
```
✔ Creating project
✔ Project created: Himanshu Portfolio [abc12345]
```

The `abc12345` part is your PROJECT ID.

---

### Step 2: Add Your Project ID

Open the file `.env.local` and replace the placeholder:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc12345  # ← Put your actual project ID here
NEXT_PUBLIC_SANITY_DATASET=production
```

---

### Step 3: Configure CORS

1. Go to https://www.sanity.io/manage
2. Click on your project "Himanshu Portfolio"
3. Go to **API** settings
4. Under **CORS Origins**, click **Add CORS origin**
5. Add these origins:
   - `http://localhost:3008` (for local development)
   - `https://your-vercel-domain.vercel.app` (your production URL)
6. Check "Allow credentials"
7. Click **Save**

---

### Step 4: Start Your Dev Server

```bash
npm run dev
```

Visit: `http://localhost:3008/studio`

You'll see the Sanity Studio login screen!

---

## How to Use Your CMS

### Accessing the Studio

**Local:** `http://localhost:3008/studio`
**Production:** `https://yourdomain.com/studio`

### Adding a Blog Post

1. Go to `/studio`
2. Click **Blog Post** in the left sidebar
3. Click **Create** button
4. Fill in the fields:
   - **Title**: Your blog post title
   - **Slug**: Click "Generate" to auto-create from title
   - **Author**: Your name (pre-filled)
   - **Main Image**: Click to upload an image
   - **Category**: Select from dropdown
   - **Tags**: Add keywords (press Enter after each)
   - **Excerpt**: Short summary (max 200 chars)
   - **Content**: Write your article using the rich text editor
   - **Read Time**: e.g., "5 min read"
   - **Published At**: Auto-filled with current date

5. Click **Publish** button (top right)

### Uploading Images

- Click any image field
- Drag & drop OR click to browse
- Images are automatically optimized
- Add alt text for accessibility

---

## What's Been Set Up For You

### Content Types Available:

#### 1. **Blog Post** (`blogPost`)
- Title, Slug, Author
- Main Image with hotspot cropping
- Categories (3 pre-configured)
- Tags (array)
- Excerpt (short summary)
- **Rich Text Content** with:
  - Headings (H2, H3)
  - Bold, Italic
  - Bullet & Numbered lists
  - Images within content
  - Blockquotes
- Read time
- Published date

#### 2. **Project** (`project`)
- Title & Subtitle
- Description
- Project Image
- Technologies (array)
- Live URL
- GitHub URL
- Display order

---

## File Structure Created

```
demo-8-final/
├── sanity.config.ts          # Main Sanity configuration
├── .env.local                 # Your project credentials
├── sanity/
│   ├── lib/
│   │   ├── client.ts         # Sanity client for fetching data
│   │   └── image.ts          # Image URL builder
│   └── schemas/
│       ├── index.ts          # Schema exports
│       ├── blogPost.ts       # Blog post schema
│       └── project.ts        # Project schema
└── app/
    └── studio/
        └── [[...tool]]/
            └── page.tsx      # Studio route
```

---

## Next Steps (Optional)

### Migrate Existing Blog Posts

I can help you migrate your existing 18 blog posts from `app/data/blogPosts.ts` to Sanity. This will let you edit them through the CMS.

Would you like me to:
1. Create a migration script?
2. Or manually add a few posts as examples?

### Update Frontend to Use Sanity

Once you have some content in Sanity, I'll update your blog pages to fetch data from Sanity instead of the local file.

---

## Troubleshooting

### "Project ID is required"
- Make sure you added your project ID to `.env.local`
- Restart your dev server after changing env variables

### Can't access /studio
- Check that the dev server is running
- Clear browser cache
- Try incognito mode

### Images not uploading
- Check CORS settings in Sanity dashboard
- Make sure your domain is whitelisted

### Build errors
- Run `npm install` again
- Delete `.next` folder and rebuild

---

## Benefits You'll Get

### ✅ No Code Editing
- Edit all content through a beautiful interface
- No need to touch code files anymore

### ✅ Image Management
- Upload images directly
- Automatic optimization & CDN delivery
- Cropping & hotspot selection

### ✅ Live Preview (Coming Soon)
- See changes before publishing
- Mobile preview
- Draft mode

### ✅ Collaboration
- Invite team members
- Role-based access
- Revision history

---

## Free Forever

Sanity's free tier includes:
- ✅ 3 users
- ✅ Unlimited API requests
- ✅ 10GB bandwidth/month
- ✅ 5GB assets storage
- ✅ All features unlocked

Perfect for personal portfolios!

---

## Need Help?

1. **Sanity Documentation**: https://www.sanity.io/docs
2. **Support**: https://www.sanity.io/help
3. **Community**: https://slack.sanity.io

---

## Quick Commands Reference

```bash
# Create Sanity project
npx sanity init

# Start dev server
npm run dev

# Access Studio
open http://localhost:3008/studio

# Deploy Studio to Sanity (optional)
npx sanity deploy

# Manage project
open https://www.sanity.io/manage
```

---

## What's Next?

Once you complete Step 1-4 above:

1. ✅ You can start adding blog posts through the CMS
2. ✅ Upload and manage images
3. ✅ I'll help update the frontend to fetch from Sanity
4. ✅ Deploy to production with live editing capabilities

**Ready to get started?** Run the command in Step 1!
