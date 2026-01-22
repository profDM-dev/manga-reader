# YoruManga - Quick Start Guide

## ⚡ Get Started in 3 Steps

### Step 1: Open the Project
```bash
cd Manga_reader
```

### Step 2: Run a Local Server (Recommended)

**Option A - Python 3:**
```bash
python -m http.server 8000
```

**Option B - Node.js:**
```bash
npx http-server
```

**Option C - Direct File:**
Just double-click `index.html` (may have CORS issues with some browsers)

### Step 3: Open in Browser
Navigate to:
```
http://localhost:8000
```

## 🎮 First-Time User Flow

1. **Browse the home page** - See popular manga, no login required
2. **Click any manga** - View details and chapters
3. **Try to read** - You'll be prompted to login
4. **Sign up** - Create an account (stored locally)
5. **Read manga** - All chapters unlocked!
6. **Bookmark favorites** - Yellow star button on details page
7. **Check library** - View your bookmarks and reading history

## 🔑 Login Instructions

### Create Account
- Click "Sign Up" in header or go to login page
- Username: min 3 characters
- Password: min 6 characters
- Click "Create Account"
- Auto-logged in!

### Example Test Account (Create Manually)
```
Username: testuser
Password: test123
```

## 🎨 Features to Try

### Dark Mode
- Click moon/sun icon in header
- Preference saved automatically

### Search
- Type in search bar on home page
- Results update as you type (500ms debounce)

### Filters
- Status: ongoing vs completed
- Sort: popularity, latest, newest, rating

### Infinite Scroll
- Scroll down on home page
- More manga auto-loads

### Reading
1. Click manga → Click "Read First Chapter"
2. Scroll vertically through pages
3. Use bottom controls for next/previous chapter
4. Press 'F' to toggle controls
5. Press 'Esc' to exit reader

### Keyboard Shortcuts (Reader)
- `←` - Previous chapter
- `→` - Next chapter
- `F` - Toggle controls
- `Esc` - Back to manga details

## 📱 Mobile Testing

Works great on mobile! Try:
1. Open on your phone browser
2. Responsive design adapts automatically
3. Touch gestures work
4. Vertical scrolling optimized

## 🔧 Customization Quick Tips

### Change Site Name
Edit in all HTML files:
```html
<span class="...">YoruManga</span>
```

### Change Primary Color
In each HTML file's Tailwind config:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#dc2626', // Change this!
            }
        }
    }
}
```

### Change Language (from English)
In `js/api.js`:
```javascript
// Find this line:
'translatedLanguage[]': 'en',

// Change to:
'translatedLanguage[]': 'ja',  // Japanese
'translatedLanguage[]': 'es',  // Spanish
// etc.
```

## 🐛 Troubleshooting

### Issue: Images not loading
- **Solution**: Use a local server instead of file://
- MangaDex CDN requires proper HTTP headers

### Issue: Can't login
- **Solution**: Check browser console for errors
- Try clearing localStorage: `localStorage.clear()`

### Issue: API errors
- **Solution**: Check internet connection
- MangaDex may have rate limits (wait a bit)
- Check https://mangadex.org status

### Issue: Dark mode not working
- **Solution**: Check localStorage is enabled
- Try manual toggle in browser console:
  ```javascript
  document.documentElement.classList.toggle('dark')
  ```

## 📊 Project Files Overview

```
Essential Files:
├── index.html          ← Start here!
├── login.html          ← Create account
├── manga.html          ← Manga details
├── reader.html         ← Read chapters
├── library.html        ← Your bookmarks
└── js/
    ├── api.js          ← MangaDex integration
    ├── auth.js         ← Login system
    ├── ui.js           ← UI helpers
    ├── home.js         ← Home page logic
    ├── manga.js        ← Details page logic
    ├── reader.js       ← Reader logic
    └── library.js      ← Library logic
```

## 🎯 Testing Checklist

- [ ] Home page loads manga
- [ ] Search works
- [ ] Filters apply correctly
- [ ] Infinite scroll triggers
- [ ] Can view manga details
- [ ] Chapter list displays
- [ ] Login/Register works
- [ ] Can bookmark manga
- [ ] Reader loads pages
- [ ] Next/Previous chapter works
- [ ] Library shows bookmarks
- [ ] Reading history saves
- [ ] Dark mode toggles

## 🚀 Next Steps

1. **Explore the code** - Well-commented JavaScript
2. **Read README.md** - Full documentation
3. **Customize it** - Make it your own!
4. **Share feedback** - Open an issue

## 💡 Pro Tips

1. **Bookmark a manga** before reading - easier to find later
2. **Use dark mode** for nighttime reading
3. **Keyboard shortcuts** in reader for faster navigation
4. **Check library often** to continue where you left off
5. **Search works best** with exact titles

---

**Happy Reading! 📚**

If you run into any issues, check the main README.md for detailed information.
