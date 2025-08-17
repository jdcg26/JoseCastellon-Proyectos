// Inicializa tooltips y popovers
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el=>new bootstrap.Tooltip(el));
document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el=>new bootstrap.Popover(el));

// Botón scrolltop
const btn = document.getElementById('scrolltop');
window.addEventListener('scroll',()=>{
  if(window.scrollY>280){ btn.classList.add('show'); } else { btn.classList.remove('show'); }
});
btn?.addEventListener('click',e=>{ e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'}); });
