# YoruManga (夜マンガ)

A modern, Japanese-inspired manga reading website that uses the MangaDex API as its data source. Built with vanilla JavaScript, HTML, and Tailwind CSS.

## 🌸 Project Name Options

The final chosen name is **YoruManga** (夜マンガ - "Night Manga"), but here are other Japanese-style alternatives considered:

1. **YoruManga** (夜マンガ) - "Night Manga" ✅ **CHOSEN**
2. SakuraYomi (桜読み) - "Cherry Blossom Reading"
3. KageReader (影リーダー) - "Shadow Reader"
4. TsukiManga (月マンガ) - "Moon Manga"
5. YumeReader (夢リーダー) - "Dream Reader"
6. HoshiManga (星マンガ) - "Star Manga"
7. KazeYomi (風読み) - "Wind Reading"
8. AkatsukiReader (暁リーダー) - "Dawn Reader"

## 🎯 Features

### Core Features
- **Home Page** with infinite scroll manga listing
- **Search & Filter** by title, status, and popularity
- **Manga Details** with synopsis, tags, and chapter list
- **Vertical Scroll Reader** for comfortable reading experience
- **User Authentication** with localStorage-based login/register
- **Bookmarks** to save favorite manga
- **Reading History** to track progress
- **Dark Mode** with preference persistence
- **Fully Responsive** mobile-first design

### Access Control
- **Public Access**: Browse manga, view details
- **Login Required**: Read chapters, bookmark, track history

## 🏗️ System Architecture

### Frontend-Only Design

```
User Actions
    ↓
JavaScript Logic
    ↓
MangaDex API (fetch data)
    ↓
Render UI
    ↓
localStorage (user data)
```

This is a **pure frontend application** with:
- No backend server
- All data from MangaDex API
- User data stored in browser localStorage
- Client-side authentication (demo purposes)

### Tech Stack
- **HTML5** - Structure
- **JavaScript (ES6+)** - Logic (no frameworks)
- **Tailwind CSS** - Styling (via CDN)
- **MangaDex API** - Manga data source
- **Google Fonts** - Typography (Noto Sans JP + Poppins)

## 📁 Project Structure

```
Manga_reader/
├── index.html              # Home page - manga listing
├── manga.html              # Manga details & chapters
├── reader.html             # Chapter reader
├── library.html            # User's bookmarks & history
├── login.html              # Login & registration
├── js/
│   ├── api.js             # MangaDex API integration
│   ├── auth.js            # Authentication & user data
│   ├── ui.js              # UI helpers, dark mode, toasts
│   ├── home.js            # Home page logic
│   ├── manga.js           # Manga details page logic
│   ├── reader.js          # Reader page logic
│   └── library.js         # Library page logic
├── assets/                 # Images, icons (if any)
└── README.md              # This file
```

## 🚀 Setup & Running

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Installation

1. **Clone or download** this project
   ```bash
   cd Manga_reader
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended for better CORS handling):
   
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (if you have it)
   npx http-server
   ```

3. **Access the site**
   - Direct: `file:///path/to/Manga_reader/index.html`
   - Local server: `http://localhost:8000`

### No Build Steps Required!
This project uses **Tailwind CSS via CDN**, so there's no need to:
- Install npm packages
- Run build commands
- Compile anything

Just open and go! 🎉

## 📚 Page-by-Page Breakdown

### 1. **index.html** - Home Page
**Purpose**: Browse and discover manga

**Features**:
- Infinite scroll (auto-loads more as you scroll)
- Search by title with debounced input
- Filter by status (ongoing/completed)
- Sort by popularity, latest updates, rating
- Manga cards with cover, title, tags, status

**JavaScript**: `home.js`
- Implements infinite scroll with offset-based pagination
- Debounced search (500ms delay after typing stops)
- Filter state management
- Lazy loading of images

### 2. **manga.html** - Manga Details
**Purpose**: View manga information and chapter list

**Features**:
- Full manga details (synopsis, author, artist, genres)
- English chapter list sorted by number
- Bookmark button (login required)
- "Read First Chapter" and "Continue Reading" buttons
- Last read chapter indicator

**JavaScript**: `manga.js`
- Fetches manga by ID from URL parameter
- Loads all English chapters
- Bookmark toggle with localStorage
- Chapter navigation

### 3. **reader.html** - Chapter Reader
**Purpose**: Read manga chapters (LOGIN REQUIRED)

**Features**:
- Vertical scroll with all pages loaded at once
- Auto-hide controls (show on mouse move)
- Page progress indicator
- Previous/Next chapter navigation
- Keyboard shortcuts (← → for chapters, F for fullscreen, Esc to exit)
- Reading history auto-update

**JavaScript**: `reader.js`
- Auth check (redirects if not logged in)
- Loads chapter images from MangaDex CDN
- Lazy loading for images beyond first 3
- Scroll-based page tracking
- Auto-saves reading progress

### 4. **login.html** - Authentication
**Purpose**: User login and registration

**Features**:
- Tab-based UI (Login / Register)
- Client-side validation
- Password hashing (simple, for demo)
- Auto-redirect after successful login
- Register → auto-login flow

**JavaScript**: Inline + `auth.js`
- localStorage-based user management
- Password hashing with simple algorithm
- Session management

### 5. **library.html** - User Library
**Purpose**: View bookmarks and reading history (LOGIN REQUIRED)

**Features**:
- Bookmarked manga grid
- Recently read manga with last chapter info
- "Continue Reading" buttons
- Sorted by last read date

**JavaScript**: `library.js`
- Auth check
- Loads bookmarked manga by ID
- Displays reading history with chapter info
- Parallel data loading for performance

## 🔧 JavaScript Modules

### **api.js** - MangaDex API Integration

**Endpoints Used**:
```javascript
// 1. Fetch manga list (with filters)
GET https://api.mangadex.org/manga
Parameters: limit, offset, order, status, title, includes[]

// 2. Fetch single manga
GET https://api.mangadex.org/manga/{id}
Parameters: includes[]

// 3. Fetch chapters for manga
GET https://api.mangadex.org/manga/{id}/feed
Parameters: limit, offset, translatedLanguage[], order

// 4. Fetch chapter pages
GET https://api.mangadex.org/at-home/server/{chapterId}
Returns: baseUrl, hash, data[] (page filenames)
```

**Key Functions**:
- `fetchMangaList()` - Get manga with filters
- `fetchMangaById()` - Get single manga details
- `fetchMangaChapters()` - Get chapters (English only)
- `fetchChapterPages()` - Get page images for reading
- In-memory caching to reduce API calls

### **auth.js** - Authentication & User Data

**localStorage Structure**:
```javascript
{
  "users": {
    "username": {
      "passwordHash": "...",
      "createdAt": "2025-11-27T..."
    }
  },
  "currentUser": "username",
  "user_username_bookmarks": ["mangaId1", "mangaId2"],
  "user_username_history": {
    "mangaId": {
      "chapterId": "...",
      "chapterNumber": "5",
      "lastRead": "2025-11-27T...",
      "mangaTitle": "..."
    }
  }
}
```

**Key Functions**:
- `register()` - Create new user
- `login()` - Authenticate user
- `logout()` - Clear session
- `requireAuth()` - Redirect if not logged in
- `addBookmark()` / `removeBookmark()` - Manage favorites
- `updateReadingHistory()` - Track chapter progress

### **ui.js** - UI Helpers & Dark Mode

**Features**:
- Dark mode toggle with localStorage persistence
- Loading spinners and skeleton screens
- Error and empty state displays
- Toast notifications
- Debounce utility for search
- Date formatting

**Dark Mode Implementation**:
```javascript
// Check localStorage or system preference
localStorage.getItem('darkMode') || 
  window.matchMedia('(prefers-color-scheme: dark)')

// Toggle via Tailwind's 'dark' class
document.documentElement.classList.toggle('dark')
```

## 🎨 Design & UX

### Color Scheme
- **Primary**: Red (#dc2626) - Japanese-inspired accent
- **Dark Mode**: Gray 800-900 backgrounds
- **Light Mode**: White/Gray 50 backgrounds

### Typography
- **Headings**: Noto Sans JP (Japanese font for titles/logo)
- **Body**: Poppins (clean, modern sans-serif)

### Responsive Breakpoints
```css
Mobile:    < 768px   (2 columns)
Tablet:    768-1024px (3 columns)
Desktop:   1024-1280px (4 columns)
Large:     > 1280px   (5 columns)
```

### Animations & Transitions
- Card hover: scale + shadow
- Page transitions: fade
- Dark mode: smooth color transitions
- Reader controls: slide in/out

## 🔐 Security Considerations

### Current Implementation (Demo Only)
⚠️ **Not production-ready!** This uses:
- Client-side password hashing (simple base64)
- localStorage for credentials
- No encryption
- No server-side validation

### For Production Use
If deploying for real users:
1. **Backend Required**: Use proper server authentication
2. **Secure Hashing**: bcrypt, scrypt, or Argon2
3. **HTTPS Only**: Never send passwords over HTTP
4. **Token-based Auth**: JWT or session tokens
5. **Rate Limiting**: Prevent brute force attacks
6. **Input Validation**: Server-side sanitization

## 🌐 MangaDex API Configuration

### Base URLs
```javascript
API_BASE_URL = 'https://api.mangadex.org'
COVER_BASE_URL = 'https://uploads.mangadex.org/covers'
```

### Language Filter
Currently hardcoded to **English only**:
```javascript
'translatedLanguage[]': 'en'
```

To change language (e.g., Japanese):
```javascript
// In api.js, modify:
'translatedLanguage[]': 'ja'
```

### Rate Limiting
MangaDex has rate limits:
- **5 requests/second** (burst)
- **60 requests/minute** (sustained)

The app implements:
- In-memory caching
- Debounced search
- Lazy image loading

## 🚀 Extension Ideas

### Easy Enhancements
1. **More Filters**
   - Genres/tags filter
   - Publication year range
   - Content rating filter

2. **Reader Modes**
   - Horizontal page-by-page
   - Double-page spread
   - Webtoon mode (already implemented!)

3. **UI Improvements**
   - Reading settings (image quality, brightness)
   - Keyboard shortcuts help modal
   - Manga recommendations

### Advanced Features
1. **Better Auth**
   - OAuth with MangaDex account
   - Real backend with database
   - Email verification

2. **Offline Reading**
   - Service Worker for PWA
   - IndexedDB for chapter caching
   - Download chapters

3. **Social Features**
   - Comments (requires backend)
   - Reading lists
   - Share to social media

4. **Analytics**
   - Reading time tracking
   - Popular manga stats
   - Personal reading insights

## 🐛 Known Limitations

1. **No Official MangaDex Login**: Uses local auth instead
2. **localStorage Limits**: ~5-10MB browser storage
3. **API Rate Limits**: May hit limits with heavy use
4. **No Chapter Downloads**: Streaming only
5. **Client-Side Only**: Not ideal for production

## 📖 How to Use

### For Users

1. **Browse Manga**
   - Open homepage
   - Scroll to see more
   - Use search and filters

2. **Create Account**
   - Click "Sign Up"
   - Enter username + password
   - Auto-logged in

3. **Read Manga**
   - Click any manga
   - Login if not already
   - Click "Read First Chapter"

4. **Bookmark Favorites**
   - On manga details page
   - Click bookmark button
   - View in "My Library"

5. **Track Progress**
   - Reading auto-saves
   - View history in library
   - Click "Continue Reading"

### For Developers

1. **Customize Branding**
   - Edit logo text in headers
   - Change primary color in Tailwind config
   - Update fonts in `<head>`

2. **Add New Filters**
   - Modify `home.js` filters
   - Update `fetchMangaList()` params
   - Add UI controls in `index.html`

3. **Change Reader Layout**
   - Edit `reader.html` structure
   - Modify `reader.js` page rendering
   - Adjust CSS in `<style>` tag

4. **Extend API Integration**
   - Add new functions to `api.js`
   - Follow MangaDex API docs
   - Update JSDoc comments

## 📄 License & Attribution

### This Project
Open source - feel free to use and modify!

### MangaDex
- All manga content from [MangaDex](https://mangadex.org)
- API documentation: https://api.mangadex.org/docs/
- Content belongs to respective owners

### Fonts
- **Noto Sans JP**: Google Fonts (OFL License)
- **Poppins**: Google Fonts (OFL License)

### Tailwind CSS
- https://tailwindcss.com
- MIT License

## 🤝 Contributing

Ideas for contributions:
1. Report bugs via issues
2. Suggest features
3. Improve documentation
4. Add translations
5. Optimize performance

## 📞 Support

For MangaDex API issues:
- https://api.mangadex.org/docs/
- MangaDex Discord

For this project:
- Check README
- Review code comments
- Open an issue

---

**Built with ❤️ for manga lovers**

YoruManga (夜マンガ) - Happy Reading! 📚✨
