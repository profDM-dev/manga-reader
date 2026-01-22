# YoruManga - Complete Project Documentation

## 📋 Project Overview

**Project Name**: YoruManga (夜マンガ - "Night Manga")  
**Type**: Frontend-only manga reading website  
**Tech Stack**: HTML, JavaScript (vanilla), Tailwind CSS  
**Data Source**: MangaDex API  
**Authentication**: localStorage-based (client-side)  

---

## 🎨 Design Philosophy

### Japanese-Inspired Theming
- **Name**: YoruManga (夜) uses the kanji for "night"
- **Typography**: Noto Sans JP for headings/branding
- **Color Palette**: Red (#dc2626) as primary accent color
- **Aesthetic**: Clean, modern with subtle Japanese elements

### User Experience Principles
1. **Mobile-First**: Responsive design prioritizing mobile experience
2. **Minimal Friction**: Quick access to reading without obstacles
3. **Visual Hierarchy**: Clear content organization and navigation
4. **Dark Mode Support**: Comfortable reading in any lighting
5. **Performance**: Lazy loading, caching, debounced inputs

---

## 🏛️ System Architecture

### High-Level Flow

```
┌─────────────┐
│    User     │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────────────────┐
│         Browser (Frontend)              │
│  ┌────────────────────────────────────┐ │
│  │  HTML Pages (5 total)              │ │
│  └────────────┬───────────────────────┘ │
│               │                          │
│  ┌────────────▼───────────────────────┐ │
│  │  JavaScript Modules (7 files)      │ │
│  │  - api.js (MangaDex integration)   │ │
│  │  - auth.js (User management)       │ │
│  │  - ui.js (UI helpers)              │ │
│  │  - home/manga/reader/library.js    │ │
│  └────────┬───────────┬────────────────┘ │
│           │           │                  │
│    ┌──────▼──────┐   │                  │
│    │ localStorage │   │                  │
│    │ (user data)  │   │                  │
│    └──────────────┘   │                  │
└───────────────────────┼──────────────────┘
                        │
                        ▼
            ┌───────────────────────┐
            │   MangaDex API        │
            │   api.mangadex.org    │
            └───────────────────────┘
```

### Data Flow

1. **User Action** → JavaScript event handler
2. **API Call** → MangaDex (if needed)
3. **Data Processing** → Format/filter results
4. **UI Update** → Render to DOM
5. **State Save** → localStorage (bookmarks, history)

---

## 📑 Page Structure & Responsibilities

### 1. index.html (Home Page)
**Route**: `/` or `/index.html`

**Purpose**: 
- Entry point for browsing manga
- Discover popular and latest manga
- Search and filter functionality

**Key Components**:
- Header with navigation and user menu
- Hero section with branding
- Search bar with live filtering
- Filter controls (status, sort)
- Infinite-scroll manga grid
- Footer with attribution

**JavaScript**: `home.js`
- **State Management**: 
  ```javascript
  {
    currentOffset: 0,
    isLoading: false,
    hasMore: true,
    currentFilters: { search, status, sort }
  }
  ```
- **Infinite Scroll Implementation**:
  - Monitors scroll position
  - Triggers at 500px from bottom
  - Prevents duplicate requests
  - Updates offset for pagination

**API Calls**:
- `fetchMangaList()` - 20 items per request
- Includes: cover_art, author, artist
- Filters: English language only

---

### 2. manga.html (Manga Details)
**Route**: `/manga.html?id={mangaId}`

**Purpose**:
- Display comprehensive manga information
- Show available chapters
- Access point to reader

**Key Components**:
- Cover image and title
- Synopsis and metadata
- Author/artist info
- Genre tags
- Bookmark button
- Chapter list (English only)
- Read/Continue buttons

**JavaScript**: `manga.js`
- Fetches manga by ID from URL param
- Loads all available English chapters
- Sorts chapters numerically
- Manages bookmark state
- Shows last-read indicator

**API Calls**:
- `fetchMangaById(id)` - Single manga
- `fetchMangaChapters(id)` - Chapter feed
- Filters: translatedLanguage=en

---

### 3. reader.html (Chapter Reader)
**Route**: `/reader.html?manga={mangaId}&chapter={chapterId}`

**Access**: **LOGIN REQUIRED** ✅

**Purpose**:
- Read manga chapters
- Navigate between chapters
- Track reading progress

**Key Components**:
- Top control bar (chapter info, back button)
- Vertical page container
- Bottom navigation bar
- Auto-hide controls
- Loading overlay

**JavaScript**: `reader.js`
- **Auth Check**: Redirects if not logged in
- **Page Loading**: 
  - Fetches from MangaDex CDN
  - Lazy loads images (first 3 eager)
  - Vertical scroll layout
- **History Tracking**: Auto-saves progress
- **Keyboard Navigation**:
  - `←/→` - Previous/Next chapter
  - `F` - Toggle controls
  - `Esc` - Exit to details

**API Calls**:
- `fetchChapterPages(chapterId)` - Image URLs
- Returns: baseUrl + hash + filenames[]

**Image URL Format**:
```
{baseUrl}/data/{hash}/{filename}
```

---

### 4. login.html (Authentication)
**Route**: `/login.html?mode={login|register}&redirect={url}`

**Purpose**:
- User registration
- User login
- Session management

**Key Components**:
- Tab interface (Login/Register)
- Form validation
- Error messaging
- Info box explaining benefits

**JavaScript**: Inline + `auth.js`
- **Registration Flow**:
  1. Validate username (≥3 chars)
  2. Validate password (≥6 chars)
  3. Check uniqueness
  4. Hash password
  5. Save to localStorage
  6. Auto-login

- **Login Flow**:
  1. Verify user exists
  2. Hash input password
  3. Compare hashes
  4. Set currentUser
  5. Redirect to original page

**Security Note**: 
⚠️ Client-side only - NOT production-ready!

---

### 5. library.html (User Library)
**Route**: `/library.html`

**Access**: **LOGIN REQUIRED** ✅

**Purpose**:
- View bookmarked manga
- Access reading history
- Continue reading easily

**Key Components**:
- Bookmarks section
- Reading history section
- Counters for each section
- Continue reading buttons
- Sorted by recent activity

**JavaScript**: `library.js`
- Loads bookmarks from localStorage
- Fetches manga data for each ID
- Displays reading history with chapter info
- Sorts history by last-read date

**Data Sources**:
```javascript
// From localStorage
user_${username}_bookmarks: ['id1', 'id2', ...]
user_${username}_history: {
  'mangaId': {
    chapterId: 'xxx',
    chapterNumber: '5',
    lastRead: '2025-11-27T...',
    mangaTitle: 'Name'
  }
}
```

---

## 🔧 JavaScript Module Details

### api.js - MangaDex API Client

**Responsibilities**:
- All HTTP requests to MangaDex
- Response parsing
- Data caching
- Helper functions for common operations

**Key Functions**:

```javascript
// Manga List (with pagination and filters)
fetchMangaList({ 
  limit: 20, 
  offset: 0, 
  order: { followedCount: 'desc' },
  status: 'ongoing',
  title: 'search query'
})

// Single Manga
fetchMangaById(mangaId)

// Chapters (English only)
fetchMangaChapters(mangaId, { limit: 500, offset: 0 })

// Chapter Pages
fetchChapterPages(chapterId)

// Utility Helpers
getCoverUrl(mangaId, fileName, size)
getMangaTitle(manga)
getMangaDescription(manga)
getAuthor(manga)
getArtist(manga)
```

**Caching Strategy**:
```javascript
cache = {
  manga: Map(),      // Manga objects by ID
  chapters: Map(),   // Chapter lists by manga ID
  covers: Map()      // Cover URLs
}
```

**API Base URLs**:
```javascript
API_BASE_URL = 'https://api.mangadex.org'
COVER_BASE_URL = 'https://uploads.mangadex.org/covers'
```

---

### auth.js - Authentication & User Data

**Responsibilities**:
- User registration and login
- Session management
- Bookmark management
- Reading history tracking

**localStorage Schema**:

```javascript
{
  // All users
  "users": {
    "username1": {
      "passwordHash": "base64_encoded_hash",
      "createdAt": "ISO_date"
    }
  },
  
  // Current session
  "currentUser": "username1",
  
  // Per-user bookmarks
  "user_username1_bookmarks": ["mangaId1", "mangaId2"],
  
  // Per-user history
  "user_username1_history": {
    "mangaId1": {
      "chapterId": "chapterId",
      "chapterNumber": "5",
      "lastRead": "ISO_date",
      "mangaTitle": "Manga Name"
    }
  }
}
```

**Key Functions**:

```javascript
// Authentication
register(username, password) → { success, message }
login(username, password) → { success, message, username }
logout()
getCurrentUser() → username | null
isLoggedIn() → boolean
requireAuth() → redirects if not logged in

// Bookmarks
getBookmarks(username) → [mangaId, ...]
addBookmark(mangaId, username)
removeBookmark(mangaId, username)
isBookmarked(mangaId, username) → boolean
toggleBookmark(mangaId, username)

// Reading History
getReadingHistory(username) → { mangaId: {...}, ... }
updateReadingHistory(mangaId, chapterId, chapterNum, title, username)
getLastReadChapter(mangaId, username) → chapter object | null
```

**Password Hashing**:
```javascript
// Simple hash (DEMO ONLY - not secure!)
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return btoa(hash.toString(16));
}
```

---

### ui.js - UI Helpers & Utilities

**Responsibilities**:
- Dark mode management
- Loading states
- Error handling
- Toast notifications
- Common utilities

**Key Functions**:

```javascript
// Dark Mode
initDarkMode()
toggleDarkMode() → isDark
isDarkMode() → boolean

// Loading States
showLoading(containerId)
showSkeletonCards(containerId, count)

// Error Handling
showError(containerId, message, retryFn)
showEmptyState(containerId, message, icon)

// Notifications
showToast(message, type, duration)
// Types: success, error, info, warning

// User UI
updateUserUI() // Shows/hides auth buttons

// Utilities
debounce(func, wait) // Delays execution
formatDate(dateString) // Human-readable dates
truncateText(text, maxLength)
```

**Dark Mode Implementation**:
```javascript
// Check preference
const darkMode = localStorage.getItem('darkMode');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Apply
if (darkMode === 'true' || (darkMode === null && systemDark)) {
  document.documentElement.classList.add('dark');
}
```

---

### Page-Specific Modules

#### home.js
**State**:
```javascript
currentOffset = 0
isLoading = false
hasMore = true
currentFilters = { search, status, sort }
```

**Infinite Scroll Logic**:
```javascript
function handleScroll() {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  
  // Trigger 500px from bottom
  if (scrollTop + clientHeight >= scrollHeight - 500) {
    loadManga();
  }
}

// Debounced (200ms)
window.addEventListener('scroll', UI.debounce(handleScroll, 200));
```

#### manga.js
**Features**:
- URL parameter extraction: `?id={mangaId}`
- Bookmark toggle with visual feedback
- Chapter sorting (ascending by number)
- Last-read chapter highlighting

#### reader.js
**Features**:
- Auth gate (redirects if not logged in)
- All pages loaded vertically at once
- Auto-hide controls (3s timeout)
- Keyboard navigation
- Page progress tracking
- Reading history auto-save

**Controls Auto-Hide**:
```javascript
let hideControlsTimeout;

function resetHideControlsTimer() {
  clearTimeout(hideControlsTimeout);
  // Show controls
  if (!controlsVisible) toggleControls();
  // Hide after 3s
  hideControlsTimeout = setTimeout(() => {
    if (controlsVisible) toggleControls();
  }, 3000);
}

// Triggers on mouse/touch movement
document.addEventListener('mousemove', resetHideControlsTimer);
```

#### library.js
**Features**:
- Parallel loading of bookmarks and history
- Sorted by last-read date
- Continue reading shortcuts
- Empty state handling

---

## 🎨 Styling & Theming

### Tailwind CSS Configuration

```javascript
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#dc2626',    // Red-600
        secondary: '#1f2937',  // Gray-800
      }
    }
  }
}
```

### Typography Scale

```css
/* Headings */
.font-japanese {
  font-family: 'Noto Sans JP', sans-serif;
}

/* Body */
.font-main {
  font-family: 'Poppins', sans-serif;
}

/* Sizes */
Logo: text-3xl (30px)
H1: text-5xl (48px)
H2: text-3xl (30px)
H3: text-xl (20px)
Body: text-base (16px)
Small: text-sm (14px)
```

### Color Palette

**Light Mode**:
- Background: Gray-50 (#f9fafb)
- Cards: White
- Text: Gray-800
- Accent: Red-500

**Dark Mode**:
- Background: Gray-900 (#111827)
- Cards: Gray-800
- Text: White
- Accent: Red-400

### Responsive Grid

```css
/* Manga Grid */
grid-cols-2          /* Mobile (< 768px) */
md:grid-cols-3       /* Tablet (768px+) */
lg:grid-cols-4       /* Desktop (1024px+) */
xl:grid-cols-5       /* Large (1280px+) */
```

---

## 🔌 MangaDex API Integration

### Endpoints Used

1. **Manga Search/List**
   ```
   GET /manga
   Query Params:
   - limit: 20 (default)
   - offset: 0 (pagination)
   - includes[]: cover_art, author, artist
   - availableTranslatedLanguage[]: en
   - contentRating[]: safe, suggestive, erotica
   - order[{field}]: asc|desc
   - status[]: ongoing|completed|hiatus|cancelled
   - title: search query
   ```

2. **Manga Details**
   ```
   GET /manga/{id}
   Query Params:
   - includes[]: cover_art, author, artist
   ```

3. **Chapter Feed**
   ```
   GET /manga/{id}/feed
   Query Params:
   - limit: 500
   - offset: 0
   - translatedLanguage[]: en
   - order[chapter]: asc
   - includes[]: scanlation_group
   ```

4. **Chapter Pages**
   ```
   GET /at-home/server/{chapterId}
   Returns:
   {
     baseUrl: "https://...",
     chapter: {
       hash: "...",
       data: ["page1.jpg", "page2.jpg", ...],
       dataSaver: ["page1.jpg", ...]
     }
   }
   ```

### Image URLs

**Cover Art**:
```
https://uploads.mangadex.org/covers/{mangaId}/{fileName}.{size}.jpg

Sizes: 256, 512 (most common)
```

**Chapter Pages**:
```
{baseUrl}/data/{hash}/{filename}         // High quality
{baseUrl}/data-saver/{hash}/{filename}   // Compressed
```

### Rate Limits

- **5 requests/second** (burst)
- **60 requests/minute** (average)

**Mitigation**:
- In-memory caching
- Debounced search
- Lazy image loading
- Batch requests when possible

---

## 💾 Data Persistence

### localStorage Usage

**Total Keys**: 3 + (2 × users)

**Structure**:
```
users                          // All user accounts
currentUser                    // Active session
user_{username}_bookmarks      // Per-user bookmarks
user_{username}_history        // Per-user history
darkMode                       // UI preference
```

**Size Considerations**:
- localStorage limit: ~5-10MB
- User data: ~1-5KB per user
- History grows over time
- Bookmarks limited by user behavior

**Cleanup**:
```javascript
// Clear specific user
Auth.clearUserData(username)

// Clear all
localStorage.clear()
```

---

## 🚀 Performance Optimizations

### 1. Image Loading
```javascript
// Eager load first 3 pages in reader
img.loading = index < 3 ? 'eager' : 'lazy';

// Skeleton screens while loading
showSkeletonCards('mangaGrid', 10);
```

### 2. API Caching
```javascript
// In-memory cache
const cache = {
  manga: new Map(),
  chapters: new Map()
};

// Check before fetching
if (cache.manga.has(mangaId)) {
  return cache.manga.get(mangaId);
}
```

### 3. Debouncing
```javascript
// Search input (500ms)
searchInput.addEventListener('input', 
  UI.debounce(applyFilters, 500)
);

// Scroll events (200ms)
window.addEventListener('scroll', 
  UI.debounce(handleScroll, 200)
);
```

### 4. Infinite Scroll
```javascript
// Load before reaching bottom
if (scrollTop + clientHeight >= scrollHeight - 500) {
  loadManga();
}

// Prevent duplicate requests
if (isLoading || !hasMore) return;
isLoading = true;
```

---

## 🔐 Security Considerations

### Current State (Development Only)

⚠️ **NOT PRODUCTION READY**

**Issues**:
1. Client-side password storage
2. Simple hash function (not cryptographic)
3. No server-side validation
4. localStorage vulnerable to XSS
5. No rate limiting
6. No CSRF protection

### Production Requirements

For real deployment:

1. **Backend Authentication**
   ```
   - Server-side user database
   - bcrypt/Argon2 password hashing
   - JWT or session tokens
   - HTTPS only
   ```

2. **API Security**
   ```
   - Server proxy for MangaDex API
   - Rate limiting
   - Request signing
   - CORS configuration
   ```

3. **Client Security**
   ```
   - Content Security Policy
   - XSS prevention
   - Input sanitization
   - Secure cookies
   ```

---

## 🧪 Testing Scenarios

### Manual Test Checklist

**Home Page**:
- [ ] Manga list loads on page load
- [ ] Infinite scroll triggers near bottom
- [ ] Search updates results
- [ ] Filters apply correctly
- [ ] Skeleton loading shows
- [ ] Error handling works

**Manga Details**:
- [ ] Details load from URL param
- [ ] Chapter list populates
- [ ] Bookmark button toggles
- [ ] "Read First" button works
- [ ] Shows last-read indicator
- [ ] No chapters message displays

**Reader**:
- [ ] Redirects if not logged in
- [ ] All pages load vertically
- [ ] Navigation buttons work
- [ ] Keyboard shortcuts functional
- [ ] Controls auto-hide
- [ ] History saves automatically

**Authentication**:
- [ ] Can register new user
- [ ] Can login existing user
- [ ] Validation prevents bad input
- [ ] Redirects after login
- [ ] Logout clears session

**Library**:
- [ ] Redirects if not logged in
- [ ] Bookmarks display
- [ ] History shows with chapter info
- [ ] Continue reading works
- [ ] Empty states show correctly

**Dark Mode**:
- [ ] Toggle switches theme
- [ ] Preference persists
- [ ] Icon updates
- [ ] All pages support

---

## 🐛 Known Issues & Limitations

### Technical Limitations

1. **localStorage Size**
   - 5-10MB browser limit
   - Large histories may fill up
   - No automatic cleanup

2. **API Constraints**
   - Rate limiting (5/sec, 60/min)
   - No offline support
   - Dependent on MangaDex uptime

3. **Browser Compatibility**
   - Requires modern browser
   - localStorage enabled
   - JavaScript enabled

### Feature Gaps

1. **No Real Authentication**
   - Client-side only
   - Not secure
   - Can't sync across devices

2. **Limited Reader Modes**
   - Only vertical scroll
   - No horizontal pagination
   - No double-page spread

3. **No Social Features**
   - No comments
   - No ratings
   - No sharing

### Edge Cases

1. **Manga without English chapters**
   - Shows empty state
   - No fallback language

2. **Very long manga**
   - Chapter list may be slow
   - Pagination needed for 500+ chapters

3. **Network Errors**
   - Error messages shown
   - Retry functionality limited

---

## 🎯 Future Enhancement Ideas

### Easy Additions

1. **UI Improvements**
   - Reading settings panel
   - Image quality toggle
   - Brightness adjustment
   - Font size controls

2. **More Filters**
   - Genre/tag filtering
   - Publication year
   - Content rating
   - Author/artist search

3. **Better UX**
   - Keyboard shortcuts help
   - Tutorial/onboarding
   - Manga recommendations
   - Similar manga section

### Medium Complexity

1. **Advanced Reader**
   - Horizontal mode
   - Double-page view
   - Webtoon mode toggle
   - Reading settings memory

2. **Enhanced Library**
   - Reading lists/collections
   - Custom tags
   - Notes per manga
   - Import/export data

3. **Performance**
   - Service Worker (PWA)
   - Better caching strategy
   - Image preloading
   - Virtual scrolling

### Advanced Features

1. **Real Authentication**
   - OAuth with MangaDex
   - Backend server
   - Database storage
   - Cross-device sync

2. **Offline Support**
   - Download chapters
   - IndexedDB storage
   - Progressive Web App
   - Background sync

3. **Social Features**
   - User reviews
   - Reading lists
   - Follow other users
   - Discussion threads

---

## 📖 Usage Guide

### For End Users

**Getting Started**:
1. Open homepage
2. Browse or search manga
3. Click manga for details
4. Create account to read
5. Start reading!

**Reading Workflow**:
1. Find manga → Details page
2. Bookmark if you like it
3. Click "Read First Chapter"
4. Scroll through pages
5. Use controls for next chapter
6. Progress saves automatically

**Library Management**:
1. View "My Library"
2. See all bookmarks
3. Check reading history
4. Continue where you left off

### For Developers

**Customization**:

1. **Change Branding**
   ```javascript
   // In HTML files
   <span class="...">YourSiteName</span>
   
   // In Tailwind config
   primary: '#your-color'
   ```

2. **Add Filters**
   ```javascript
   // In home.js
   currentFilters.newFilter = value;
   
   // In api.js
   params.append('newParam', value);
   ```

3. **Modify Reader**
   ```javascript
   // In reader.js
   // Change page rendering logic
   // Add new controls
   ```

**Extending**:

1. **New Page**
   - Create HTML file
   - Create JS module
   - Add navigation links
   - Update README

2. **New API Endpoint**
   - Add function to api.js
   - Document parameters
   - Add error handling
   - Update cache if needed

3. **New Feature**
   - Plan localStorage schema
   - Add UI components
   - Implement logic
   - Test thoroughly

---

## 📚 Resources

### Documentation
- **MangaDex API**: https://api.mangadex.org/docs/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **MDN Web Docs**: https://developer.mozilla.org

### Assets
- **Google Fonts**: https://fonts.google.com
- **Heroicons**: (SVG icons used in project)

### Community
- **MangaDex Discord**: For API support
- **GitHub Issues**: For project bugs

---

## 📄 License

**Project**: Open source, free to use and modify

**Content**: 
- All manga content © their respective owners
- MangaDex API © MangaDex
- Fonts © Google (OFL License)
- Tailwind CSS © Tailwind Labs (MIT)

---

## ✨ Credits

**Built with**:
- MangaDex for the amazing API
- Tailwind CSS for beautiful styling
- Google Fonts for typography
- The manga community ❤️

---

**YoruManga (夜マンガ) - Happy Reading! 📚**
