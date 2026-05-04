
//  const path1 = document.querySelector('#camino1');
// const path2 = document.querySelector('#camino2');
// const svg = document.querySelector('.squiggle');
// const contenedor = document.querySelector('.contenedor-degradado'); // Importante

// const pathLength1 = path1.getTotalLength();
// const pathLength2 = path2.getTotalLength();

// path1.style.strokeDasharray = `${pathLength1} ${pathLength1}`;
// path2.style.strokeDasharray = `${pathLength2} ${pathLength2}`;

// path1.style.strokeDashoffset = pathLength1;
// path2.style.strokeDashoffset = pathLength2;

// function scrollAnimation() {
  
//     const rect = contenedor.getBoundingClientRect();
//     const windowHeight = window.innerHeight;

    
//     let progreso = (windowHeight - rect.top) / (rect.height + windowHeight);

//     progreso = Math.max(0, Math.min(1, progreso));

  
//     path1.style.strokeDashoffset = pathLength1 - (progreso * pathLength1);
//     path2.style.strokeDashoffset = pathLength2 - (progreso * pathLength2);
// }

// window.addEventListener('scroll', scrollAnimation);

// window.addEventListener('load', scrollAnimation); 
// scrollAnimation();



const path1 = document.querySelector('#camino1');
const path2 = document.querySelector('#camino2');
const contenedor = document.querySelector('.contenedor-degradado');

const pathLength1 = path1.getTotalLength();    
const pathLength2 = path2.getTotalLength();

// Configuración inicial
path1.style.strokeDasharray = `${pathLength1} ${pathLength1}`;
path2.style.strokeDasharray = `${pathLength2} ${pathLength2}`;
path1.style.strokeDashoffset = pathLength1;
path2.style.strokeDashoffset = pathLength2;

function scrollAnimation() {
    const rect = contenedor.getBoundingClientRect();
    
    // Distancia desde el tope del contenedor al tope de la pantalla
    // Negativo significa que el contenedor está arriba de la pantalla
    const distanciaRecorrida = -rect.top;
    
    // La altura total del contenedor es lo que scrollearemos
    const containerHeight = rect.height;
    
    // Progreso: 0 en el inicio del contenedor, 1 en el final
    let progreso = distanciaRecorrida / containerHeight;

    // Forzamos que el progreso sea exacto entre 0 y 1
    progreso = Math.max(0, Math.min(1, progreso));

    // Aplicamos el dibujo
    path1.style.strokeDashoffset = pathLength1 - (progreso * pathLength1);
    path2.style.strokeDashoffset = pathLength2 - (progreso * pathLength2);
}

// Escuchamos scroll y resize (por si cambia el tamaño de la ventana)
window.addEventListener('scroll', scrollAnimation);
window.addEventListener('resize', scrollAnimation);
window.addEventListener('load', scrollAnimation); 

// Ejecución inmediata
scrollAnimation();




// let squiggle = document.getElementById("squiggle");
      
//       window.addEventListener("scroll", crecerBarraScroll);
      
//       function crecerBarraScroll() {
//           const scrollTop = document.documentElement.scrollTop; // Propiedad que nos devuelve cuántos píxeles has desplazado (scroll) hacia abajo en la página
//           const scrollHeight = document.documentElement.scrollHeight; // Altura total de la página (visible + parte que requiere scroll)
//           const clientHeight = document.documentElement.clientHeight; // Altura visible de la ventana del navegador, es decir, el área del contenido que el usuario puede ver sin hacer scroll.

//           const maxScroll = scrollHeight - clientHeight; // El máximo valor que puede tener el scroll vertical. Por partes igual es más fácil de entender: 1) scrollHeight → altura total de la página (incluyendo lo que no se ve sin hacer scroll). 2) clientHeight → altura visible de la ventana del navegador. 3) Ahora lo restamos... Cuando hacemos scroll, scrollTop mide cuánto hemos bajado desde arriba. Pero no podemos seguir bajando más allá del contenido visible, porque la parte visible ocupa clientHeight. Por eso, la diferencia (scrollHeight - clientHeight) es el desplazamiento máximo posible.
          
//           const porcentaje = (scrollTop / maxScroll) * 100; /* Calcula qué porcentaje de la página has recorrido haciendo scroll. Ejemplo práctico: porcentaje = (1100 / 2200) * 100 
//           porcentaje = 0.5 * 100 
//           porcentaje = 50
          
//           Es decir, hemos bajado un 50% de la página haciendo scroll
//           */

//           // Modificamos el HEIGHT de la barra por el nuevo valor 
//           barra.style.height = porcentaje + "%";



