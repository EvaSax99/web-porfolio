document.addEventListener('DOMContentLoaded', () => {
  const tarjetas = document.querySelectorAll('.custom-card');
  const zonaGalerias = document.getElementById('zona-galerias');
  const paneles = document.querySelectorAll('.panel-galeria');
  const btnCerrar = document.getElementById('cerrar-galeria');

  tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('click', function() {
      // 1. Marcar esta tarjeta como activa
      tarjetas.forEach(t => t.classList.remove('activa'));
      this.classList.add('activa');

      // 2. Ocultar todos los carruseles
      paneles.forEach(panel => panel.classList.remove('mostrar'));

      // 3. Mostrar el carrusel correspondiente
      const objetivo = this.getAttribute('data-target');
      document.getElementById(objetivo).classList.add('mostrar');

      // 4. Asegurarse de que el contenedor principal esté visible
      if (zonaGalerias.style.display === 'none') {
        zonaGalerias.style.display = 'block';
      }

      // 5. Scroll suave a la galería
      zonaGalerias.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Funcionalidad para el botón de cerrar
  if (btnCerrar) {
    btnCerrar.addEventListener('click', () => {
      zonaGalerias.style.display = 'none';
      tarjetas.forEach(t => t.classList.remove('activa')); // Quita la marca activa de las tarjetas
    });
  }
});