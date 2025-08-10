// ScrollTop
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) scrollTopBtn.classList.add('show');
  else scrollTopBtn.classList.remove('show');
});
scrollTopBtn?.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);

// Animaciones al hacer scroll
const animatedEls = document.querySelectorAll('.animate-on-scroll');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.18 });
animatedEls.forEach(el => io.observe(el));

// Cerrar menú al navegar (UX móvil)
const navLinks = document.querySelectorAll('.navbar .nav-link');
const navbarCollapse = document.getElementById('menu');
navLinks.forEach(link => link.addEventListener('click', () => {
  if (navbarCollapse.classList.contains('show')) {
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
    bsCollapse?.hide();
  }
}));
