/**
 * Markdown Content Loader
 * Integrates markdown files with existing JSON metadata system
 * Supports Long Now date formatting
 */

class MarkdownContentLoader {
    constructor() {
        this.cache = new Map();
    }

    /**
     * Load markdown content for a specific post/essay
     * @param {string} category - Category (blog, essays, drafts)
     * @param {string} filePath - Path to markdown file
     * @returns {Promise<string>} - Rendered HTML content
     */
    async loadMarkdownContent(category, filePath) {
        const cacheKey = `${category}:${filePath}`;
        
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }

        try {
            const response = await fetch(filePath);
            const markdownText = await response.text();
            
            // Basic markdown to HTML conversion (can be enhanced with a proper parser)
            const htmlContent = this.parseMarkdown(markdownText);
            
            this.cache.set(cacheKey, htmlContent);
            return htmlContent;
        } catch (error) {
            console.error(`Failed to load markdown content: ${filePath}`, error);
            return `<p>Content could not be loaded.</p>`;
        }
    }

    /**
     * Basic markdown parser (simplified - can integrate with marked.js or similar)
     * @param {string} markdown - Raw markdown text
     * @returns {string} - HTML string
     */
    parseMarkdown(markdown) {
        let html = markdown;
        
        // Headers
        html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
        html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
        
        // Bold
        html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
        
        // Italic
        html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');
        
        // Links
        html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>');
        
        // Paragraphs
        html = html.replace(/\n\n/gim, '</p><p>');
        html = '<p>' + html + '</p>';
        
        // Clean up empty paragraphs
        html = html.replace(/<p><\/p>/gim, '');
        
        return html;
    }

    /**
     * Render a content item with its metadata
     * @param {Object} item - Content item from JSON
     * @param {string} category - Content category
     * @returns {Promise<Object>} - Item with rendered content
     */
    async renderContentItem(item, category) {
        const rendered = { ...item };
        
        // Format date using Long Now
        if (item.date && window.LongNowDate) {
            rendered.formattedDate = window.LongNowDate.format(item.date, { style: 'full' });
        }
        
        // Load markdown content if file_path exists
        if (item.file_path) {
            rendered.content = await this.loadMarkdownContent(category, item.file_path);
        }
        
        return rendered;
    }

    /**
     * Create a new content item template
     * @param {string} category - Content category
     * @param {string} topic - Topic subdirectory
     * @param {Object} metadata - Basic metadata
     * @returns {Object} - New content item template
     */
    createContentTemplate(category, topic, metadata = {}) {
        const now = new Date();
        const longNowDate = window.LongNowDate ? window.LongNowDate.today() : now.toISOString().split('T')[0];
        
        const slug = metadata.title ? 
            metadata.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') :
            'untitled-post';
            
        return {
            id: Date.now(), // Simple ID generation
            title: metadata.title || 'Untitled',
            slug: slug,
            date: longNowDate,
            author: metadata.author || 'Pip',
            description: metadata.description || '',
            status: metadata.status || 'draft',
            tags: metadata.tags || [],
            topic: topic,
            file_path: `${category}/${topic}/${slug}.md`,
            epistemic_status: metadata.epistemic_status || 'medium',
            completion_status: metadata.completion_status || '0%'
        };
    }

    /**
     * Generate markdown file template
     * @param {Object} item - Content item metadata
     * @returns {string} - Markdown file content template
     */
    generateMarkdownTemplate(item) {
        return `# ${item.title}

*Published: ${item.formattedDate || item.date}*  
*Status: ${item.status}*  
*Epistemic Status: ${item.epistemic_status}*

${item.description}

## Content

Write your content here...

---

*Tags: ${item.tags.join(', ')}*
`;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MarkdownContentLoader;
}

// Global availability for browser use
if (typeof window !== 'undefined') {
    window.MarkdownContentLoader = MarkdownContentLoader;
}
