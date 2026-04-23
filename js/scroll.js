
// const path1 = document.querySelector('#camino1');
// const path2 = document.querySelector('#camino2');
// const svg = document.querySelector('.squiggle');

// // 2. Calculamos la longitud total del trazo
// const pathLength = path1.getTotalLength();

// // 3. Preparamos el "truco" de los guiones
// // Hacemos que el guion sea tan largo como toda la línea
// path1.style.strokeDasharray = `${pathLength} ${pathLength}`;
// path2.style.strokeDasharray = `${pathLength} ${pathLength}`;

// // Inicialmente, desplazamos el guion por completo (línea invisible)
// path1.style.strokeDashoffset = pathLength;
// path2.style.strokeDashoffset = pathLength;

// // 4. Función que se ejecuta al hacer scroll
// function scrollAnimation() {
//     // Calculamos cuánto ha bajado el usuario en píxeles
//     const distance = window.scrollY;
    
//     // Calculamos la distancia total que se puede scrollear dentro del SVG
//     const totalDistance = svg.clientHeight - window.innerHeight;
    
//     // Obtenemos un porcentaje entre 0 y 1
//     let percentage = distance / totalDistance;
    
//     // Limitamos el porcentaje para que no se pase de 0 o 1
//     percentage = Math.max(0, Math.min(1, percentage));

//     // 5. Ajustamos el offset: 
//     // Si es 1 (fin de página), el offset es 0 (línea totalmente dibujada)
//     path1.style.strokeDashoffset = pathLength - (percentage * pathLength);
//     path2.style.strokeDashoffset = pathLength - (percentage * pathLength);
// }

// // 6. Escuchamos el evento de scroll y carga de página
// window.addEventListener('scroll', scrollAnimation);
// scrollAnimation(); // Ejecutar una vez al cargar



 const path1 = document.querySelector('#camino1');
const path2 = document.querySelector('#camino2');
const svg = document.querySelector('.squiggle');
const contenedor = document.querySelector('.contenedor-degradado'); // Importante

const pathLength1 = path1.getTotalLength();
const pathLength2 = path2.getTotalLength();

path1.style.strokeDasharray = `${pathLength1} ${pathLength1}`;
path2.style.strokeDasharray = `${pathLength2} ${pathLength2}`;

path1.style.strokeDashoffset = pathLength1;
path2.style.strokeDashoffset = pathLength2;

function scrollAnimation() {
  
    const rect = contenedor.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    
    let progreso = (windowHeight - rect.top) / (rect.height + windowHeight);

    progreso = Math.max(0, Math.min(1, progreso));

  
    path1.style.strokeDashoffset = pathLength1 - (progreso * pathLength1);
    path2.style.strokeDashoffset = pathLength2 - (progreso * pathLength2);
}

window.addEventListener('scroll', scrollAnimation);

window.addEventListener('load', scrollAnimation); 
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



