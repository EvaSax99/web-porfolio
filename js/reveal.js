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