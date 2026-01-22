/**
 * Extended Manga Collection Builder
 * Fetches real manga data with covers from MangaDex API
 */

class MangaCollection {
    constructor() {
        this.collection = [];
        this.isBuilding = false;
    }

    /**
     * Build a collection of 800-1000 manga with real data from MangaDex
     */
    async buildCollection(targetCount = 1000) {
        if (this.isBuilding) return;
        this.isBuilding = true;
        
        console.log(`Building collection of ${targetCount} manga...`);
        
        const batchSize = 100; // MangaDex limit
        const batches = Math.ceil(targetCount / batchSize);
        
        for (let i = 0; i < batches; i++) {
            const offset = i * batchSize;
            await this.fetchBatch(batchSize, offset);
            
            console.log(`Progress: ${this.collection.length}/${targetCount}`);
            
            // Rate limiting - wait 250ms between requests
            await this.sleep(250);
        }
        
        this.isBuilding = false;
        console.log(`Collection complete: ${this.collection.length} manga`);
        return this.collection;
    }

    /**
     * Fetch a batch of manga from MangaDex
     */
    async fetchBatch(limit, offset) {
        try {
            const params = new URLSearchParams({
                limit: limit,
                offset: offset,
                includes: ['cover_art', 'author', 'artist'],
                contentRating: ['safe', 'suggestive'],
                order: { followedCount: 'desc' },
                hasAvailableChapters: true,
                availableTranslatedLanguage: ['en']
            });

            const response = await fetch(`https://api.mangadex.org/manga?${params}`);
            const data = await response.json();

            if (data.data) {
                data.data.forEach(manga => {
                    this.collection.push(this.formatManga(manga));
                });
            }
        } catch (error) {
            console.error('Error fetching batch:', error);
        }
    }

    /**
     * Format manga data to our schema
     */
    formatManga(manga) {
        const attributes = manga.attributes;
        const coverRel = manga.relationships.find(rel => rel.type === 'cover_art');
        const coverFileName = coverRel?.attributes?.fileName;
        
        // Get title
        const title = attributes.title.en || 
                     attributes.title['ja-ro'] || 
                     Object.values(attributes.title)[0];
        
        // Get alt titles
        const altTitles = attributes.altTitles
            .map(alt => alt.en || Object.values(alt)[0])
            .filter(Boolean)
            .slice(0, 3);
        
        // Get genres/tags
        const genres = attributes.tags
            .filter(tag => tag.attributes.group === 'genre')
            .map(tag => tag.attributes.name.en)
            .slice(0, 5);
        
        // Cover URL
        const coverUrl = coverFileName 
            ? `https://uploads.mangadex.org/covers/${manga.id}/${coverFileName}.256.jpg`
            : 'assets/placeholder.svg';
        
        // Manga detail URL (can open in new tab)
        const mangaUrl = `manga.html?id=${manga.id}`;
        
        // Description
        const description = attributes.description?.en || 
                          attributes.description?.['ja-ro'] || 
                          Object.values(attributes.description || {})[0] || 
                          'No description available.';
        
        return {
            id: manga.id,
            title: title,
            cover: coverUrl,
            url: mangaUrl,
            altTitles: altTitles,
            genres: genres,
            status: attributes.status || 'unknown',
            year: attributes.year || null,
            description: this.truncateDescription(description)
        };
    }

    /**
     * Truncate description to 2-4 lines
     */
    truncateDescription(desc) {
        if (!desc) return 'No description available.';
        
        const maxLength = 200;
        if (desc.length <= maxLength) return desc;
        
        return desc.substring(0, maxLength).trim() + '...';
    }

    /**
     * Sleep utility
     */
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Export collection as JSON
     */
    exportJSON() {
        return JSON.stringify(this.collection, null, 2);
    }

    /**
     * Download collection as JSON file
     */
    downloadJSON(filename = 'manga-collection.json') {
        const json = this.exportJSON();
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    }

    /**
     * Load collection from localStorage
     */
    loadFromStorage() {
        const stored = localStorage.getItem('mangaCollection');
        if (stored) {
            this.collection = JSON.parse(stored);
            return true;
        }
        return false;
    }

    /**
     * Save collection to localStorage
     */
    saveToStorage() {
        localStorage.setItem('mangaCollection', JSON.stringify(this.collection));
    }
}

// Initialize and expose globally
window.MangaCollection = new MangaCollection();

/**
 * Quick build function - builds collection in background
 */
window.buildMangaCollection = async function(count = 1000) {
    console.log('Starting manga collection build...');
    UI.showToast('Building manga collection...', 'info');
    
    try {
        await window.MangaCollection.buildCollection(count);
        window.MangaCollection.saveToStorage();
        UI.showToast(`Collection complete: ${window.MangaCollection.collection.length} manga`, 'success');
        
        // Automatically download
        window.MangaCollection.downloadJSON();
        
        return window.MangaCollection.collection;
    } catch (error) {
        console.error('Build failed:', error);
        UI.showToast('Failed to build collection', 'error');
    }
};

/**
 * Quick export function
 */
window.exportMangaJSON = function() {
    if (window.MangaCollection.collection.length === 0) {
        if (!window.MangaCollection.loadFromStorage()) {
            UI.showToast('No collection to export. Build one first!', 'error');
            return;
        }
    }
    
    window.MangaCollection.downloadJSON();
    UI.showToast('Collection exported!', 'success');
};
