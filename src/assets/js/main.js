/**
 * Pip Foweraker - Main JavaScript
 * Progressive enhancement - site works without JS
 */

(function() {
    'use strict';

    // ==================== //
    // DARK MODE TOGGLE     //
    // ==================== //

    const DARK_MODE_KEY = 'pip-dark-mode';

    function getDarkModePreference() {
        // Check localStorage first
        const stored = localStorage.getItem(DARK_MODE_KEY);
        if (stored !== null) {
            return stored === 'true';
        }
        // Fall back to system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    function setDarkMode(enabled) {
        document.body.classList.toggle('dark-mode', enabled);
        localStorage.setItem(DARK_MODE_KEY, enabled);

        // Update toggle button if it exists
        const toggle = document.querySelector('.dark-mode-toggle');
        if (toggle) {
            toggle.setAttribute('aria-pressed', enabled);
            toggle.textContent = enabled ? 'Light' : 'Dark';
        }
    }

    function initDarkMode() {
        // Apply preference immediately
        const prefersDark = getDarkModePreference();
        setDarkMode(prefersDark);

        // Listen for system preference changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            // Only auto-switch if user hasn't explicitly set preference
            if (localStorage.getItem(DARK_MODE_KEY) === null) {
                setDarkMode(e.matches);
            }
        });

        // Create toggle button if it doesn't exist
        createDarkModeToggle();
    }

    function createDarkModeToggle() {
        // Add to nav if not already present
        const nav = document.querySelector('.site-nav');
        if (!nav || nav.querySelector('.dark-mode-toggle')) return;

        const toggle = document.createElement('button');
        toggle.className = 'dark-mode-toggle';
        toggle.type = 'button';
        toggle.setAttribute('aria-pressed', getDarkModePreference());
        toggle.textContent = getDarkModePreference() ? 'Light' : 'Dark';

        toggle.addEventListener('click', () => {
            const newState = !document.body.classList.contains('dark-mode');
            setDarkMode(newState);
        });

        nav.appendChild(toggle);
    }

    // ==================== //
    // SMOOTH SCROLLING     //
    // ==================== //

    function initSmoothScrolling() {
        // Handle anchor links smoothly
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Update URL without jumping
                    history.pushState(null, null, targetId);
                }
            });
        });
    }

    // ==================== //
    // EXTERNAL LINK ICONS  //
    // ==================== //

    function initExternalLinks() {
        // Mark external links
        document.querySelectorAll('a[href^="http"]').forEach(link => {
            if (!link.hostname.includes('pipfoweraker.com') && !link.hostname.includes('localhost')) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
                // Optionally add visual indicator
                if (!link.querySelector('.external-icon')) {
                    link.classList.add('external-link');
                }
            }
        });
    }

    // ==================== //
    // INITIALIZATION       //
    // ==================== //

    function init() {
        initDarkMode();
        initSmoothScrolling();
        initExternalLinks();
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
