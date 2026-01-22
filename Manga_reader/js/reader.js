/**
 * Reader Page Logic
 * 
 * Handles:
 * - Authentication check (redirect if not logged in)
 * - Loading chapter pages from MangaDex
 * - Vertical scrolling reader with all pages loaded
 * - Chapter navigation (prev/next)
 * - Reading history updates
 * - UI controls (show/hide)
 */

let currentMangaId = null;
let currentChapterId = null;
let allChapters = [];
let currentChapterIndex = -1;
let totalPages = 0;
let controlsVisible = true;

/**
 * Get parameters from URL
 */
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        mangaId: params.get('manga'),
        chapterId: params.get('chapter')
    };
}

/**
 * Check authentication
 * If not logged in, redirect to login page
 */
function checkAuth() {
    if (!Auth.isLoggedIn()) {
        const currentUrl = encodeURIComponent(window.location.href);
        window.location.href = `login.html?redirect=${currentUrl}`;
        return false;
    }
    return true;
}

/**
 * Load all chapters for the manga (for navigation)
 */
async function loadAllChapters() {
    try {
        const chaptersData = await MangaDexAPI.fetchMangaChapters(currentMangaId);
        allChapters = chaptersData.data;
        
        // Sort chapters by chapter number
        allChapters.sort((a, b) => {
            const numA = parseFloat(a.attributes?.chapter || 0);
            const numB = parseFloat(b.attributes?.chapter || 0);
            return numA - numB;
        });
        
        // Find current chapter index
        currentChapterIndex = allChapters.findIndex(ch => ch.id === currentChapterId);
        
        // Update navigation buttons
        updateNavigationButtons();
        
    } catch (error) {
        console.error('Error loading chapters:', error);
    }
}

/**
 * Update navigation button states
 */
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevChapterBtn');
    const nextBtn = document.getElementById('nextChapterBtn');
    
    if (prevBtn) {
        prevBtn.disabled = currentChapterIndex <= 0;
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentChapterIndex >= allChapters.length - 1 || currentChapterIndex === -1;
    }
}

/**
 * Navigate to previous chapter
 */
function goToPrevChapter() {
    if (currentChapterIndex > 0) {
        const prevChapter = allChapters[currentChapterIndex - 1];
        window.location.href = `reader.html?manga=${currentMangaId}&chapter=${prevChapter.id}`;
    }
}

/**
 * Navigate to next chapter
 */
function goToNextChapter() {
    if (currentChapterIndex < allChapters.length - 1 && currentChapterIndex !== -1) {
        const nextChapter = allChapters[currentChapterIndex + 1];
        window.location.href = `reader.html?manga=${currentMangaId}&chapter=${nextChapter.id}`;
    }
}

/**
 * Load and display chapter pages
 */
async function loadChapterPages() {
    const pagesContainer = document.getElementById('pagesContainer');
    const loadingOverlay = document.getElementById('loadingOverlay');
    
    try {
        // Fetch chapter data
        const chapterData = await MangaDexAPI.fetchChapterPages(currentChapterId);
        const baseUrl = chapterData.baseUrl;
        const hash = chapterData.chapter.hash;
        const pages = chapterData.chapter.data; // High quality images
        
        totalPages = pages.length;
        
        // Hide loading overlay
        loadingOverlay.classList.add('hidden');
        
        // Create image elements for all pages
        pagesContainer.innerHTML = '';
        
        pages.forEach((filename, index) => {
            const pageUrl = `${baseUrl}/data/${hash}/${filename}`;
            
            const pageContainer = document.createElement('div');
            pageContainer.className = 'mb-2';
            pageContainer.id = `page-${index + 1}`;
            
            const img = document.createElement('img');
            img.src = pageUrl;
            img.alt = `Page ${index + 1}`;
            img.className = 'reader-page';
            img.loading = index < 3 ? 'eager' : 'lazy'; // Eager load first 3 pages
            
            // Error handling
            img.onerror = () => {
                img.src = 'https://via.placeholder.com/800x1200?text=Failed+to+load+page';
            };
            
            pageContainer.appendChild(img);
            pagesContainer.appendChild(pageContainer);
        });
        
        // Update page progress
        updatePageProgress();
        
        // Update reading history
        const manga = await MangaDexAPI.fetchMangaById(currentMangaId);
        const chapterNum = allChapters[currentChapterIndex]?.attributes?.chapter || '?';
        Auth.updateReadingHistory(
            currentMangaId, 
            currentChapterId, 
            chapterNum,
            MangaDexAPI.getMangaTitle(manga)
        );
        
    } catch (error) {
        console.error('Error loading chapter pages:', error);
        loadingOverlay.innerHTML = `
            <div class="text-center">
                <svg class="w-24 h-24 text-red-500 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
                <p class="text-white text-xl font-semibold mb-4">Failed to load chapter</p>
                <button onclick="window.location.reload()" class="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                    Try Again
                </button>
            </div>
        `;
    }
}

/**
 * Update page progress indicator
 * Tracks which page is currently visible based on scroll position
 */
function updatePageProgress() {
    const pageProgress = document.getElementById('pageProgress');
    
    // Find which page is currently in view
    const viewportMiddle = window.scrollY + (window.innerHeight / 2);
    let currentPage = 1;
    
    const pages = document.querySelectorAll('.reader-page');
    pages.forEach((page, index) => {
        const rect = page.getBoundingClientRect();
        const pageTop = window.scrollY + rect.top;
        const pageBottom = pageTop + rect.height;
        
        if (viewportMiddle >= pageTop && viewportMiddle <= pageBottom) {
            currentPage = index + 1;
        }
    });
    
    pageProgress.textContent = `Page ${currentPage} of ${totalPages}`;
}

/**
 * Toggle controls visibility
 */
function toggleControls() {
    const readerControls = document.getElementById('readerControls');
    const bottomControls = document.getElementById('bottomControls');
    
    controlsVisible = !controlsVisible;
    
    if (controlsVisible) {
        readerControls.style.transform = 'translateY(0)';
        bottomControls.style.transform = 'translateY(0)';
    } else {
        readerControls.style.transform = 'translateY(-100%)';
        bottomControls.style.transform = 'translateY(100%)';
    }
}

/**
 * Auto-hide controls after inactivity
 */
let hideControlsTimeout;

function resetHideControlsTimer() {
    clearTimeout(hideControlsTimeout);
    
    // Show controls
    if (!controlsVisible) {
        toggleControls();
    }
    
    // Hide after 3 seconds of inactivity
    hideControlsTimeout = setTimeout(() => {
        if (controlsVisible) {
            toggleControls();
        }
    }, 3000);
}

/**
 * Update chapter info display
 */
async function updateChapterInfo() {
    try {
        const manga = await MangaDexAPI.fetchMangaById(currentMangaId);
        const mangaTitle = MangaDexAPI.getMangaTitle(manga);
        const chapterNum = allChapters[currentChapterIndex]?.attributes?.chapter || '?';
        const chapterTitle = allChapters[currentChapterIndex]?.attributes?.title || '';
        
        document.getElementById('mangaTitle').textContent = mangaTitle;
        document.getElementById('chapterTitle').textContent = `Chapter ${chapterNum}${chapterTitle ? ': ' + chapterTitle : ''}`;
        document.title = `Ch. ${chapterNum} - ${mangaTitle} - YoruManga`;
        
    } catch (error) {
        console.error('Error updating chapter info:', error);
    }
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    // Back button
    document.getElementById('backBtn').addEventListener('click', () => {
        window.location.href = `manga.html?id=${currentMangaId}`;
    });
    
    // Toggle controls button
    document.getElementById('toggleControls').addEventListener('click', toggleControls);
    
    // Navigation buttons
    document.getElementById('prevChapterBtn').addEventListener('click', goToPrevChapter);
    document.getElementById('nextChapterBtn').addEventListener('click', goToNextChapter);
    
    // Scroll listener for page progress
    window.addEventListener('scroll', UI.debounce(updatePageProgress, 100));
    
    // Mouse/touch movement to show controls
    document.addEventListener('mousemove', resetHideControlsTimer);
    document.addEventListener('touchstart', resetHideControlsTimer);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            goToPrevChapter();
        } else if (e.key === 'ArrowRight') {
            goToNextChapter();
        } else if (e.key === 'Escape') {
            window.location.href = `manga.html?id=${currentMangaId}`;
        } else if (e.key === 'f' || e.key === 'F') {
            toggleControls();
        }
    });
}

/**
 * Initialize reader page
 */
async function initReader() {
    // Check authentication first
    if (!checkAuth()) {
        return;
    }
    
    // Get URL parameters
    const params = getUrlParams();
    currentMangaId = params.mangaId;
    currentChapterId = params.chapterId;
    
    if (!currentMangaId || !currentChapterId) {
        window.location.href = 'index.html';
        return;
    }
    
    // Setup event listeners
    setupEventListeners();
    
    // Load data
    await loadAllChapters();
    await updateChapterInfo();
    await loadChapterPages();
    
    // Start auto-hide timer
    resetHideControlsTimer();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReader);
} else {
    initReader();
}
