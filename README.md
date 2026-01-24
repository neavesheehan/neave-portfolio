# Neave Sheehan - Portfolio Website

Your professional portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 📁 Project Structure

```
neave-portfolio/
├── app/                          # Next.js app directory
│   ├── page.tsx                  # Homepage (DO NOT EDIT unless customizing)
│   ├── layout.tsx                # Site layout with navigation
│   ├── globals.css               # Global styles
│   └── blog/                     # Blog pages
│       ├── page.tsx              # Blog list page
│       └── [slug]/page.tsx       # Individual blog posts
├── components/                   # React components
│   ├── Navigation.tsx            # Top navigation bar
│   ├── Footer.tsx                # Footer with links
│   ├── Hero.tsx                  # Homepage hero section
│   ├── Experience.tsx            # Experience section
│   ├── Portfolio.tsx             # Portfolio with modals
│   ├── Testimonials.tsx          # Testimonials section
│   └── Contact.tsx               # Contact section
├── content/                      # Your content (EDIT THESE!)
│   └── blog/                     # Blog posts folder
│       └── *.md                  # Your blog posts go here
├── lib/                          # Utility functions
│   └── blog.ts                   # Blog reading functions
├── public/                       # Static files
│   ├── images/                   # Add your images here
│   │   ├── neave.jpg            # Your photo
│   │   ├── hvac.png             # Dashboard screenshots
│   │   ├── legionella.png
│   │   └── smoke.png
│   ├── videos/                   # Add your videos here
│   │   ├── hvac.mp4             # Dashboard recordings
│   │   ├── legionella.mp4
│   │   └── smoke.mp4
│   └── Neave-Sheehan-CV.pdf     # Your CV
└── package.json                  # Dependencies (DO NOT EDIT)
```

---

## 🚀 Complete Setup Guide for Mac

### Part 1: One-Time System Setup

These steps only need to be done once on your Mac.

#### Step 1: Open Terminal

1. Press `Cmd + Space` to open Spotlight
2. Type "Terminal"
3. Press Enter

Keep Terminal open for all the following steps.

#### Step 2: Install Homebrew

Homebrew is a package manager for Mac. Paste this command into Terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- Press Enter
- Enter your Mac password when prompted (you won't see it being typed - this is normal)
- Wait for it to finish (may take 5-10 minutes)
- **IMPORTANT:** At the end, it will show you 2 commands to run - copy and run those!

#### Step 3: Install Node.js

Node.js lets you run JavaScript on your computer.

```bash
brew install node
```

Verify it worked:

```bash
node --version
npm --version
```

You should see version numbers (e.g., v20.11.0 and 10.2.4).

#### Step 4: Install Git

Git manages your code versions.

```bash
brew install git
```

Configure Git with your details:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

#### Step 5: Install VS Code

1. Go to https://code.visualstudio.com/
2. Click "Download for macOS"
3. Open the downloaded file
4. Drag VS Code to your Applications folder
5. Open VS Code from Applications

---

### Part 2: Getting Your Website Running

#### Step 1: Get the Code

In Terminal, navigate to where you want to keep your website (e.g., your Documents folder):

```bash
cd ~/Documents
```

If the project is in a zip file, extract it. Then navigate into the folder:

```bash
cd neave-portfolio
```

#### Step 2: Install Dependencies

This downloads all the code libraries your website needs:

```bash
npm install
```

Wait for it to finish (may take 2-3 minutes).

#### Step 3: Add Your Content Files

Before running the site, add your files:

1. **Images** → Go to `public/images/` and add:
   - neave.jpg (your photo)
   - hvac.png (dashboard screenshot)
   - legionella.png (dashboard screenshot)
   - smoke.png (dashboard screenshot)

2. **Videos** → Go to `public/videos/` and add:
   - hvac.mp4 (dashboard recording)
   - legionella.mp4 (dashboard recording)
   - smoke.mp4 (dashboard recording)

3. **CV** → Go to `public/` and add:
   - Neave-Sheehan-CV.pdf

See the README files in each folder for detailed instructions.

#### Step 4: Run Your Website Locally

```bash
npm run dev
```

You should see:

```
✓ Ready in 2.5s
○ Local: http://localhost:3000
```

Open your browser and go to: **http://localhost:3000**

**Your website is now running!** 🎉

#### Step 5: Edit Your Content

1. Open VS Code
2. File → Open Folder → Select `neave-portfolio`
3. Edit these files with YOUR information:

**Update your email and LinkedIn:**
- `components/Hero.tsx` - Lines with "neave@example.com" and LinkedIn URL
- `components/Footer.tsx` - Lines with contact information
- `components/Contact.tsx` - Lines with contact information

**Update Navigation:**
- `components/Navigation.tsx` - Link URLs if needed

**Update Experience:**
- `components/Experience.tsx` - Your job details and achievements

**Update Portfolio:**
- `components/Portfolio.tsx` - Dashboard descriptions and impact points

**Update Testimonials:**
- `components/Testimonials.tsx` - Testimonial text and names

#### Step 6: See Your Changes

After editing files:
1. Save the file (Cmd + S)
2. Go to your browser
3. The page will automatically refresh!

---

## ✍️ How to Add Blog Posts (Weekly Updates)

### Creating a New Blog Post

1. Go to the `content/blog/` folder
2. Create a new file: `YYYY-MM-DD-post-title.md`
   - Example: `2025-01-24-my-first-post.md`

3. Add this at the top of the file:

```markdown
---
title: "Your Blog Post Title"
date: "2025-01-24"
excerpt: "A short summary that appears on the blog list page (1-2 sentences)."
---

Your blog post content goes here...

## You can use headings

And write in normal markdown format.

- Bullet points work
- So do numbered lists

**Bold text** and *italic text* work too.

[Links work like this](https://example.com)
```

4. Save the file
5. Your blog post will automatically appear on your website!

### Blog Post URL

Your post will be available at:
```
https://yourwebsite.com/blog/YYYY-MM-DD-post-title
```

The filename (without `.md`) becomes the URL.

---

## 🌐 Deploy to the Internet (Make it Live)

### Step 1: Create a GitHub Account

1. Go to https://github.com
2. Click "Sign up"
3. Follow the steps to create an account

### Step 2: Create a New Repository

1. Click the "+" icon (top right)
2. Click "New repository"
3. Name it: `neave-portfolio`
4. Keep it **Public**
5. Do NOT check any boxes
6. Click "Create repository"

### Step 3: Push Your Code to GitHub

In Terminal, in your project folder:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/neave-portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

### Step 4: Deploy to Vercel

1. Go to https://vercel.com
2. Click "Sign up" and choose "Continue with GitHub"
3. Click "Add New Project"
4. Find `neave-portfolio` and click "Import"
5. Click "Deploy"
6. Wait 2-3 minutes

**Your website is now live!** 🚀

Vercel will give you a URL like: `neave-portfolio.vercel.app`

### Step 5: Connect a Custom Domain (Optional)

If you own a domain (e.g., neavesheehan.com):

1. In Vercel, go to your project
2. Click "Settings" → "Domains"
3. Add your domain
4. Follow Vercel's instructions to update your domain's DNS settings

---

## 🔄 Making Updates After Going Live

### Updating Blog Posts

1. Add new `.md` file to `content/blog/`
2. In Terminal:
```bash
git add .
git commit -m "Add new blog post"
git push
```

Vercel will automatically deploy your changes in 2-3 minutes!

### Updating Other Content

1. Edit the file in VS Code
2. Save it
3. In Terminal:
```bash
git add .
git commit -m "Update contact information"
git push
```

Vercel deploys automatically!

---

## 📋 What You Need to Do Weekly (Blog Updates)

1. Write your blog post in any text editor
2. Save it as `YYYY-MM-DD-title.md` in `content/blog/`
3. Open Terminal
4. Navigate to your project: `cd ~/Documents/neave-portfolio`
5. Run these commands:

```bash
git add .
git commit -m "Add blog post: [your title]"
git push
```

Done! Your post is live in 2-3 minutes.

---

## 🆘 Common Problems & Solutions

### "npm: command not found"

You need to install Node.js. Go back to Part 1, Step 3.

### "Port 3000 is already in use"

Another app is using port 3000. Either:
- Close the other app
- Or run: `npm run dev -- -p 3001` (uses port 3001 instead)

### Images not showing

1. Check the filename matches exactly (case-sensitive)
2. Make sure the image is in the correct folder: `public/images/`
3. Refresh your browser (Cmd + Shift + R for hard refresh)

### Changes not showing

1. Make sure you saved the file (Cmd + S in VS Code)
2. Check Terminal - the dev server should show it's rebuilding
3. Hard refresh your browser (Cmd + Shift + R)

### Git push asks for password

GitHub no longer accepts passwords. You need to:
1. Create a Personal Access Token at https://github.com/settings/tokens
2. Use that token instead of your password

---

## 📞 File Organization Summary

### ✅ FILES YOU WILL EDIT REGULARLY

- `content/blog/*.md` - Your blog posts (EDIT THIS EVERY WEEK)

### ✅ FILES YOU WILL EDIT ONCE

- `components/Hero.tsx` - Your name, email, LinkedIn
- `components/Experience.tsx` - Your job details
- `components/Portfolio.tsx` - Dashboard descriptions
- `components/Testimonials.tsx` - Testimonial text
- `components/Footer.tsx` - Contact information
- `components/Contact.tsx` - Contact section

### ❌ FILES YOU SHOULD NOT EDIT

- `package.json`
- `tsconfig.json`
- `tailwind.config.ts`
- `next.config.mjs`
- `postcss.config.js`
- `lib/blog.ts`
- `app/layout.tsx`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`

### 📂 FOLDERS WHERE YOU ADD FILES

- `content/blog/` - Add new blog posts here
- `public/images/` - Add images here
- `public/videos/` - Add videos here
- `public/` - Add your CV here

---

## 🎨 Brand Colors Used

The website uses a specific color scheme:

- **Pink**: #E91E63 (your brand color)
- **Navy**: #1A2332 (text and backgrounds)
- **Cream**: #FAF9F6 (light background)
- **Gold**: #D4AF37 (accents)

These match the "Elle Woods takes Data Analyst" aesthetic - corporate, polished, but distinctly you.

---

## 💪 You Can Do This!

This guide covers everything you need. Take it one step at a time:

1. ✅ Set up your Mac (once)
2. ✅ Get the website running locally
3. ✅ Add your content
4. ✅ Deploy to the internet
5. ✅ Update your blog weekly

If you get stuck, check the Common Problems section above.

**Remember:** You don't need to understand all the code. You just need to know which files to edit and how to push changes. That's it!

---

Built with ❤️ for Neave Sheehan
