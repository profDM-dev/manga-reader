/**
 * Authentication Module
 * 
 * Handles user authentication using localStorage:
 * - User registration with hashed passwords
 * - Login/logout functionality
 * - Session management
 * - Per-user data storage (bookmarks, reading history)
 * 
 * Storage Structure:
 * - users: { username: { passwordHash, createdAt } }
 * - currentUser: username or null
 * - user_{username}_bookmarks: [mangaId1, mangaId2, ...]
 * - user_{username}_history: { mangaId: { chapterId, chapterNumber, lastRead } }
 */

/**
 * Simple hash function for password storage
 * Note: This is NOT cryptographically secure, only for demonstration
 * In production, use proper backend authentication with bcrypt/scrypt
 */
function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    return btoa(hash.toString(16));
}

/**
 * Get all registered users from localStorage
 */
function getUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : {};
}

/**
 * Save users to localStorage
 */
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

/**
 * Register a new user
 * Returns: { success: boolean, message: string }
 */
function register(username, password) {
    // Validation
    if (!username || username.length < 3) {
        return { success: false, message: 'Username must be at least 3 characters long' };
    }

    if (!password || password.length < 6) {
        return { success: false, message: 'Password must be at least 6 characters long' };
    }

    const users = getUsers();

    // Check if username already exists
    if (users[username]) {
        return { success: false, message: 'Username already exists' };
    }

    // Create new user
    users[username] = {
        passwordHash: simpleHash(password),
        createdAt: new Date().toISOString()
    };

    saveUsers(users);

    return { success: true, message: 'Registration successful!' };
}

/**
 * Login user
 * Returns: { success: boolean, message: string, username?: string }
 */
function login(username, password) {
    const users = getUsers();

    // Check if user exists
    if (!users[username]) {
        return { success: false, message: 'Invalid username or password' };
    }

    // Verify password
    const passwordHash = simpleHash(password);
    if (users[username].passwordHash !== passwordHash) {
        return { success: false, message: 'Invalid username or password' };
    }

    // Set current user
    localStorage.setItem('currentUser', username);

    return { success: true, message: 'Login successful!', username };
}

/**
 * Logout current user
 */
function logout() {
    localStorage.removeItem('currentUser');
}

/**
 * Get current logged-in user
 * Returns: username or null
 */
function getCurrentUser() {
    return localStorage.getItem('currentUser');
}

/**
 * Check if user is logged in
 */
function isLoggedIn() {
    return getCurrentUser() !== null;
}

/**
 * Require authentication - redirect to login if not authenticated
 * Used on reader and library pages
 */
function requireAuth() {
    if (!isLoggedIn()) {
        window.location.href = 'login.html?redirect=' + encodeURIComponent(window.location.href);
        return false;
    }
    return true;
}

/**
 * Get user's bookmarks
 * Returns: array of manga IDs
 */
function getBookmarks(username = getCurrentUser()) {
    if (!username) return [];
    const key = `user_${username}_bookmarks`;
    const bookmarks = localStorage.getItem(key);
    return bookmarks ? JSON.parse(bookmarks) : [];
}

/**
 * Add manga to bookmarks
 */
function addBookmark(mangaId, username = getCurrentUser()) {
    if (!username) return false;
    
    const bookmarks = getBookmarks(username);
    if (!bookmarks.includes(mangaId)) {
        bookmarks.push(mangaId);
        const key = `user_${username}_bookmarks`;
        localStorage.setItem(key, JSON.stringify(bookmarks));
        return true;
    }
    return false;
}

/**
 * Remove manga from bookmarks
 */
function removeBookmark(mangaId, username = getCurrentUser()) {
    if (!username) return false;
    
    const bookmarks = getBookmarks(username);
    const index = bookmarks.indexOf(mangaId);
    if (index > -1) {
        bookmarks.splice(index, 1);
        const key = `user_${username}_bookmarks`;
        localStorage.setItem(key, JSON.stringify(bookmarks));
        return true;
    }
    return false;
}

/**
 * Check if manga is bookmarked
 */
function isBookmarked(mangaId, username = getCurrentUser()) {
    if (!username) return false;
    return getBookmarks(username).includes(mangaId);
}

/**
 * Toggle bookmark status
 */
function toggleBookmark(mangaId, username = getCurrentUser()) {
    if (isBookmarked(mangaId, username)) {
        return { bookmarked: false, action: removeBookmark(mangaId, username) };
    } else {
        return { bookmarked: true, action: addBookmark(mangaId, username) };
    }
}

/**
 * Get user's reading history
 * Returns: { mangaId: { chapterId, chapterNumber, lastRead, mangaTitle } }
 */
function getReadingHistory(username = getCurrentUser()) {
    if (!username) return {};
    const key = `user_${username}_history`;
    const history = localStorage.getItem(key);
    return history ? JSON.parse(history) : {};
}

/**
 * Update reading history for a manga/chapter
 * Automatically called when user reads a chapter
 */
function updateReadingHistory(mangaId, chapterId, chapterNumber, mangaTitle = null, username = getCurrentUser()) {
    if (!username) return false;
    
    const history = getReadingHistory(username);
    history[mangaId] = {
        chapterId,
        chapterNumber,
        lastRead: new Date().toISOString(),
        mangaTitle
    };
    
    const key = `user_${username}_history`;
    localStorage.setItem(key, JSON.stringify(history));
    return true;
}

/**
 * Get last read chapter for a manga
 */
function getLastReadChapter(mangaId, username = getCurrentUser()) {
    const history = getReadingHistory(username);
    return history[mangaId] || null;
}

/**
 * Clear all user data (for testing/debugging)
 */
function clearUserData(username = getCurrentUser()) {
    if (!username) return;
    
    localStorage.removeItem(`user_${username}_bookmarks`);
    localStorage.removeItem(`user_${username}_history`);
}

// Export all functions
window.Auth = {
    register,
    login,
    logout,
    getCurrentUser,
    isLoggedIn,
    requireAuth,
    getBookmarks,
    addBookmark,
    removeBookmark,
    isBookmarked,
    toggleBookmark,
    getReadingHistory,
    updateReadingHistory,
    getLastReadChapter,
    clearUserData
};
