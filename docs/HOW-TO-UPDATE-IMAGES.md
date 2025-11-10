# How to Update Images and Photos

## Quick Guide to Update Images in Your Website

### Option 1: Using Unsplash URLs (Current Method - FREE & EASY)

Your project images currently use Unsplash. To change them:

**File:** `app/page.tsx` and `app/projects/page.tsx`

1. Go to [Unsplash.com](https://unsplash.com)
2. Search for an image you like
3. Click on the image
4. Copy the photo ID from the URL (e.g., `1451187580459-43d4b3e77425`)
5. Replace the `unsplashId` in the code:

```typescript
{
  title: "Digital Twin Consortium",
  unsplashId: "YOUR-NEW-IMAGE-ID-HERE",  // Change this
  // ... rest of the code
}
```

### Option 2: Using Your Own Images (RECOMMENDED)

#### Step 1: Create a Public Images Folder

```bash
mkdir -p public/images/projects
mkdir -p public/images/profile
```

#### Step 2: Add Your Images

1. Save your images in the `public/images` folder
2. Recommended naming:
   - `public/images/projects/digital-twin-consortium.jpg`
   - `public/images/projects/dcarbon.jpg`
   - `public/images/profile/himanshu-photo.jpg`

#### Step 3: Update the Code

**For Project Images** (in `app/page.tsx` and `app/projects/page.tsx`):

Change from:
```typescript
src={`https://images.unsplash.com/photo-${project.unsplashId}?w=800&h=600&fit=crop`}
```

To:
```typescript
src={`/images/projects/${project.imageFile}`}
```

And update your project data:
```typescript
{
  title: "Digital Twin Consortium",
  imageFile: "digital-twin-consortium.jpg",  // Your local image
  // ... rest
}
```

**For Profile Photo** (in `app/page.tsx` around line 667):

Replace the placeholder section with:
```typescript
<img
  src="/images/profile/himanshu-photo.jpg"
  alt="Himanshu Shukla"
  className="w-full h-full object-cover rounded-3xl"
/>
```

### Image Best Practices

- **Format:** Use JPG for photos, PNG for logos/graphics
- **Size:**
  - Project images: 1200x800px
  - Profile photo: 800x800px (square)
- **File size:** Keep under 500KB for fast loading
- **Tools to optimize:**
  - [TinyPNG.com](https://tinypng.com) - Free compression
  - [Squoosh.app](https://squoosh.app) - Google's image optimizer

### Quick Reference: Where Images Are Used

| Location | File | Line (approx) | Image Type |
|----------|------|---------------|------------|
| Homepage Projects | `app/page.tsx` | 157-162 | Project images |
| Projects Page | `app/projects/page.tsx` | 168-171 | Project images |
| About Section | `app/page.tsx` | 667-674 | Profile photo |

### Need Help?

1. Save your image in `public/images/`
2. Note the filename
3. Update the corresponding code with the path `/images/your-file.jpg`
4. Refresh your browser to see changes
