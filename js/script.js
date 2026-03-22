// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Smooth scroll for anchor links (if any)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').substring(1);
    if (targetId && document.getElementById(targetId)) {
      e.preventDefault();
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll fade-in animation
const fadeElements = document.querySelectorAll('.menu-card, .special-card, .about-grid, .gallery-item, .team-card, .menu-item');
fadeElements.forEach(el => {
  el.classList.add('fade-scroll');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-scroll').forEach(el => observer.observe(el));

// Lightbox gallery
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');

if (galleryItems.length) {
  galleryItems.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
    });
  });
}
if (closeLightbox) {
  closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.style.display = 'none';
  });
}

// Additional hover & smooth behaviour: ensure no horizontal scroll
window.addEventListener('load', () => {
  document.body.style.overflowX = 'hidden';
});
