# 🔧 TROUBLESHOOTING GUIDE

Common problems and how to fix them - step by step.

---

## Problem: "npm: command not found"

**What this means:** Node.js isn't installed

**Fix:**
```bash
brew install node
```

Then check it worked:
```bash
node --version
```

---

## Problem: "brew: command not found"

**What this means:** Homebrew isn't installed

**Fix:**
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**After it finishes:** It will show you 2 more commands to run - copy and run those!

---

## Problem: Port 3000 already in use

**What this means:** Another program is using that port

**Fix Option 1 - Use a different port:**
```bash
npm run dev -- -p 3001
```

Then go to: http://localhost:3001

**Fix Option 2 - Find and stop the other process:**
```bash
lsof -ti:3000 | xargs kill -9
npm run dev
```

---

## Problem: Images not showing up

**Checklist:**

1. ✅ Is the filename exactly right? (case-sensitive)
   - Should be: `neave.jpg` not `Neave.jpg` or `neave.JPG`

2. ✅ Is the file in the right folder?
   - Should be: `public/images/neave.jpg`

3. ✅ Is the file actually there?
   - Open Finder
   - Navigate to your project folder
   - Look in `public/images/`
   - You should see the file

4. ✅ Try a hard refresh
   - Press `Cmd + Shift + R` in your browser

5. ✅ Check the browser console
   - Press `Cmd + Option + I`
   - Look for error messages in red

---

## Problem: Changes not appearing

**Checklist:**

1. ✅ Did you save the file?
   - Press `Cmd + S` in VS Code
   - Look for the white dot next to the filename - if it's there, the file isn't saved

2. ✅ Is the dev server running?
   - Check Terminal
   - Should say "Ready in X.Xs"
   - If not, run: `npm run dev`

3. ✅ Try hard refresh
   - `Cmd + Shift + R`

4. ✅ Did you edit the right file?
   - Check the filename in VS Code
   - Make sure you're in the right folder

---

## Problem: Git asks for password repeatedly

**What this means:** GitHub no longer accepts passwords

**Fix - Create a Personal Access Token:**

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name: "Portfolio Website"
4. Check: `repo` (all sub-boxes)
5. Click "Generate token"
6. **COPY THE TOKEN** (you won't see it again!)
7. Use this token instead of your password when pushing

**Better fix - Set up SSH:**

```bash
ssh-keygen -t ed25519 -C "your.email@example.com"
```

Press Enter 3 times (don't set a password).

Then:
```bash
cat ~/.ssh/id_ed25519.pub
```

Copy the entire output.

1. Go to: https://github.com/settings/keys
2. Click "New SSH key"
3. Paste the key
4. Save

Now change your remote URL:
```bash
git remote set-url origin git@github.com:YOUR-USERNAME/neave-portfolio.git
```

---

## Problem: Blog post not showing up

**Checklist:**

1. ✅ Is the file in the right folder?
   - Should be: `content/blog/2025-01-24-title.md`

2. ✅ Does it have the front matter?
   ```markdown
   ---
   title: "Post Title"
   date: "2025-01-24"
   excerpt: "Summary"
   ---
   ```

3. ✅ Is the date in the future?
   - Posts with future dates might not show
   - Use today's date or earlier

4. ✅ Did you push to GitHub?
   ```bash
   git add .
   git commit -m "Add blog post"
   git push
   ```

5. ✅ Check locally first
   - Run `npm run dev`
   - Go to http://localhost:3000/blog
   - If it shows locally but not on Vercel, wait 2-3 minutes

---

## Problem: Vercel deployment failed

**Check the deployment logs:**

1. Go to vercel.com
2. Click on your project
3. Click on the failed deployment
4. Read the error message

**Common issues:**

**Build error:** Usually a typo in your code
- Check the error message
- Fix the file it mentions
- Push again

**Out of memory:** Shouldn't happen with this project
- Contact Vercel support

**Git error:** 
```bash
git add .
git commit -m "Fix deployment"
git push
```

---

## Problem: Custom domain not working

**Wait:** DNS changes take 24-48 hours

**Check your DNS settings:**

1. Go to your domain registrar
2. Find DNS settings
3. Add these records (Vercel will tell you the exact values):
   - Type: A, Name: @, Value: [Vercel IP]
   - Type: CNAME, Name: www, Value: [Your Vercel URL]

4. Save and wait

**Still not working?**
- Check Vercel dashboard for status
- Make sure SSL certificate has been issued
- Try accessing via https:// not http://

---

## Problem: VS Code not finding files

**Fix:**

1. In VS Code: File → Open Folder
2. Select `neave-portfolio` (the root folder, not a subfolder)
3. You should see all the folders in the sidebar

---

## Problem: Terminal says "Permission denied"

**Fix:**

Add `sudo` before the command:
```bash
sudo npm install
```

Enter your Mac password when asked.

**Better fix:** Don't use sudo with npm. If you need it, your npm is installed wrong.

---

## Problem: Website looks broken (missing styles)

**Checklist:**

1. ✅ Did npm install finish?
   ```bash
   npm install
   ```

2. ✅ Is the dev server running?
   ```bash
   npm run dev
   ```

3. ✅ Check browser console
   - Press `Cmd + Option + I`
   - Look for errors

4. ✅ Try clearing cache
   - Close all browser tabs
   - Reopen
   - Hard refresh: `Cmd + Shift + R`

---

## Problem: Can't find project folder

**Find it:**

In Terminal:
```bash
cd ~
find . -name "neave-portfolio" -type d 2>/dev/null
```

This will show you where it is.

**Move it to Documents:**
```bash
mv /path/to/neave-portfolio ~/Documents/
```

---

## Problem: Video not playing in modal

**Checklist:**

1. ✅ Is the file actually an MP4?
   - Right click → Get Info
   - Check "Kind" - should say "MPEG-4"

2. ✅ Is the filename exactly right?
   - Should be: `hvac.mp4` (lowercase, .mp4)

3. ✅ Is it in the right folder?
   - Should be: `public/videos/hvac.mp4`

4. ✅ Is the file too large?
   - Keep under 10MB
   - Use QuickTime or HandBrake to compress

---

## Problem: Everything was working, now it's not

**Nuclear option - Start fresh:**

1. Stop the dev server (`Ctrl + C`)

2. Delete node_modules:
   ```bash
   rm -rf node_modules
   ```

3. Delete package-lock.json:
   ```bash
   rm package-lock.json
   ```

4. Reinstall:
   ```bash
   npm install
   ```

5. Start again:
   ```bash
   npm run dev
   ```

---

## Problem: Mac is asking about network connections

**What this means:** The dev server needs permission

**Fix:**
Click "Allow" - it's safe, it's just the dev server running locally

---

## Problem: Getting TypeScript errors

**Quick fix - Ignore them for now:**

The website should still run. TypeScript errors are warnings, not fatal errors.

**Proper fix:**

1. Make sure you're editing the right file
2. Check for typos
3. Make sure all `import` statements are correct
4. If stuck, ask for help or restore from backup

---

## Still Stuck?

1. **Check the error message carefully** - it usually tells you exactly what's wrong

2. **Google the error** - add "Next.js" to your search

3. **Check GitHub Issues** - someone might have had the same problem

4. **Ask for help:**
   - Copy the exact error message
   - Describe what you were trying to do
   - Say what you've already tried

---

## Useful Commands Reference

**Start dev server:**
```bash
npm run dev
```

**Stop dev server:**
Press `Ctrl + C`

**Install dependencies:**
```bash
npm install
```

**Check Node version:**
```bash
node --version
```

**Check Git status:**
```bash
git status
```

**See what changed:**
```bash
git diff
```

**Undo all changes:**
```bash
git reset --hard
```
⚠️ Warning: This deletes all your changes!

---

**Remember:** Most problems are simple:
- File in wrong folder
- Typo in filename
- Forgot to save
- Forgot to push to GitHub

Check the basics first! 🔍
