/**
 * UI Helpers Module
 * 
 * Generic UI utilities including:
 * - Dark mode toggle
 * - Loading states
 * - Error handling
 * - Toast notifications
 * - Common UI components
 */

/**
 * Dark Mode Management
 * Preference stored in localStorage
 */
function initDarkMode() {
    const darkMode = localStorage.getItem('darkMode');
    
    if (darkMode === 'true' || (darkMode === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', isDark);
    return isDark;
}

function isDarkMode() {
    return document.documentElement.classList.contains('dark');
}

/**
 * Loading Spinner
 */
function showLoading(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = `
        <div class="flex justify-center items-center py-20">
            <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-500"></div>
        </div>
    `;
}

/**
 * Skeleton Loading for Manga Cards
 */
function showSkeletonCards(containerId, count = 6) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const skeletons = Array(count).fill(null).map(() => `
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden animate-pulse">
            <div class="bg-gray-300 dark:bg-gray-700 h-80"></div>
            <div class="p-4 space-y-3">
                <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
                <div class="flex gap-2">
                    <div class="h-6 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
                    <div class="h-6 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
                </div>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = skeletons;
}

/**
 * Error Display
 */
function showError(containerId, message, retry = null) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const retryButton = retry ? `
        <button onclick="${retry}" class="mt-4 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
            Try Again
        </button>
    ` : '';
    
    container.innerHTML = `
        <div class="flex flex-col items-center justify-center py-20 text-center">
            <svg class="w-24 h-24 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
            <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">Oops! Something went wrong</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">${message}</p>
            ${retryButton}
        </div>
    `;
}

/**
 * Empty State Display
 */
function showEmptyState(containerId, message, icon = 'search') {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const icons = {
        search: `<svg class="w-24 h-24 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>`,
        book: `<svg class="w-24 h-24 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>`,
        bookmark: `<svg class="w-24 h-24 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
        </svg>`
    };
    
    container.innerHTML = `
        <div class="flex flex-col items-center justify-center py-20 text-center">
            ${icons[icon] || icons.search}
            <p class="text-xl text-gray-600 dark:text-gray-400">${message}</p>
        </div>
    `;
}

/**
 * Toast Notifications
 */
let toastTimeout;

function showToast(message, type = 'info', duration = 3000) {
    // Remove existing toast
    const existingToast = document.getElementById('toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    const colors = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500',
        warning: 'bg-yellow-500'
    };
    
    const toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = `fixed bottom-4 right-4 ${colors[type]} text-white px-6 py-4 rounded-lg shadow-lg z-50 transform transition-transform duration-300 translate-y-0`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Slide in animation
    setTimeout(() => {
        toast.style.transform = 'translateY(0)';
    }, 10);
    
    // Auto remove
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.style.transform = 'translateY(150%)';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

/**
 * Update User UI (navbar)
 */
function updateUserUI() {
    const currentUser = Auth.getCurrentUser();
    const userMenuBtn = document.getElementById('userMenuBtn');
    const authButtons = document.getElementById('authButtons');
    
    if (currentUser) {
        if (userMenuBtn) {
            userMenuBtn.classList.remove('hidden');
            userMenuBtn.querySelector('span').textContent = currentUser;
        }
        if (authButtons) {
            authButtons.classList.add('hidden');
        }
    } else {
        if (userMenuBtn) {
            userMenuBtn.classList.add('hidden');
        }
        if (authButtons) {
            authButtons.classList.remove('hidden');
        }
    }
}

/**
 * Initialize common UI elements
 */
function initUI() {
    initDarkMode();
    updateUserUI();
    
    // Dark mode toggle handler
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            const isDark = toggleDarkMode();
            const icon = darkModeToggle.querySelector('svg');
            if (icon) {
                icon.innerHTML = isDark ? 
                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>' :
                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>';
            }
        });
    }
    
    // User menu toggle
    const userMenuBtn = document.getElementById('userMenuBtn');
    const userDropdown = document.getElementById('userDropdown');
    if (userMenuBtn && userDropdown) {
        userMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            userDropdown.classList.toggle('hidden');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            userDropdown.classList.add('hidden');
        });
    }
    
    // Logout handler
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            Auth.logout();
            showToast('Logged out successfully', 'success');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        });
    }
}

/**
 * Debounce function for search inputs
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Format date to readable string
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
}

/**
 * Truncate text to specified length
 */
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
}

// Export all functions
window.UI = {
    initDarkMode,
    toggleDarkMode,
    isDarkMode,
    showLoading,
    showSkeletonCards,
    showError,
    showEmptyState,
    showToast,
    updateUserUI,
    initUI,
    debounce,
    formatDate,
    truncateText
};

// Auto-initialize on DOM load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUI);
} else {
    initUI();
}
