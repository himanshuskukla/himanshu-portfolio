# How to Edit Content and Text

## Easy Content Editing Guide

All content is stored in page files. Open them with any text editor (VS Code recommended).

### Main Content Files

| What to Edit | File Location | Starting Line |
|--------------|---------------|---------------|
| **Hero Section** (Name, tagline) | `app/page.tsx` | Line 441-457 |
| **Services** (3 services) | `app/page.tsx` | Line 305-324 |
| **Projects** (5 featured projects) | `app/page.tsx` | Line 326-384 |
| **About Me** (Bio text) | `app/page.tsx` | Line 715-732 |
| **Blog Posts** | `app/page.tsx` | Line 386-411 |
| **Services Details** | `app/services/page.tsx` | Line 9-100 |
| **Project Details** | `app/projects/page.tsx` | Line 9-133 |

---

## Quick Edit Examples

### 1. Change Your Name/Headline

**File:** `app/page.tsx` (Line ~442)

```typescript
<h1 className="text-6xl md:text-7xl font-display font-bold mb-8 leading-tight">
  <span className="text-primary">Your Name Here</span>  {/* Change this */}
  <br />
  <span className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
    Your Professional Title Here  {/* Change this */}
  </span>
</h1>
```

### 2. Edit Project Information

**File:** `app/page.tsx` (Line ~326)

```typescript
const projects = [
  {
    title: "Project Name",  // Change this
    subtitle: "Short tagline",  // Change this
    description: "Full description here...",  // Change this
    category: "Category Name",  // Change this
    unsplashId: "image-id",
    metrics: [
      { value: "200+", label: "Metric Name" },  // Change these
      { value: "31", label: "Another Metric" }
    ]
  },
  // ... more projects
]
```

### 3. Update Services

**File:** `app/services/page.tsx` (Line ~9)

```typescript
const services = [
  {
    title: "Service Name",  // Change this
    tagline: "Short description",  // Change this
    description: "Main description...",  // Change this
    benefits: [
      "Benefit 1",  // Change these
      "Benefit 2",
      // ...
    ],
    stats: [
      { value: "100+", label: "Stat Name" }  // Change these
    ]
  }
]
```

### 4. Change About Section

**File:** `app/page.tsx` (Line ~715)

```typescript
<p>
  I'm a strategic partner with <strong>14+ years</strong>... {/* Edit your bio here */}
</p>
```

### 5. Update Contact Email

**File:** `app/page.tsx` (Line ~910)

```typescript
{
  icon: <Mail className="w-6 h-6" />,
  title: 'Email',
  value: 'your-email@example.com',  // Change this
  href: 'mailto:your-email@example.com'  // Change this
}
```

---

## Common Edits by Section

### Homepage (`app/page.tsx`)

#### Stats Section (Line ~494)
```typescript
<AnimatedStat value={14} label="Years Experience" suffix="+" />
<AnimatedStat value={100} label="Project Value" suffix="M+" />
```

#### Industries (Line ~742)
```typescript
{['Climate-Tech', 'Fintech', 'SaaS', 'Banking'].map((industry, i) => (
  // Add or remove industries here
))}
```

### Services Page (`app/services/page.tsx`)

#### Engagement Models (Line ~304)
```typescript
<h3>Project-Based Consulting</h3>  {/* Change title */}
<p>Description here...</p>  {/* Change description */}
```

### Projects Page (`app/projects/page.tsx`)

#### Full Project Details (Line ~16)
```typescript
fullDescription: "Detailed description...",  // Change this
challenge: "What was the problem?",  // Change this
solution: "How you solved it?",  // Change this
impact: [
  "Impact point 1",  // Change these
  "Impact point 2"
]
```

---

## Pro Tips

### Using VS Code (Recommended)

1. **Install VS Code**: [Download here](https://code.visualstudio.com/)
2. **Open Project**: File → Open Folder → Select `demo-8-final`
3. **Search Text**: Cmd/Ctrl + F to find any text
4. **Find in Files**: Cmd/Ctrl + Shift + F to search across all files
5. **Save**: Cmd/Ctrl + S
6. **See Changes**: Browser will auto-reload

### Search Tips

To find any content:
1. Press `Cmd + Shift + F` (Mac) or `Ctrl + Shift + F` (Windows)
2. Type the text you want to change
3. VS Code shows all occurrences
4. Edit directly

### Testing Changes

1. Save the file (Cmd/Ctrl + S)
2. Check your browser - it auto-refreshes
3. If no change, refresh manually (Cmd/Ctrl + R)

---

## Content Structure Guide

### Text Lengths (Recommended)

- **Headlines**: 3-8 words
- **Taglines**: 5-10 words
- **Short descriptions**: 15-25 words
- **Full descriptions**: 30-60 words
- **Bio paragraphs**: 40-80 words

### Formatting

- **Bold**: Wrap in `<strong>text</strong>`
- **Line break**: Use `<br />` or start new `<p>`
- **Links**: Use `<a href="url">text</a>` or `<Link href="/page">text</Link>`

---

## Need Help?

1. **Find your text**: Use search (Cmd+Shift+F)
2. **Make the change**: Edit the text between quotes `"like this"`
3. **Save**: Cmd+S
4. **Check browser**: Should auto-reload

**Remember**: Text is usually between `"quotes"` or inside tags like `<p>text here</p>`
