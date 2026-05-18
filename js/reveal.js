 const observerOptions = {
     threshold: 0.2 // Se activa cuando vemos el 20% del elemento
 };

 const revealObserver = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Buscamos el texto dentro de la columna que ha entrado
             const text = entry.target.querySelector('.reveal-text');
            if (text) {
                text.classList.add('active');
             }
         } else {
             // Cuando el elemento sale de la pantalla, removemos la clase
             const text = entry.target.querySelector('.reveal-text');
             if (text) {
                text.classList.remove('active');
             }
         }
     });
 }, observerOptions);

 document.querySelectorAll('.columna-p').forEach(columna => {
     revealObserver.observe(columna);
 });



 

document.addEventListener("DOMContentLoaded", () => {
  const footerLogo = document.querySelector('.footer-logo');
  const footerName = document.querySelector('.footer-name');

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px 50px 0px",
    threshold: 0.05
  };

  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        requestAnimationFrame(() => {
          if (footerName) footerName.classList.add('active');
        });
      } else {
        if (footerName) footerName.classList.remove('active');
      }
    });
  }, observerOptions);

  if (footerLogo) footerObserver.observe(footerLogo);
});
