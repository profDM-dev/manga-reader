/**
 * Manga Details Page Logic
 * 
 * Handles:
 * - Fetching and displaying manga details
 * - Loading chapter list (English only)
 * - Bookmark functionality
 * - Reading history integration
 */

let currentMangaId = null;
let currentManga = null;
let allChapters = [];

/**
 * Get manga ID from URL parameters
 */
function getMangaIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

/**
 * Render manga details
 */
function renderMangaDetails(manga) {
    const title = MangaDexAPI.getMangaTitle(manga);
    const description = MangaDexAPI.getMangaDescription(manga);
    const coverFileName = MangaDexAPI.getCoverArt(manga);
    const coverUrl = MangaDexAPI.getCoverUrl(manga.id, coverFileName, '512');
    const author = MangaDexAPI.getAuthor(manga);
    const artist = MangaDexAPI.getArtist(manga);
    const status = manga.attributes?.status || 'unknown';
    const tags = manga.attributes?.tags || [];
    const year = manga.attributes?.year || 'Unknown';
    
    const isBookmarked = Auth.isBookmarked(manga.id);
    const lastRead = Auth.getLastReadChapter(manga.id);
    
    const detailsHtml = `
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div class="md:flex">
                <!-- Cover Image -->
                <div class="md:w-1/3 lg:w-1/4">
                    <img 
                        src="${coverUrl}" 
                        alt="${title}"
                        class="w-full h-auto object-cover"
                        onerror="this.src='https://via.placeholder.com/512x720?text=No+Cover'"
                    />
                </div>
                
                <!-- Details -->
                <div class="md:w-2/3 lg:w-3/4 p-8">
                    <h1 class="text-4xl font-black text-gray-800 dark:text-white mb-4 font-japanese">
                        ${title}
                    </h1>
                    
                    <div class="flex flex-wrap gap-3 mb-6">
                        <span class="px-3 py-1 text-sm font-bold rounded ${
                            status === 'completed' ? 'bg-green-500' : 
                            status === 'ongoing' ? 'bg-blue-500' : 
                            'bg-gray-500'
                        } text-white uppercase">
                            ${status}
                        </span>
                        <span class="px-3 py-1 text-sm font-semibold rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                            ${year}
                        </span>
                    </div>
                    
                    <div class="mb-6 space-y-2">
                        <p class="text-gray-600 dark:text-gray-400">
                            <span class="font-semibold text-gray-800 dark:text-white">Author:</span> ${author}
                        </p>
                        <p class="text-gray-600 dark:text-gray-400">
                            <span class="font-semibold text-gray-800 dark:text-white">Artist:</span> ${artist}
                        </p>
                    </div>
                    
                    <div class="mb-6">
                        <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3">Synopsis</h3>
                        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                            ${description}
                        </p>
                    </div>
                    
                    <div class="mb-6">
                        <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3">Genres</h3>
                        <div class="flex flex-wrap gap-2">
                            ${tags.map(tag => `
                                <span class="px-3 py-1 text-sm bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full">
                                    ${tag.attributes?.name?.en || 'Tag'}
                                </span>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="flex flex-wrap gap-4">
                        <button 
                            id="readFirstBtn" 
                            class="px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-bold text-lg flex items-center space-x-2"
                        >
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                            </svg>
                            <span>Read First Chapter</span>
                        </button>
                        
                        ${lastRead ? `
                            <button 
                                id="continueReadingBtn" 
                                class="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-bold text-lg"
                            >
                                Continue from Ch. ${lastRead.chapterNumber}
                            </button>
                        ` : ''}
                        
                        <button 
                            id="bookmarkBtn" 
                            class="px-8 py-3 ${isBookmarked ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'} text-white rounded-lg transition-colors font-bold text-lg flex items-center space-x-2"
                        >
                            <svg class="w-6 h-6" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                            </svg>
                            <span>${isBookmarked ? 'Bookmarked' : 'Add Bookmark'}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('mangaDetails').innerHTML = detailsHtml;
    
    // Setup event listeners
    setupDetailsEventListeners();
}

/**
 * Render chapter list
 */
function renderChapters(chapters) {
    const chaptersList = document.getElementById('chaptersList');
    
    if (chapters.length === 0) {
        chaptersList.innerHTML = `
            <div class="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
                <p class="text-xl text-gray-600 dark:text-gray-400">
                    No English chapters available for this manga.
                </p>
            </div>
        `;
        return;
    }
    
    // Group chapters by volume (optional)
    const chaptersHtml = chapters.map(chapter => {
        const chapterNum = chapter.attributes?.chapter || '?';
        const title = chapter.attributes?.title || '';
        const pages = chapter.attributes?.pages || '?';
        const date = chapter.attributes?.publishAt || '';
        const scanlationGroup = chapter.relationships?.find(rel => rel.type === 'scanlation_group');
        const groupName = scanlationGroup?.attributes?.name || 'Unknown';
        
        return `
            <div 
                class="bg-white dark:bg-gray-800 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer border border-gray-200 dark:border-gray-700"
                onclick="readChapter('${chapter.id}', '${chapterNum}')"
            >
                <div class="flex justify-between items-start">
                    <div class="flex-1">
                        <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-1">
                            Chapter ${chapterNum}${title ? `: ${title}` : ''}
                        </h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                            ${groupName} • ${pages} pages
                        </p>
                        ${date ? `<p class="text-xs text-gray-500 dark:text-gray-500 mt-1">${UI.formatDate(date)}</p>` : ''}
                    </div>
                    <button class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold">
                        Read
                    </button>
                </div>
            </div>
        `;
    }).join('');
    
    chaptersList.innerHTML = `<div class="space-y-3">${chaptersHtml}</div>`;
}

/**
 * Setup event listeners for details page
 */
function setupDetailsEventListeners() {
    // Read First Chapter button
    const readFirstBtn = document.getElementById('readFirstBtn');
    if (readFirstBtn) {
        readFirstBtn.addEventListener('click', () => {
            if (allChapters.length > 0) {
                const firstChapter = allChapters[0];
                const chapterNum = firstChapter.attributes?.chapter || '1';
                readChapter(firstChapter.id, chapterNum);
            } else {
                UI.showToast('No chapters available', 'error');
            }
        });
    }
    
    // Continue Reading button
    const continueReadingBtn = document.getElementById('continueReadingBtn');
    if (continueReadingBtn) {
        continueReadingBtn.addEventListener('click', () => {
            const lastRead = Auth.getLastReadChapter(currentMangaId);
            if (lastRead) {
                window.location.href = `reader.html?manga=${currentMangaId}&chapter=${lastRead.chapterId}`;
            }
        });
    }
    
    // Bookmark button
    const bookmarkBtn = document.getElementById('bookmarkBtn');
    if (bookmarkBtn) {
        bookmarkBtn.addEventListener('click', () => {
            if (!Auth.isLoggedIn()) {
                UI.showToast('Please login to bookmark manga', 'warning');
                setTimeout(() => {
                    window.location.href = 'login.html?redirect=' + encodeURIComponent(window.location.href);
                }, 1500);
                return;
            }
            
            const result = Auth.toggleBookmark(currentMangaId);
            if (result.bookmarked) {
                UI.showToast('Added to bookmarks', 'success');
                bookmarkBtn.innerHTML = `
                    <svg class="w-6 h-6" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                    </svg>
                    <span>Bookmarked</span>
                `;
                bookmarkBtn.className = 'px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors font-bold text-lg flex items-center space-x-2';
            } else {
                UI.showToast('Removed from bookmarks', 'success');
                bookmarkBtn.innerHTML = `
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                    </svg>
                    <span>Add Bookmark</span>
                `;
                bookmarkBtn.className = 'px-8 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-white rounded-lg transition-colors font-bold text-lg flex items-center space-x-2';
            }
        });
    }
}

/**
 * Navigate to reader page
 */
function readChapter(chapterId, chapterNum) {
    // Check if user is logged in
    if (!Auth.isLoggedIn()) {
        UI.showToast('Please login to read chapters', 'warning');
        setTimeout(() => {
            window.location.href = 'login.html?redirect=' + encodeURIComponent(`reader.html?manga=${currentMangaId}&chapter=${chapterId}`);
        }, 1500);
        return;
    }
    
    window.location.href = `reader.html?manga=${currentMangaId}&chapter=${chapterId}`;
}

/**
 * Load manga details and chapters
 */
async function loadMangaPage() {
    currentMangaId = getMangaIdFromUrl();
    
    if (!currentMangaId) {
        window.location.href = 'index.html';
        return;
    }
    
    // Show loading
    UI.showLoading('mangaDetails');
    UI.showLoading('chaptersList');
    
    try {
        // Fetch manga details
        currentManga = await MangaDexAPI.fetchMangaById(currentMangaId);
        renderMangaDetails(currentManga);
        
        // Fetch chapters
        const chaptersData = await MangaDexAPI.fetchMangaChapters(currentMangaId);
        allChapters = chaptersData.data;
        
        // Sort chapters by chapter number (ascending)
        allChapters.sort((a, b) => {
            const numA = parseFloat(a.attributes?.chapter || 0);
            const numB = parseFloat(b.attributes?.chapter || 0);
            return numA - numB;
        });
        
        renderChapters(allChapters);
        
        // Update page title
        document.title = `${MangaDexAPI.getMangaTitle(currentManga)} - YoruManga`;
        
    } catch (error) {
        console.error('Error loading manga page:', error);
        UI.showError('mangaDetails', 
            'Failed to load manga details. Please try again later.', 
            'loadMangaPage()');
        UI.showError('chaptersList', 
            'Failed to load chapters.', 
            'loadMangaPage()');
    }
}

// Make readChapter available globally
window.readChapter = readChapter;
window.loadMangaPage = loadMangaPage;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadMangaPage);
} else {
    loadMangaPage();
}
