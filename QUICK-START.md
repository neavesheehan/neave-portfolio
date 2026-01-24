# 🚀 QUICK START GUIDE

**For complete beginners - follow these steps exactly**

---

## 📝 Before You Start

✅ You need a MacBook  
✅ You need about 1 hour  
✅ You need your website content ready (photos, CV, dashboard screenshots/videos)

---

## STEP 1️⃣: System Setup (Do Once)

### 1. Open Terminal

Press `Cmd + Space`, type `Terminal`, press Enter

### 2. Copy and paste these commands ONE AT A TIME:

**Install Homebrew:**
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
*Wait for it to finish. At the end, it will show 2 more commands - copy and run those too!*

**Install Node.js:**
```bash
brew install node
```

**Install Git:**
```bash
brew install git
```

**Set up Git with your info:**
```bash
git config --global user.name "Neave Sheehan"
git config --global user.email "your.email@example.com"
```
*Replace with your actual email!*

### 3. Download VS Code

1. Go to https://code.visualstudio.com/
2. Download for Mac
3. Drag to Applications folder
4. Open it

✅ **System setup complete!**

---

## STEP 2️⃣: Get Your Website Running

### 1. Navigate to your project folder

In Terminal:
```bash
cd ~/Documents/neave-portfolio
```

### 2. Install everything the website needs

```bash
npm install
```
*Wait 2-3 minutes*

### 3. Add your files

**Open Finder and navigate to your project folder**

Add these files:
- `public/images/neave.jpg` - your photo
- `public/images/hvac.png` - dashboard screenshot
- `public/images/legionella.png` - dashboard screenshot  
- `public/images/smoke.png` - dashboard screenshot
- `public/videos/hvac.mp4` - dashboard video
- `public/videos/legionella.mp4` - dashboard video
- `public/videos/smoke.mp4` - dashboard video
- `public/Neave-Sheehan-CV.pdf` - your CV

### 4. Start your website

In Terminal:
```bash
npm run dev
```

### 5. Open in browser

Go to: **http://localhost:3000**

✅ **Your website is running!** 🎉

---

## STEP 3️⃣: Customize Your Content

### 1. Open VS Code

- File → Open Folder
- Select `neave-portfolio`

### 2. Update these files with YOUR information:

**Your contact info:**
- `components/Hero.tsx` - Find "neave@example.com" and replace with your email
- `components/Hero.tsx` - Find LinkedIn URL and replace with yours
- `components/Footer.tsx` - Same thing
- `components/Contact.tsx` - Same thing

**Your work details:**
- `components/Experience.tsx` - Update your job achievements
- `components/Portfolio.tsx` - Update dashboard descriptions
- `components/Testimonials.tsx` - Update testimonial text

### 3. After each edit:

- Press `Cmd + S` to save
- Browser automatically refreshes!

✅ **Content updated!**

---

## STEP 4️⃣: Put It On The Internet

### 1. Create GitHub account

Go to https://github.com and sign up

### 2. Create a repository

1. Click "+" (top right) → "New repository"
2. Name: `neave-portfolio`
3. Public
4. Create

### 3. Upload your code

In Terminal (in your project folder):

```bash
git init
git add .
git commit -m "First version"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/neave-portfolio.git
git push -u origin main
```

*Replace YOUR-USERNAME with your GitHub username*

### 4. Deploy with Vercel

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "Add New Project"
4. Import `neave-portfolio`
5. Click "Deploy"
6. Wait 2 minutes

✅ **Your website is LIVE!** 🌐

Vercel gives you a URL like: `neave-portfolio.vercel.app`

---

## STEP 5️⃣: Weekly Blog Updates (Easy!)

### 1. Create new file

In `content/blog/` create: `2025-01-24-my-post.md`

### 2. Add this template:

```markdown
---
title: "Your Post Title"
date: "2025-01-24"
excerpt: "Short summary here"
---

Your blog post content here...

## Headings work

Write normally. Use markdown formatting.
```

### 3. Push to GitHub

In Terminal:
```bash
git add .
git commit -m "New blog post"
git push
```

### 4. Wait 2 minutes

Vercel automatically deploys! Your post is live!

✅ **Blog updated!**

---

## 🆘 HELP!

### Terminal says "command not found"
You skipped a step in Step 1. Go back and install Node.js.

### Images not showing
- Check filename spelling (exactly: neave.jpg, hvac.png, etc.)
- Check they're in the right folder: `public/images/`
- Hard refresh: `Cmd + Shift + R`

### Website not updating
- Did you save the file? (`Cmd + S`)
- Did you push to GitHub? (see Step 5)
- Wait 2-3 minutes for Vercel

### Need to stop the dev server
Press `Ctrl + C` in Terminal

### Need to start again
```bash
npm run dev
```

---

## 📞 Quick Reference

**Run website locally:**
```bash
cd ~/Documents/neave-portfolio
npm run dev
```

**Add blog post and deploy:**
```bash
git add .
git commit -m "New post"
git push
```

**That's it!** These are the only commands you'll use regularly.

---

## 🎯 Summary

✅ Once: Set up Mac, run website locally, deploy  
✅ Weekly: Write blog post, push to GitHub  
✅ Occasionally: Update content, edit files

**You've got this!** 💪

The hard part is done. Now you just write blog posts and push them. Easy!
