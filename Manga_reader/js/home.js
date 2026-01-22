/**
 * Home Page Logic
 * 
 * Handles:
 * - Fetching and displaying manga list
 * - Infinite scroll implementation
 * - Search functionality
 * - Filter controls
 * - Manga card rendering
 */

// State management
let currentOffset = 0;
let isLoading = false;
let hasMore = true;
let currentFilters = {
    search: '',
    status: '',
    sort: 'followedCount'
};

/**
 * Create a manga card element from local MANGA_DATA
 */
function createLocalMangaCard(manga) {
    const card = document.createElement('a');
    card.href = manga.url;
    card.target = '_blank';
    card.className = 'block group';
    
    card.innerHTML = `
        <div class="w-full h-56 overflow-hidden rounded-lg shadow-md bg-gray-200 dark:bg-gray-700">
            <img 
                src="${manga.cover}" 
                alt="${manga.title}"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                onerror="this.src='https://via.placeholder.com/256x360?text=No+Cover'"
            />
        </div>
        <h3 class="mt-2 text-lg font-semibold text-gray-900 dark:text-white truncate text-center group-hover:text-red-500 transition-colors">
            ${manga.title}
        </h3>
    `;
    
    return card;
}

/**
 * Create a manga card element from MangaDex API
 */
function createMangaCard(manga) {
    const title = MangaDexAPI.getMangaTitle(manga);
    const coverFileName = MangaDexAPI.getCoverArt(manga);
    const coverUrl = MangaDexAPI.getCoverUrl(manga.id, coverFileName, '512');
    const description = MangaDexAPI.getMangaDescription(manga);
    const status = manga.attributes?.status || 'unknown';
    const tags = manga.attributes?.tags?.slice(0, 3) || [];
    
    // Get rating if available
    const rating = manga.attributes?.contentRating || '';
    
    const card = document.createElement('div');
    card.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group';
    card.onclick = () => window.location.href = `manga.html?id=${manga.id}`;
    
    card.innerHTML = `
        <div class="relative overflow-hidden">
            <img 
                src="${coverUrl}" 
                alt="${title}"
                class="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
                onerror="this.src='https://via.placeholder.com/512x720?text=No+Cover'"
            />
            <div class="absolute top-2 right-2">
                <span class="px-2 py-1 text-xs font-bold rounded ${
                    status === 'completed' ? 'bg-green-500' : 
                    status === 'ongoing' ? 'bg-blue-500' : 
                    'bg-gray-500'
                } text-white uppercase">
                    ${status}
                </span>
            </div>
        </div>
        
        <div class="p-4">
            <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-2 group-hover:text-red-500 transition-colors">
                ${title}
            </h3>
            
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                ${UI.truncateText(description, 100)}
            </p>
            
            <div class="flex flex-wrap gap-2">
                ${tags.map(tag => `
                    <span class="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                        ${tag.attributes?.name?.en || 'Tag'}
                    </span>
                `).join('')}
            </div>
        </div>
    `;
    
    return card;
}

/**
 * Render manga grid using local MANGA_DATA
 */
function renderLocalMangaGrid() {
    const grid = document.getElementById('mangaGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    // Use MANGA_DATA from manga-data.js
    if (typeof MANGA_DATA !== 'undefined' && MANGA_DATA.length > 0) {
        MANGA_DATA.forEach(manga => {
            const card = createLocalMangaCard(manga);
            grid.appendChild(card);
        });
    } else {
        grid.innerHTML = '<p class="col-span-full text-center text-gray-500 dark:text-gray-400">No manga available</p>';
    }
}

/**
 * Load manga list from API
 * 
 * Infinite Scroll Implementation:
 * - Uses offset-based pagination
 * - Tracks current offset and increments by limit (20) on each load
 * - Detects when user scrolls near bottom and triggers loadMore()
 * - Prevents multiple simultaneous requests with isLoading flag
 * - Stops loading when API returns fewer items than requested
 */
async function loadManga(reset = false) {
    if (isLoading || (!hasMore && !reset)) return;
    
    isLoading = true;
    const grid = document.getElementById('mangaGrid');
    const loadingMore = document.getElementById('loadingMore');
    const endOfResults = document.getElementById('endOfResults');
    
    // Reset state if needed
    if (reset) {
        currentOffset = 0;
        hasMore = true;
        grid.innerHTML = '';
        endOfResults.classList.add('hidden');
    }
    
    // Show loading state
    if (currentOffset === 0) {
        UI.showSkeletonCards('mangaGrid', 10);
    } else {
        loadingMore.classList.remove('hidden');
    }
    
    try {
        const order = {};
        order[currentFilters.sort] = 'desc';
        
        const params = {
            limit: 20,
            offset: currentOffset,
            order: order,
            status: currentFilters.status || null,
            title: currentFilters.search || null
        };
        
        const data = currentFilters.search ? 
            await MangaDexAPI.searchManga(currentFilters.search, params) :
            await MangaDexAPI.fetchMangaList(params);
        
        loadingMore.classList.add('hidden');
        
        if (data.data.length === 0 && currentOffset === 0) {
            UI.showEmptyState('mangaGrid', 'No manga found. Try adjusting your filters.');
            hasMore = false;
            return;
        }
        
        // Render manga cards
        if (currentOffset === 0 && data.data.length > 0) {
            grid.innerHTML = '';
        }
        
        data.data.forEach(manga => {
            const card = createMangaCard(manga);
            grid.appendChild(card);
        });
        
        // Update pagination state
        currentOffset += data.data.length;
        hasMore = data.data.length === 20; // If we got fewer than requested, no more pages
        
        if (!hasMore) {
            endOfResults.classList.remove('hidden');
        }
        
    } catch (error) {
        console.error('Error loading manga:', error);
        loadingMore.classList.add('hidden');
        
        if (currentOffset === 0) {
            UI.showError('mangaGrid', 
                'Failed to load manga. Please check your connection and try again.', 
                'loadManga(true)');
        } else {
            UI.showToast('Failed to load more manga', 'error');
        }
    } finally {
        isLoading = false;
    }
}

/**
 * Infinite scroll handler
 * Triggers when user scrolls within 500px of bottom
 */
function handleScroll() {
    if (isLoading || !hasMore) return;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    
    // Load more when within 500px of bottom
    if (scrollTop + clientHeight >= scrollHeight - 500) {
        loadManga();
    }
}

/**
 * Apply filters and reload manga list
 */
function applyFilters() {
    const searchInput = document.getElementById('searchInput');
    const statusFilter = document.getElementById('statusFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    currentFilters = {
        search: searchInput.value.trim(),
        status: statusFilter.value,
        sort: sortFilter.value
    };
    
    loadManga(true);
}

/**
 * Clear all filters
 */
function clearFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('statusFilter').value = '';
    document.getElementById('sortFilter').value = 'followedCount';
    
    currentFilters = {
        search: '',
        status: '',
        sort: 'followedCount'
    };
    
    loadManga(true);
}

/**
 * Quick search manga by title (for featured manga buttons)
 */
function searchManga(title) {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = title;
    
    currentFilters = {
        search: title,
        status: '',
        sort: 'followedCount'
    };
    
    // Scroll to results
    const mangaGrid = document.getElementById('mangaGrid');
    mangaGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Load results
    loadManga(true);
}

/**
 * Show manga by genre
 */
let currentGenre = 'all';

function showGenre(genre) {
    currentGenre = genre;
    
    // Update active tab
    document.querySelectorAll('.genre-tab').forEach(tab => {
        tab.classList.remove('active', 'bg-white', 'text-red-600');
        tab.classList.add('bg-white/20', 'text-white');
    });
    event.target.classList.add('active', 'bg-white', 'text-red-600');
    event.target.classList.remove('bg-white/20', 'text-white');
    
    // Load manga links for this genre
    loadMangaLinks(genre);
}

/**
 * Load manga links into the container
 */
function loadMangaLinks(genre) {
    const container = document.getElementById('mangaLinksContainer');
    
    let mangaTitles;
    if (genre === 'all') {
        mangaTitles = window.MangaDatabase.getAllMangaTitles();
    } else {
        mangaTitles = window.MangaDatabase.getMangaByGenre(genre);
    }
    
    // Sort alphabetically
    mangaTitles.sort();
    
    // Create clickable links
    container.innerHTML = mangaTitles.map(title => `
        <button 
            onclick="searchManga('${title.replace(/'/g, "\\'")}')" 
            class="text-left px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-red-500 hover:text-white dark:hover:bg-red-600 rounded-lg transition-colors text-sm font-medium text-gray-800 dark:text-gray-200 truncate"
            title="${title}"
        >
            ${title}
        </button>
    `).join('');
}

/**
 * Initialize manga links counts
 */
function initMangaCounts() {
    const genres = window.MangaDatabase.getAllGenres();
    
    // Count for each genre
    genres.forEach(genre => {
        const count = window.MangaDatabase.getMangaByGenre(genre).length;
        const countEl = document.getElementById(`count-${genre}`);
        if (countEl) countEl.textContent = count;
    });
    
    // Total count
    const totalCount = window.MangaDatabase.getAllMangaTitles().length;
    document.getElementById('count-all').textContent = totalCount;
    document.getElementById('totalMangaCount').textContent = totalCount;
    
    // Load all manga links by default
    loadMangaLinks('all');
}

/**
 * Initialize home page
 */
function initHomePage() {
    // Initialize manga database links
    if (window.MangaDatabase) {
        initMangaCounts();
    }
    
    // Render manga grid using local MANGA_DATA
    renderLocalMangaGrid();
    
    // Setup search with debounce (wait 500ms after user stops typing)
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', UI.debounce(filterLocalManga, 500));
    }
    
    // Setup filter listeners
    const clearBtn = document.getElementById('clearFilters');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            renderLocalMangaGrid();
        });
    }
}

/**
 * Filter local manga by search term
 */
function filterLocalManga() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput?.value?.toLowerCase().trim() || '';
    const grid = document.getElementById('mangaGrid');
    
    if (!grid || typeof MANGA_DATA === 'undefined') return;
    
    grid.innerHTML = '';
    
    const filteredManga = searchTerm 
        ? MANGA_DATA.filter(manga => manga.title.toLowerCase().includes(searchTerm))
        : MANGA_DATA;
    
    if (filteredManga.length === 0) {
        grid.innerHTML = '<p class="col-span-full text-center text-gray-500 dark:text-gray-400 py-8">No manga found matching your search.</p>';
        return;
    }
    
    filteredManga.forEach(manga => {
        const card = createLocalMangaCard(manga);
        grid.appendChild(card);
    });
}

// Make functions available globally for onclick handlers
window.searchManga = searchManga;
window.showGenre = showGenre;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHomePage);
} else {
    initHomePage();
}
