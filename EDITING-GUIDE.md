# 📝 WHAT TO EDIT WHERE

A beginner's guide to customizing your website.

---

## 🎯 Your Email and Links

**File:** `components/Hero.tsx`

**Find this line (around line 32):**
```typescript
href="mailto:neave@example.com"
```

**Change to:**
```typescript
href="mailto:YOUR-EMAIL@example.com"
```

**Find this line (around line 57):**
```typescript
href="https://www.linkedin.com/in/neave-sheehan"
```

**Change to:**
```typescript
href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME"
```

---

**File:** `components/Footer.tsx`

**Find and update** (around lines 38-47):
- Email link
- LinkedIn link

**File:** `components/Contact.tsx`

**Find and update** (around lines 12-20):
- Email link
- LinkedIn link

---

## 💼 Your Work Experience

**File:** `components/Experience.tsx`

**Find the experiences array (around line 4):**

```typescript
const experiences = [
  {
    title: 'AI Engineer Apprenticeship',
    company: 'Corndel',
    period: '2024 - Present',
    achievements: [
      'Your achievement 1',
      'Your achievement 2',
      // Add more as needed
    ]
  }
];
```

**What to change:**
- `title` - Your job title
- `company` - Your company name
- `period` - When you worked there
- `achievements` - List your accomplishments (use these exact formatting marks: `'Text here',`)

**Adding more achievements:**

Just add more lines in the same format:
```typescript
achievements: [
  'First achievement',
  'Second achievement',
  'Third achievement',
  'Fourth achievement'
]
```

---

## 📊 Portfolio Items (Your Dashboards)

**File:** `components/Portfolio.tsx`

**Find the portfolioItems array (around line 12):**

```typescript
const portfolioItems: PortfolioItem[] = [
  {
    id: 'hvac',
    title: 'HVAC Compliance Report',
    description: 'Your description here...',
    impact: [
      'Impact point 1',
      'Impact point 2',
    ],
    image: '/images/hvac.png',
    video: '/videos/hvac.mp4'
  },
  // More items...
];
```

**What to change:**

- `title` - Dashboard name
- `description` - What it does (1-2 sentences)
- `impact` - Bullet points of results (start each with a dash or checkmark)

**Do NOT change:**
- `id` - Keep it as is
- `image` - Only change if you rename your image files
- `video` - Only change if you rename your video files

---

## 💬 Testimonials

**File:** `components/Testimonials.tsx`

**Find the testimonials array (around line 3):**

```typescript
const testimonials = [
  {
    quote: "The actual testimonial quote here",
    author: "Name of person",
    role: "Their job title"
  },
  {
    quote: "Another testimonial",
    author: "Another person",
    role: "Their role"
  }
];
```

**Adding more testimonials:**

Copy the entire block from `{` to `}` and paste it, separated by commas:

```typescript
const testimonials = [
  {
    quote: "First testimonial",
    author: "Person 1",
    role: "Role 1"
  },
  {
    quote: "Second testimonial",
    author: "Person 2",
    role: "Role 2"
  },
  {
    quote: "Third testimonial",
    author: "Person 3",
    role: "Role 3"
  }
];
```

---

## 🎨 Colors and Styling

**File:** `tailwind.config.ts`

**Find the colors section (around line 12):**

```typescript
colors: {
  brand: {
    pink: '#E91E63',
    navy: '#1A2332',
    cream: '#FAF9F6',
    gold: '#D4AF37',
  },
},
```

**To change your brand color:**

Replace the hex code (the #E91E63 part). Use a color picker to get hex codes:
- https://htmlcolorcodes.com/color-picker/
- https://colorpicker.me/

**Example - changing to purple:**
```typescript
pink: '#9C27B0',  // This is purple, but keep the name "pink"
```

Keep the names the same (`pink`, `navy`, etc.) - just change the hex codes.

---

## 📰 Blog Posts

**Where:** Create new files in `content/blog/`

**Filename format:**
```
YYYY-MM-DD-post-title.md
```

**Example:**
```
2025-01-24-my-first-dashboard.md
```

**File content template:**

```markdown
---
title: "Your Catchy Title Here"
date: "2025-01-24"
excerpt: "A one-sentence summary that appears on the blog list page."
---

Your blog post starts here. Write normally.

## You can use headings

Just write like you normally would. Some tips:

- Use `-` for bullet points
- Use `**text**` for **bold**
- Use `*text*` for *italic*
- Use `[link text](URL)` for links

### Subheadings work too

You can write as much as you want. The excerpt above is what shows on the blog list page.

The full post only shows when someone clicks to read it.
```

**Important:**
- The `---` markers MUST be there
- The date format MUST be "YYYY-MM-DD"
- The front matter (title, date, excerpt) MUST be at the very top
- Leave a blank line after the second `---` before starting your content

---

## 🔤 Fonts

**File:** `tailwind.config.ts`

**Find the fontFamily section (around line 10):**

```typescript
fontFamily: {
  display: ['Playfair Display', 'serif'],
  sans: ['Poppins', 'system-ui', 'sans-serif'],
},
```

**To change fonts:**

1. Find a Google Font you like: https://fonts.google.com/
2. Note the font name
3. Update the config:

```typescript
fontFamily: {
  display: ['Your Display Font', 'serif'],
  sans: ['Your Body Font', 'sans-serif'],
},
```

4. Update the import in `app/globals.css` (line 1):

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Display+Font:wght@400;500;600;700&family=Your+Body+Font:wght@300;400;500;600;700&display=swap');
```

Replace spaces with `+` in the URL.

---

## 📸 Updating Images

**Where to put them:** `public/images/`

**Filenames (MUST match exactly):**
- `neave.jpg` - Your headshot
- `hvac.png` - HVAC dashboard screenshot
- `legionella.png` - Legionella dashboard screenshot
- `smoke.png` - Smoke system dashboard screenshot

**Recommended sizes:**
- Headshot: 600x600 pixels (square)
- Dashboard screenshots: 1200x800 pixels (landscape)

**Format:**
- Photos: JPG
- Screenshots: PNG

**If you want to use different filenames:**

1. Rename your file to match (easier)
2. Or update the code in `components/Hero.tsx` and `components/Portfolio.tsx`

---

## 🎥 Updating Videos

**Where to put them:** `public/videos/`

**Filenames (MUST match exactly):**
- `hvac.mp4`
- `legionella.mp4`
- `smoke.mp4`

**Requirements:**
- Format: MP4
- Size: Under 10MB each (compress if needed)
- Duration: 30-60 seconds recommended

**To compress large videos:**

Use QuickTime:
1. Open video in QuickTime
2. File → Export As → 720p or 480p
3. Save as MP4

---

## 🎯 Skills List

**File:** `components/Experience.tsx`

**Find the skills array (around line 38):**

```typescript
{[
  'Power BI',
  'Python',
  'SQL',
  // etc.
].map((skill, idx) => (
```

**To add/remove skills:**

Just add or remove items from the list:

```typescript
{[
  'Power BI',
  'Python',
  'SQL',
  'Your New Skill',
  'Another Skill',
  'Excel'
].map((skill, idx) => (
```

Keep the commas between items!

---

## 📄 Your CV

**Where:** `public/Neave-Sheehan-CV.pdf`

**To update:**
1. Export your CV as PDF
2. Name it exactly: `Neave-Sheehan-CV.pdf`
3. Replace the file in `public/`

**If you want a different filename:**

Update these files:
- `components/Hero.tsx` (line ~40)
- `components/Footer.tsx` (line ~47)
- `components/Contact.tsx` (line ~41)

Change `/Neave-Sheehan-CV.pdf` to `/Your-Filename.pdf`

---

## ⚠️ Common Mistakes to Avoid

### 1. Missing commas

**Wrong:**
```typescript
achievements: [
  'First achievement'
  'Second achievement'
]
```

**Right:**
```typescript
achievements: [
  'First achievement',
  'Second achievement'
]
```

### 2. Missing quotes

**Wrong:**
```typescript
title: My Title
```

**Right:**
```typescript
title: 'My Title'
```

or

```typescript
title: "My Title"
```

### 3. Breaking the structure

Don't delete `{`, `}`, `[`, or `]` unless you know what you're doing!

### 4. Wrong file paths

File paths are case-sensitive:
- ✅ `/images/neave.jpg`
- ❌ `/Images/neave.jpg`
- ❌ `/images/Neave.jpg`

---

## 💡 Quick Tips

1. **Save often:** Press `Cmd + S` in VS Code

2. **Check your work:** After editing, save and refresh your browser

3. **One change at a time:** Make one change, test it, then make another

4. **Keep backups:** Before making big changes, copy the file first

5. **Use search:** In VS Code, press `Cmd + F` to find text

6. **Undo mistakes:** Press `Cmd + Z` to undo

---

## 🚨 If Something Breaks

1. **Don't panic!**

2. **Undo your last change:**
   - Press `Cmd + Z` in VS Code
   - Save the file
   - Refresh browser

3. **Check Terminal for errors:**
   - Red text = error
   - Read the message
   - It usually tells you what's wrong

4. **Common fixes:**
   - Missing comma
   - Missing quote
   - Typo in filename
   - Wrong file path

5. **Nuclear option:**
   - Close VS Code
   - In Terminal: `git reset --hard`
   - This undoes ALL changes since your last commit
   - ⚠️ Use with caution!

---

## ✅ Best Practices

1. **Test locally first**
   - Make changes
   - Run `npm run dev`
   - Check http://localhost:3000
   - If it looks good, push to GitHub

2. **Commit often**
   ```bash
   git add .
   git commit -m "Updated testimonials"
   git push
   ```

3. **Write good commit messages**
   - ✅ "Updated contact email"
   - ✅ "Added new blog post about dashboards"
   - ❌ "changes"
   - ❌ "update"

4. **Keep file names consistent**
   - Use lowercase
   - Use hyphens not spaces
   - Example: `my-blog-post.md` not `My Blog Post.md`

---

Need help? Check TROUBLESHOOTING.md!
