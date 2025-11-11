# 🚀 Sanity CMS Setup - Complete Walkthrough

## Overview

This guide will walk you through setting up Sanity CMS for your portfolio website in **10 minutes**.

---

## Step 1: Create Your Sanity Project (2 minutes)

Open your terminal in the project directory and run:

```bash
npx sanity init --create-project "Himanshu Portfolio" --dataset production
```

**What happens:**
1. You'll be prompted to log in
2. Choose your preferred method:
   - **Google** (easiest)
   - **GitHub**
   - **Email/Password**

3. After login, you'll see:
```
✔ Creating dataset
✔ Bootstrapping files from template
✔ Resolving latest module versions
✔ Creating default project files

Success! Now what?

Project ID: abc12def  ← COPY THIS!
```

**📋 IMPORTANT: Copy your Project ID - you'll need it next!**

---

## Step 2: Configure Environment Variables (1 minute)

1. Open `.env.local` in your project root
2. Replace the placeholder with your actual Project ID:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc12def  ← Paste your actual ID here
NEXT_PUBLIC_SANITY_DATASET=production
```

3. Save the file

---

## Step 3: Create API Token (2 minutes)

You need a token to migrate your blog posts.

1. Go to: **https://www.sanity.io/manage**
2. Click on your project **"Himanshu Portfolio"**
3. Click **"API"** in the left sidebar
4. Click **"Tokens"** tab
5. Click **"Add API token"** button
6. Fill in:
   - **Label**: `Migration Token`
   - **Permissions**: Select `Editor`
7. Click **"Add token"**
8. **COPY THE TOKEN** (you won't see it again!)
9. Add it to `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc12def
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=skAbCd1234...your_token_here  ← Add this line
```

10. Save the file

---

## Step 4: Configure CORS Origins (2 minutes)

This allows your website to communicate with Sanity.

Still on **https://www.sanity.io/manage**:

1. Make sure you're in your "Himanshu Portfolio" project
2. Click **"API"** in the left sidebar
3. Scroll to **"CORS Origins"** section
4. Click **"Add CORS origin"**
5. Add your local development URL:
   - **Origin**: `http://localhost:3008`
   - **Allow credentials**: ✅ Check this box
6. Click **"Save"**
7. Click **"Add CORS origin"** again
8. Add your production URL (your Vercel domain):
   - **Origin**: `https://your-site.vercel.app`
   - **Allow credentials**: ✅ Check this box
9. Click **"Save"**

---

## Step 5: Migrate Your Blog Posts (1 minute)

Now let's move your existing 18 blog posts to Sanity!

In your terminal:

```bash
npx ts-node scripts/migrate-to-sanity.ts
```

**You'll see:**
```
🚀 Starting blog post migration to Sanity...

📝 Migrating: AI's Hidden Thirst...
✅ Successfully migrated: AI's Hidden Thirst...

📝 Migrating: The Invisible Project Manager...
✅ Successfully migrated: The Invisible Project Manager...

... (all 18 posts)

==================================================
📊 Migration Summary:
✅ Successful: 18
❌ Failed: 0
📝 Total: 18
==================================================

🎉 Migration complete!
```

**Note:** Images won't be migrated automatically - you'll upload them through the Studio.

---

## Step 6: Start Your Development Server (30 seconds)

```bash
npm run dev
```

Visit: **http://localhost:3008**

---

## Step 7: Access Sanity Studio (30 seconds)

Open in your browser:

**http://localhost:3008/studio**

**You'll see the Sanity Studio login screen!**

Log in with the same method you used in Step 1.

---

## 🎉 You're All Set!

### What You Can Do Now:

#### ✅ View Your Migrated Blog Posts
1. In Studio, click **"Blog Post"** in the left sidebar
2. You'll see all 18 of your blog posts!
3. Click any post to edit it

#### ✅ Upload Images
1. Open any blog post
2. Click the **"Main Image"** field
3. Drag & drop an image OR click to browse
4. Add alt text (for accessibility)
5. Click **"Publish"** to save

#### ✅ Edit Content
1. Click into any field to edit
2. Use the rich text editor for the content:
   - **Bold**, *Italic*, Headings
   - Bullet lists & numbered lists
   - Add images within the content
   - Format as quotes
3. Changes auto-save as drafts
4. Click **"Publish"** when ready

#### ✅ Add New Blog Posts
1. Click **"Blog Post"** in sidebar
2. Click the **"+"** button (top right)
3. Fill in all fields
4. Click **"Publish"**

---

## Frontend Integration

Your website now fetches blog posts from Sanity! Here's how it works:

- **Development**: Fetches from Sanity (live editing!)
- **Fallback**: If Sanity isn't configured, uses local blog posts
- **Production**: Automatically uses Sanity once deployed

**No code changes needed!** Your existing blog pages now pull from Sanity automatically.

---

## Troubleshooting

### "Project ID is required"
- **Solution**: Make sure you added your Project ID to `.env.local`
- Restart your dev server: `Ctrl+C` then `npm run dev`

### Can't access /studio
- **Solution**:
  - Check that dev server is running
  - Try: `http://localhost:3008/studio` (with /studio at the end)
  - Clear browser cache or try incognito mode

### Migration failed
- **Solution**:
  - Make sure SANITY_API_TOKEN is in `.env.local`
  - Token must have "Editor" permissions
  - Restart your terminal and try again

### Images not uploading
- **Solution**:
  - Check CORS settings in Sanity dashboard
  - Make sure `http://localhost:3008` is added
  - "Allow credentials" must be checked

---

## Next Steps

### 1. Upload Images for Blog Posts
- Go through each blog post in Studio
- Upload relevant images
- Add alt text for SEO

### 2. Review & Edit Content
- Check formatting looks good
- Make any content updates
- Ensure all fields are filled in

### 3. Test on Your Live Site
- Visit `http://localhost:3008/blog`
- Your blog posts should now show with Sanity data!
- Click into posts to see full content

### 4. Deploy to Production
Once everything looks good:

```bash
git add .
git commit -m "Add Sanity CMS integration"
git push
```

Vercel will auto-deploy! Add your production SANITY credentials as environment variables in Vercel:

1. Go to Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`: your_project_id
   - `NEXT_PUBLIC_SANITY_DATASET`: production

---

## Key Features You Now Have

### 🖼️ Image Management
- Drag & drop uploads
- Automatic optimization
- CDN delivery (fast!)
- Cropping & hotspot selection

### ✍️ Rich Text Editor
- Bold, italics, headings
- Lists (bulleted & numbered)
- Inline images
- Blockquotes

### 📱 Live Editing
- Edit content from anywhere
- See changes instantly
- Mobile-friendly Studio

### 👥 Collaboration Ready
- Invite team members
- Role-based permissions
- Revision history
- Draft mode

### 🆓 Free Forever
- 3 users
- Unlimited API requests
- 10GB bandwidth/month
- 5GB asset storage

---

## Useful Links

- **Sanity Dashboard**: https://www.sanity.io/manage
- **Studio (Local)**: http://localhost:3008/studio
- **Studio (Production)**: https://yourdomain.com/studio
- **Sanity Docs**: https://www.sanity.io/docs
- **Support**: https://www.sanity.io/help

---

## Quick Reference Commands

```bash
# Start dev server
npm run dev

# Migrate blog posts
npx ts-node scripts/migrate-to-sanity.ts

# Access Studio locally
open http://localhost:3008/studio

# Deploy (optional - Studio in the cloud)
npx sanity deploy

# Manage project
open https://www.sanity.io/manage
```

---

## Need Help?

If you get stuck:
1. Check this guide again
2. Read the `docs/SANITY-CMS-SETUP.md` file
3. Check Sanity docs: https://www.sanity.io/docs
4. Ask in Sanity Slack: https://slack.sanity.io

---

## 🎊 Congratulations!

You now have a professional CMS powering your portfolio website!

**What's amazing:**
- ✅ Edit content without touching code
- ✅ Upload & manage images easily
- ✅ See changes instantly
- ✅ Collaborate with others
- ✅ Free forever for personal use

**Start editing your content at: http://localhost:3008/studio**
