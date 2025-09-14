// GitHub API integration for projects
class GitHubAPI {
    constructor() {
        this.baseURL = 'https://api.github.com';
        this.username = 'PipFoweraker';
    }

    async fetchPublicRepos() {
        try {
            const response = await fetch(`${this.baseURL}/users/${this.username}/repos?type=public&sort=updated&per_page=50`);
            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.status}`);
            }
            const repos = await response.json();
            
            // Filter out forks and convert to our project format
            return repos
                .filter(repo => !repo.fork)
                .map(repo => ({
                    id: repo.id,
                    name: repo.name,
                    description: repo.description || 'No description available',
                    github_url: repo.html_url,
                    live_url: repo.homepage || null,
                    language: repo.language || 'Unknown',
                    topics: repo.topics || [],
                    stars: repo.stargazers_count,
                    forks: repo.forks_count,
                    updated: repo.updated_at,
                    created: repo.created_at,
                    featured: false, // Can be overridden in local data
                    status: 'active'
                }));
        } catch (error) {
            console.error('Error fetching GitHub repos:', error);
            return [];
        }
    }

    async getRepoLanguages(repoName) {
        try {
            const response = await fetch(`${this.baseURL}/repos/${this.username}/${repoName}/languages`);
            if (!response.ok) return {};
            return await response.json();
        } catch (error) {
            console.error(`Error fetching languages for ${repoName}:`, error);
            return {};
        }
    }
}

// Enhanced content renderer for projects
class ProjectRenderer {
    constructor(dataManager) {
        this.dataManager = dataManager;
        this.githubAPI = new GitHubAPI();
    }

    async renderProjects(containerId, options = {}) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Show loading state
        container.innerHTML = '<div class="loading">Loading projects from GitHub...</div>';

        try {
            // Fetch from both local data and GitHub API
            const [localData, githubRepos] = await Promise.all([
                this.dataManager.loadData('projects'),
                this.githubAPI.fetchPublicRepos()
            ]);

            // Combine local project data with GitHub data
            let projects = [];
            
            if (localData && localData.projects) {
                // Start with local projects
                projects = [...localData.projects];
                
                // Update local projects with fresh GitHub data
                projects = projects.map(localProject => {
                    const githubProject = githubRepos.find(repo => 
                        repo.name === localProject.name || 
                        repo.github_url === localProject.github_url
                    );
                    
                    if (githubProject) {
                        // Merge local config with GitHub data
                        return {
                            ...githubProject,
                            featured: localProject.featured,
                            status: localProject.status,
                            // Keep local URLs if they exist
                            live_url: localProject.live_url || githubProject.live_url
                        };
                    }
                    return localProject;
                });

                // Add any GitHub repos not in local data
                const localRepoNames = projects.map(p => p.name);
                const newGithubRepos = githubRepos.filter(repo => 
                    !localRepoNames.includes(repo.name)
                );
                projects = [...projects, ...newGithubRepos];
            } else {
                // If no local data, use all GitHub repos
                projects = githubRepos;
            }

            // Filter and sort
            let filteredProjects = projects.filter(p => p.status !== 'placeholder');
            
            if (options.featuredOnly) {
                filteredProjects = filteredProjects.filter(p => p.featured);
            }

            // Sort: featured first, then by update date
            filteredProjects.sort((a, b) => {
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                return new Date(b.updated || b.updated_at) - new Date(a.updated || a.updated_at);
            });

            if (options.limit) {
                filteredProjects = filteredProjects.slice(0, options.limit);
            }

            // Render projects
            container.innerHTML = filteredProjects.map(project => 
                this.renderProjectCard(project)
            ).join('');

        } catch (error) {
            console.error('Error rendering projects:', error);
            container.innerHTML = '<div class="error">Failed to load projects. Please try again later.</div>';
        }
    }

    renderProjectCard(project) {
        const isPlaceholder = this.dataManager.isPlaceholder(project.name);
        const statusClass = isPlaceholder ? 'placeholder' : '';
        const featuredClass = project.featured ? 'featured' : '';
        
        const topics = (project.topics || []).slice(0, 4).map(topic => 
            `<span class="topic-tag">${topic}</span>`
        ).join('');

        const stats = project.stars !== undefined ? `
            <div class="project-stats">
                <span class="stat">⭐ ${project.stars}</span>
                <span class="stat">🍴 ${project.forks || 0}</span>
            </div>
        ` : '';

        const liveLink = project.live_url ? `
            <a href="${project.live_url}" target="_blank" class="project-link live-link" title="View Live">
                🌐 Live Demo
            </a>
        ` : '';

        const updatedDate = project.updated || project.updated_at ? 
            this.dataManager.formatDate(project.updated || project.updated_at) : '';

        return `
            <div class="project-card ${statusClass} ${featuredClass}">
                ${project.featured ? '<div class="featured-badge">Featured</div>' : ''}
                
                <div class="project-header">
                    <h3 class="project-title">${project.name}</h3>
                    <div class="project-language">
                        <span class="language-dot" style="background-color: ${this.getLanguageColor(project.language)}"></span>
                        ${project.language}
                    </div>
                </div>

                <p class="project-description">${project.description}</p>

                <div class="project-topics">${topics}</div>

                ${stats}

                <div class="project-links">
                    <a href="${project.github_url}" target="_blank" class="project-link github-link" title="View on GitHub">
                        📁 GitHub
                    </a>
                    ${liveLink}
                </div>

                ${updatedDate ? `<div class="project-updated">Updated ${updatedDate}</div>` : ''}
            </div>
        `;
    }

    getLanguageColor(language) {
        const colors = {
            'JavaScript': '#f1e05a',
            'TypeScript': '#2b7489',
            'Python': '#3572A5',
            'HTML': '#e34c26',
            'CSS': '#563d7c',
            'Vue': '#4FC08D',
            'React': '#61DAFB',
            'Go': '#00ADD8',
            'Rust': '#dea584',
            'Java': '#b07219',
            'C++': '#f34b7d',
            'C': '#555555',
            'Shell': '#89e051',
            'Dockerfile': '#384d54'
        };
        return colors[language] || '#586069';
    }
}

// Add projects renderer to the global DataSystem
if (window.DataSystem) {
    window.DataSystem.projectRenderer = new ProjectRenderer(window.DataSystem.dataManager);
}
