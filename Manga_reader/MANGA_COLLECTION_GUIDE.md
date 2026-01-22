# Manga Collection Features

## Collection Builder (`collection-builder.html`)

### Visual Features:
✅ **Dual View Modes:**
- 🎴 **Cards View** - Beautiful grid display with cover images
- 📟 **Console View** - Technical build logs

### Manga Cards Display:
- **High-quality cover images** from MangaDex CDN (256x256 thumbnails)
- **Responsive grid layout** (2-5 columns based on screen size)
- **Hover effects** with genre tags and status overlays
- **Real-time updates** as manga are fetched
- **Search functionality** to filter cards
- **Lazy loading** for optimal performance

### Card Information:
Each card shows:
- Cover image (with fallback to placeholder)
- Title
- Description (truncated to 2 lines)
- Genres (top 2 displayed)
- Status (ongoing/completed)
- Year of release

### How to Use:
1. Open `collection-builder.html` in your browser
2. Set target count (800-1000 manga)
3. Click "🚀 Build Collection"
4. Watch cards populate in real-time
5. Use search bar to filter manga
6. Click "💾 Export JSON" to download

### Features:
- ✅ Real MangaDex API data
- ✅ Legitimate cover image URLs
- ✅ Live progress tracking
- ✅ Visual card preview
- ✅ Search/filter cards
- ✅ Export to JSON
- ✅ Auto-save to localStorage
- ✅ Responsive design
- ✅ Dark theme

## Home Page (`index.html`)

### Enhanced Features:
✅ **500+ Manga Links** organized by 16 genres
✅ **Browse by Genre** with tabbed interface
✅ **Infinite Scroll** with manga cards
✅ **Real cover images** from MangaDex
✅ **Search functionality** with instant results
✅ **Clickable manga titles** in genre browser

### Manga Card Display:
Every manga card includes:
- High-quality cover image (512x512)
- Title with hover effects
- Status badge (completed/ongoing)
- Description preview
- Genre tags
- Click to view details

## Image Sources

All cover images come from legitimate sources:
- **MangaDex CDN**: `https://uploads.mangadex.org/covers/{mangaId}/{fileName}.{size}.jpg`
- **Sizes available**: 256, 512 (optimized for web)
- **Fallback**: Placeholder SVG if image fails to load

## JSON Export Format

```json
{
  "id": "unique-manga-id",
  "title": "Manga Title",
  "cover": "https://uploads.mangadex.org/covers/id/filename.256.jpg",
  "altTitles": ["Alternative Title 1", "Alternative Title 2"],
  "genres": ["Action", "Adventure", "Fantasy"],
  "status": "ongoing",
  "year": 2020,
  "description": "Short synopsis..."
}
```

## Performance

- **Rate limiting**: 250ms between API batches
- **Lazy loading**: Images load on demand
- **Caching**: localStorage for offline access
- **Batch size**: 100 manga per API request
- **Build time**: ~4-5 minutes for 1000 manga

## Tech Stack

- **API**: MangaDex API v5
- **Images**: MangaDex CDN
- **Storage**: localStorage
- **Framework**: Vanilla JavaScript
- **Styling**: Tailwind CSS
- **Fonts**: Noto Sans JP, Poppins
