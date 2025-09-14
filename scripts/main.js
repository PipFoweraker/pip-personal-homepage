// main.js - Navigation and interactive functionality

document.addEventListener('DOMContentLoaded', function() {
  // Navigation: highlight active section and show/hide panels
  const navLinks = document.querySelectorAll('.lab-nav a');
  const sections = document.querySelectorAll('.lab-section');

  function showSection(id) {
    sections.forEach(sec => {
      if (sec.id === id) {
        sec.style.display = '';
      } else {
        sec.style.display = 'none';
      }
    });
    navLinks.forEach(link => {
      if (link.getAttribute('href') === '#' + id) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Only intercept anchor links (starting with #), let page links work normally
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.replace('#', '');
        showSection(targetId);
        history.replaceState(null, '', href);
      }
      // For regular page links (like memes.html), let them work normally - don't preventDefault
    });
  });

  // On page load, show section from hash or default
  let initial = location.hash ? location.hash.replace('#', '') : sections[0]?.id;
  if (initial) showSection(initial);
});
