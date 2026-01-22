---
layout: base.njk
title: GitHub Repositories
---

<article>

# GitHub Repositories

Public repositories from my [GitHub profile](https://github.com/PipFoweraker).

<div id="repos-container" class="repos-loading">
    Loading repositories...
</div>

<script>
(async function() {
    const container = document.getElementById('repos-container');

    try {
        const response = await fetch('https://api.github.com/users/PipFoweraker/repos?sort=updated&per_page=100');

        if (!response.ok) {
            throw new Error('Failed to fetch repositories');
        }

        const repos = await response.json();

        // Filter out forks and sort by stars then recent update
        const ownRepos = repos
            .filter(repo => !repo.fork)
            .sort((a, b) => {
                // Sort by stars first, then by update date
                if (b.stargazers_count !== a.stargazers_count) {
                    return b.stargazers_count - a.stargazers_count;
                }
                return new Date(b.updated_at) - new Date(a.updated_at);
            });

        if (ownRepos.length === 0) {
            container.innerHTML = '<p>No public repositories found.</p>';
            return;
        }

        container.className = 'repos-grid';
        container.innerHTML = ownRepos.map(repo => `
            <div class="repo-card">
                <h3><a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a></h3>
                ${repo.description ? `<p>${escapeHtml(repo.description)}</p>` : '<p class="text-faint">No description</p>'}
                <div class="repo-meta">
                    ${repo.language ? `<span><span class="repo-language" data-lang="${repo.language}"></span> ${repo.language}</span>` : ''}
                    ${repo.stargazers_count > 0 ? `<span>★ ${repo.stargazers_count}</span>` : ''}
                    ${repo.forks_count > 0 ? `<span>⑂ ${repo.forks_count}</span>` : ''}
                </div>
            </div>
        `).join('');

    } catch (error) {
        console.error('Error fetching repos:', error);
        container.innerHTML = `
            <p>Unable to load repositories. Please visit
            <a href="https://github.com/PipFoweraker">GitHub directly</a>.</p>
        `;
        container.className = '';
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
})();
</script>

</article>
