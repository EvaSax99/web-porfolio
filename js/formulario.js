const openBtn = document.getElementById('openForm');
const closeBtn = document.querySelector('.close-btn');
const modal = document.getElementById('contactModal');

// Abrir modal
openBtn.addEventListener('click', () => {
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Evita scroll al estar abierto
});

// Cerrar modal al pulsar la X
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
});

// Cerrar modal al hacer clic fuera de la caja blanca
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});