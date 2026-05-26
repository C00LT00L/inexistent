// Mark the current nav link as active based on path
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href');
    // Exact match for index, prefix match for others
    if (href === 'index.html' || href === '../index.html' || href === '../../index.html') {
      if (path === '/' || path.endsWith('index.html') && !path.includes('/projects/') && !path.includes('/photos') && !path.includes('/about')) {
        a.classList.add('active');
      }
    } else if (href && path.includes(href.replace('../', '').replace('index.html', ''))) {
      a.classList.add('active');
    }
  });
});
