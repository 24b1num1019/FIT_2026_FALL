const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = navLinks.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Цэс хаах' : 'Цэс нээх');
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelectorAll('.photo-placeholder img').forEach(img => {
  img.addEventListener('error', () => img.classList.add('is-missing'));
  if (img.complete && img.naturalWidth === 0) img.classList.add('is-missing');
});
