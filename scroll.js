 let barra = document.getElementById("barra");
      
      window.addEventListener("scroll", crecerBarraScroll);
      
      function crecerBarraScroll() {
          const scrollTop = document.documentElement.scrollTop; // Propiedad que nos devuelve cuántos píxeles has desplazado (scroll) hacia abajo en la página
          const scrollHeight = document.documentElement.scrollHeight; // Altura total de la página (visible + parte que requiere scroll)
          const clientHeight = document.documentElement.clientHeight; // Altura visible de la ventana del navegador, es decir, el área del contenido que el usuario puede ver sin hacer scroll.

          const maxScroll = scrollHeight - clientHeight; // El máximo valor que puede tener el scroll vertical. Por partes igual es más fácil de entender: 1) scrollHeight → altura total de la página (incluyendo lo que no se ve sin hacer scroll). 2) clientHeight → altura visible de la ventana del navegador. 3) Ahora lo restamos... Cuando hacemos scroll, scrollTop mide cuánto hemos bajado desde arriba. Pero no podemos seguir bajando más allá del contenido visible, porque la parte visible ocupa clientHeight. Por eso, la diferencia (scrollHeight - clientHeight) es el desplazamiento máximo posible.
          
          const porcentaje = (scrollTop / maxScroll) * 100; /* Calcula qué porcentaje de la página has recorrido haciendo scroll. Ejemplo práctico: porcentaje = (1100 / 2200) * 100 
          porcentaje = 0.5 * 100 
          porcentaje = 50
          
          Es decir, hemos bajado un 50% de la página haciendo scroll
          */

          // Modificamos el HEIGHT de la barra por el nuevo valor 
          barra.style.height = porcentaje + "%";
}
