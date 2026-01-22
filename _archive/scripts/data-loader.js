// Data loading and rendering utilities
class DataManager {
    constructor() {
        this.cache = new Map();
    }

    async loadData(fileName) {
        if (this.cache.has(fileName)) {
            return this.cache.get(fileName);
        }

        try {
            const response = await fetch(`data/${fileName}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load ${fileName}: ${response.status}`);
            }
            const data = await response.json();
            this.cache.set(fileName, data);
            return data;
        } catch (error) {
            console.error(`Error loading ${fileName}:`, error);
            return null;
        }
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    createTag(text) {
        return `<span class="tag">${text}</span>`;
    }

    isPlaceholder(text) {
        return text === "**PLACEHOLDER CONTENT**";
    }
}

// Content renderers for different data types
class ContentRenderer {
    constructor(dataManager) {
        this.dataManager = dataManager;
    }

    renderAphorisms(aphorisms, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = aphorisms.map(aphorism => {
            const statusClass = this.dataManager.isPlaceholder(aphorism.text) ? 'placeholder' : '';
            const tags = aphorism.tags.map(tag => this.dataManager.createTag(tag)).join(' ');
            
            return `
                <div class="aphorism-item ${statusClass}">
                    <blockquote class="aphorism-text">${aphorism.text}</blockquote>
                    <div class="aphorism-meta">
                        <span class="epistemic-status">${aphorism.epistemic_status}</span>
                        <span class="date">${this.dataManager.formatDate(aphorism.date_added)}</span>
                        <div class="tags">${tags}</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderDrafts(drafts, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = drafts.map(draft => {
            const statusClass = this.dataManager.isPlaceholder(draft.title) ? 'placeholder' : '';
            const tags = draft.tags.map(tag => this.dataManager.createTag(tag)).join(' ');
            const statusBadge = `<span class="status-badge status-${draft.status}">${draft.status}</span>`;
            
            return `
                <div class="draft-item ${statusClass}">
                    <h3 class="draft-title">${draft.title} ${statusBadge}</h3>
                    <p class="draft-description">${draft.description}</p>
                    <div class="draft-meta">
                        <span class="date">${this.dataManager.formatDate(draft.date_added)}</span>
                        <span class="completion">${draft.completion_percentage}% complete</span>
                        <div class="tags">${tags}</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderLibrary(library, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        let html = '';
        
        if (library.papers && library.papers.length > 0) {
            html += '<div class="library-section"><h3>Papers</h3>';
            html += library.papers.map(item => this.renderLibraryItem(item)).join('');
            html += '</div>';
        }

        if (library.books && library.books.length > 0) {
            html += '<div class="library-section"><h3>Books</h3>';
            html += library.books.map(item => this.renderLibraryItem(item)).join('');
            html += '</div>';
        }

        if (library.links && library.links.length > 0) {
            html += '<div class="library-section"><h3>Links</h3>';
            html += library.links.map(item => this.renderLibraryItem(item)).join('');
            html += '</div>';
        }

        container.innerHTML = html;
    }

    renderLibraryItem(item) {
        const statusClass = this.dataManager.isPlaceholder(item.title) ? 'placeholder' : '';
        const tags = item.tags.map(tag => this.dataManager.createTag(tag)).join(' ');
        
        return `
            <div class="library-item ${statusClass}">
                <h4><a href="${item.url}" target="_blank">${item.title}</a></h4>
                <p>${item.description}</p>
                <div class="library-meta">
                    <span class="date">Added ${this.dataManager.formatDate(item.date_added)}</span>
                    <div class="tags">${tags}</div>
                </div>
            </div>
        `;
    }

    renderMemes(memes, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = memes.map(meme => {
            const statusClass = this.dataManager.isPlaceholder(meme.title) ? 'placeholder' : '';
            const tags = meme.tags.map(tag => this.dataManager.createTag(tag)).join(' ');
            
            return `
                <div class="meme-item ${statusClass}">
                    <img src="${meme.image_url}" alt="${meme.title}" loading="lazy">
                    <div class="meme-info">
                        <h3>${meme.title}</h3>
                        <p>${meme.description}</p>
                        <div class="meme-meta">
                            <span class="source">${meme.source}</span>
                            <span class="date">${this.dataManager.formatDate(meme.date_added)}</span>
                            <div class="tags">${tags}</div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderBlogPosts(posts, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const publishedPosts = posts.filter(post => post.status === 'published');
        
        container.innerHTML = publishedPosts.map(post => {
            const statusClass = this.dataManager.isPlaceholder(post.title) ? 'placeholder' : '';
            const tags = post.tags.map(tag => this.dataManager.createTag(tag)).join(' ');
            
            return `
                <article class="blog-post ${statusClass}">
                    <h2><a href="${post.file_path || '#'}">${post.title}</a></h2>
                    <div class="post-meta">
                        <span class="author">By ${post.author}</span>
                        <span class="date">${this.dataManager.formatDate(post.date)}</span>
                        <div class="tags">${tags}</div>
                    </div>
                    <p class="post-description">${post.description}</p>
                </article>
            `;
        }).join('');
    }

    renderEssays(essays, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = essays.map(essay => {
            const statusClass = this.dataManager.isPlaceholder(essay.title) ? 'placeholder' : '';
            const tags = essay.tags.map(tag => this.dataManager.createTag(tag)).join(' ');
            const statusBadge = `<span class="status-badge status-${essay.status}">${essay.status}</span>`;
            
            return `
                <div class="essay-item ${statusClass}">
                    <h3>${essay.title} ${statusBadge}</h3>
                    <p>${essay.description}</p>
                    <div class="essay-meta">
                        <span class="date">${this.dataManager.formatDate(essay.date)}</span>
                        ${essay.word_count > 0 ? `<span class="word-count">${essay.word_count} words</span>` : ''}
                        <div class="tags">${tags}</div>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// Initialize data loading system
const dataManager = new DataManager();
const renderer = new ContentRenderer(dataManager);

// Export for use in individual pages
window.DataSystem = {
    dataManager,
    renderer
};
