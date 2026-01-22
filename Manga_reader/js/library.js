/**
 * Library Page Logic
 * 
 * Handles:
 * - Authentication check (redirect if not logged in)
 * - Loading bookmarked manga
 * - Loading reading history
 * - Continue reading functionality
 */

/**
 * Check authentication and redirect if needed
 */
function checkAuth() {
    if (!Auth.requireAuth()) {
        return false;
    }
    return true;
}

/**
 * Create manga card for library
 */
function createLibraryMangaCard(manga, lastRead = null) {
    const title = MangaDexAPI.getMangaTitle(manga);
    const coverFileName = MangaDexAPI.getCoverArt(manga);
    const coverUrl = MangaDexAPI.getCoverUrl(manga.id, coverFileName, '512');
    const description = MangaDexAPI.getMangaDescription(manga);
    const status = manga.attributes?.status || 'unknown';
    
    const card = document.createElement('div');
    card.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 group';
    
    card.innerHTML = `
        <div class="relative overflow-hidden cursor-pointer" onclick="window.location.href='manga.html?id=${manga.id}'">
            <img 
                src="${coverUrl}" 
                alt="${title}"
                class="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
                onerror="this.src='https://via.placeholder.com/512x720?text=No+Cover'"
            />
            ${lastRead ? `
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                    <p class="text-white text-sm font-bold">Last: Ch. ${lastRead.chapterNumber}</p>
                    <p class="text-gray-300 text-xs">${UI.formatDate(lastRead.lastRead)}</p>
                </div>
            ` : ''}
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
            <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-2 cursor-pointer hover:text-red-500 transition-colors" onclick="window.location.href='manga.html?id=${manga.id}'">
                ${title}
            </h3>
            
            <div class="flex flex-col gap-2 mt-3">
                ${lastRead ? `
                    <button 
                        onclick="continueReading('${manga.id}', '${lastRead.chapterId}')"
                        class="w-full px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold text-sm"
                    >
                        Continue Reading
                    </button>
                ` : ''}
                <button 
                    onclick="viewDetails('${manga.id}')"
                    class="w-full px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-semibold text-sm"
                >
                    View Details
                </button>
            </div>
        </div>
    `;
    
    return card;
}

/**
 * Load bookmarked manga
 */
async function loadBookmarks() {
    const bookmarksGrid = document.getElementById('bookmarksGrid');
    const bookmarkCount = document.getElementById('bookmarkCount');
    
    UI.showSkeletonCards('bookmarksGrid', 5);
    
    const bookmarkIds = Auth.getBookmarks();
    
    if (bookmarkIds.length === 0) {
        UI.showEmptyState('bookmarksGrid', 'No bookmarked manga yet. Start exploring and bookmark your favorites!', 'bookmark');
        bookmarkCount.textContent = '0 Manga';
        return;
    }
    
    bookmarkCount.textContent = `${bookmarkIds.length} Manga`;
    
    try {
        bookmarksGrid.innerHTML = '';
        
        // Fetch each bookmarked manga
        for (const mangaId of bookmarkIds) {
            try {
                const manga = await MangaDexAPI.fetchMangaById(mangaId);
                const card = createLibraryMangaCard(manga);
                bookmarksGrid.appendChild(card);
            } catch (error) {
                console.error(`Error loading bookmark ${mangaId}:`, error);
            }
        }
        
        if (bookmarksGrid.children.length === 0) {
            UI.showEmptyState('bookmarksGrid', 'Failed to load bookmarked manga. Please try again later.', 'bookmark');
        }
        
    } catch (error) {
        console.error('Error loading bookmarks:', error);
        UI.showError('bookmarksGrid', 'Failed to load bookmarks. Please try again later.');
    }
}

/**
 * Load reading history
 */
async function loadHistory() {
    const historyGrid = document.getElementById('historyGrid');
    const historyCount = document.getElementById('historyCount');
    
    UI.showSkeletonCards('historyGrid', 5);
    
    const history = Auth.getReadingHistory();
    const historyEntries = Object.entries(history);
    
    if (historyEntries.length === 0) {
        UI.showEmptyState('historyGrid', 'No reading history yet. Start reading to track your progress!', 'book');
        historyCount.textContent = '0 Manga';
        return;
    }
    
    // Sort by last read date (most recent first)
    historyEntries.sort((a, b) => {
        const dateA = new Date(a[1].lastRead);
        const dateB = new Date(b[1].lastRead);
        return dateB - dateA;
    });
    
    historyCount.textContent = `${historyEntries.length} Manga`;
    
    try {
        historyGrid.innerHTML = '';
        
        // Fetch each manga in history
        for (const [mangaId, historyData] of historyEntries) {
            try {
                const manga = await MangaDexAPI.fetchMangaById(mangaId);
                const card = createLibraryMangaCard(manga, historyData);
                historyGrid.appendChild(card);
            } catch (error) {
                console.error(`Error loading history ${mangaId}:`, error);
            }
        }
        
        if (historyGrid.children.length === 0) {
            UI.showEmptyState('historyGrid', 'Failed to load reading history. Please try again later.', 'book');
        }
        
    } catch (error) {
        console.error('Error loading history:', error);
        UI.showError('historyGrid', 'Failed to load reading history. Please try again later.');
    }
}

/**
 * Continue reading a manga from last chapter
 */
function continueReading(mangaId, chapterId) {
    window.location.href = `reader.html?manga=${mangaId}&chapter=${chapterId}`;
}

/**
 * View manga details
 */
function viewDetails(mangaId) {
    window.location.href = `manga.html?id=${mangaId}`;
}

/**
 * Initialize library page
 */
async function initLibrary() {
    // Check authentication
    if (!checkAuth()) {
        return;
    }
    
    // Load bookmarks and history in parallel
    await Promise.all([
        loadBookmarks(),
        loadHistory()
    ]);
}

// Make functions available globally
window.continueReading = continueReading;
window.viewDetails = viewDetails;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLibrary);
} else {
    initLibrary();
}
