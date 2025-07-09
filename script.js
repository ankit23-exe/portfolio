// script.js
// Optional animations or interaction

// Fade in animation on load
window.addEventListener('load', () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = 'opacity 1.2s ease-in';
    document.body.style.opacity = 1;
  }, 200);
});
