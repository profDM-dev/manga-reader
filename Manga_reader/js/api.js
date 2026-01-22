/**
 * MangaDex API Integration Module
 * 
 * Base URL: https://api.mangadex.org
 * Documentation: https://api.mangadex.org/docs/
 * 
 * This module handles all interactions with the MangaDex API
 * including fetching manga lists, details, chapters, and page images.
 */

const API_BASE_URL = 'https://api.mangadex.org';
const COVER_BASE_URL = 'https://uploads.mangadex.org/covers';

// Simple in-memory cache to reduce API calls
const cache = {
    manga: new Map(),
    chapters: new Map(),
    covers: new Map()
};

/**
 * Fetch manga list with filters
 * 
 * Endpoint: GET /manga
 * Parameters:
 * - limit: number of results (default: 20, max: 100)
 * - offset: for pagination
 * - order: sorting (e.g., {followedCount: 'desc'}, {latestUploadedChapter: 'desc'})
 * - status: ongoing, completed, hiatus, cancelled
 * - title: search query
 * - includes[]: related data to include (cover_art, author, artist)
 * - availableTranslatedLanguage[]: filter by available translations
 */
async function fetchMangaList({ limit = 20, offset = 0, order = { followedCount: 'desc' }, status = null, title = null } = {}) {
    try {
        const params = new URLSearchParams({
            limit: limit.toString(),
            offset: offset.toString(),
            'includes[]': ['cover_art', 'author', 'artist'],
            'availableTranslatedLanguage[]': 'en',
            'contentRating[]': ['safe', 'suggestive', 'erotica']
        });

        // Add order parameters
        for (const [key, value] of Object.entries(order)) {
            params.append(`order[${key}]`, value);
        }

        if (status) {
            params.append('status[]', status);
        }

        if (title) {
            params.append('title', title);
        }

        const response = await fetch(`${API_BASE_URL}/manga?${params}`);
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        
        // Cache manga data
        data.data.forEach(manga => {
            cache.manga.set(manga.id, manga);
        });

        return data;
    } catch (error) {
        console.error('Error fetching manga list:', error);
        throw error;
    }
}

/**
 * Fetch single manga details by ID
 * 
 * Endpoint: GET /manga/{id}
 * Parameters:
 * - includes[]: related data (cover_art, author, artist)
 */
async function fetchMangaById(mangaId) {
    // Check cache first
    if (cache.manga.has(mangaId)) {
        return cache.manga.get(mangaId);
    }

    try {
        const params = new URLSearchParams({
            'includes[]': ['cover_art', 'author', 'artist']
        });

        const response = await fetch(`${API_BASE_URL}/manga/${mangaId}?${params}`);
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        cache.manga.set(mangaId, data.data);
        return data.data;
    } catch (error) {
        console.error('Error fetching manga details:', error);
        throw error;
    }
}

/**
 * Fetch chapters for a manga
 * 
 * Endpoint: GET /manga/{id}/feed
 * Parameters:
 * - limit: number of results (max: 500)
 * - offset: for pagination
 * - translatedLanguage[]: filter by language (we use 'en')
 * - order: sorting (e.g., {chapter: 'asc'})
 * - includes[]: related data (scanlation_group, user)
 */
async function fetchMangaChapters(mangaId, { limit = 500, offset = 0 } = {}) {
    const cacheKey = `${mangaId}_${offset}`;
    
    if (cache.chapters.has(cacheKey)) {
        return cache.chapters.get(cacheKey);
    }

    try {
        const params = new URLSearchParams({
            limit: limit.toString(),
            offset: offset.toString(),
            'translatedLanguage[]': 'en',
            'order[chapter]': 'asc',
            'includes[]': 'scanlation_group'
        });

        const response = await fetch(`${API_BASE_URL}/manga/${mangaId}/feed?${params}`);
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        cache.chapters.set(cacheKey, data);
        return data;
    } catch (error) {
        console.error('Error fetching chapters:', error);
        throw error;
    }
}

/**
 * Fetch chapter pages (images)
 * 
 * Endpoint: GET /at-home/server/{chapterId}
 * Returns base URL and list of image filenames
 * 
 * Images are served from: {baseUrl}/data/{hash}/{filename}
 * or {baseUrl}/data-saver/{hash}/{filename} for compressed
 */
async function fetchChapterPages(chapterId) {
    try {
        const response = await fetch(`${API_BASE_URL}/at-home/server/${chapterId}`);
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching chapter pages:', error);
        throw error;
    }
}

/**
 * Get cover image URL for a manga
 * 
 * Cover images are available at:
 * https://uploads.mangadex.org/covers/{manga-id}/{cover-filename}
 */
function getCoverUrl(mangaId, coverFileName, size = '512') {
    if (!coverFileName) return '/assets/placeholder.jpg';
    return `${COVER_BASE_URL}/${mangaId}/${coverFileName}.${size}.jpg`;
}

/**
 * Extract cover art filename from manga relationships
 */
function getCoverArt(manga) {
    const coverRelationship = manga.relationships?.find(rel => rel.type === 'cover_art');
    return coverRelationship?.attributes?.fileName || null;
}

/**
 * Extract author name from manga relationships
 */
function getAuthor(manga) {
    const authorRelationship = manga.relationships?.find(rel => rel.type === 'author');
    return authorRelationship?.attributes?.name || 'Unknown';
}

/**
 * Extract artist name from manga relationships
 */
function getArtist(manga) {
    const artistRelationship = manga.relationships?.find(rel => rel.type === 'artist');
    return artistRelationship?.attributes?.name || 'Unknown';
}

/**
 * Get manga title (prefer English, fallback to romanized or first available)
 */
function getMangaTitle(manga) {
    const titles = manga.attributes?.title || {};
    return titles.en || titles['en-us'] || titles['ja-ro'] || Object.values(titles)[0] || 'Unknown Title';
}

/**
 * Get manga description (prefer English)
 */
function getMangaDescription(manga) {
    const descriptions = manga.attributes?.description || {};
    return descriptions.en || descriptions['en-us'] || Object.values(descriptions)[0] || 'No description available.';
}

/**
 * Search manga by title
 */
async function searchManga(query, { limit = 20, offset = 0 } = {}) {
    return fetchMangaList({ limit, offset, title: query, order: { relevance: 'desc' } });
}

// Export all functions
window.MangaDexAPI = {
    fetchMangaList,
    fetchMangaById,
    fetchMangaChapters,
    fetchChapterPages,
    getCoverUrl,
    getCoverArt,
    getAuthor,
    getArtist,
    getMangaTitle,
    getMangaDescription,
    searchManga
};
