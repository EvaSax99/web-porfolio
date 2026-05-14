
const path1 = document.querySelector('#camino1');
const path2 = document.querySelector('#camino2');
const contenedor = document.querySelector('.contenedor-degradado');

// Guardamos las longitudes (mejor dentro de una función si el SVG es responsive)
let pathLength1 = path1.getTotalLength();    
let pathLength2 = path2.getTotalLength();

// Configuración inicial
function initPaths() {
    pathLength1 = path1.getTotalLength();
    pathLength2 = path2.getTotalLength();
    
    path1.style.strokeDasharray = `${pathLength1} ${pathLength1}`;
    path2.style.strokeDasharray = `${pathLength2} ${pathLength2}`;
    path1.style.strokeDashoffset = pathLength1;
    path2.style.strokeDashoffset = pathLength2;
}

function scrollAnimation() {
    const rect = contenedor.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // CÁLCULO CORREGIDO:
    // El inicio es cuando el tope del contenedor entra por abajo (o está en 0)
    // El final es cuando el fondo del contenedor llega al fondo de la pantalla
    const totalDistancia = rect.height - windowHeight;
    const distanciaActual = -rect.top;

    // Progreso de 0 a 1
    let progreso = distanciaActual / totalDistancia;

    // Limites de seguridad
    progreso = Math.max(0, Math.min(1, progreso));

    // Aplicamos el dibujo
    path1.style.strokeDashoffset = pathLength1 - (progreso * pathLength1);
    path2.style.strokeDashoffset = pathLength2 - (progreso * pathLength2);
}

// Inicializar y escuchar eventos
initPaths();
window.addEventListener('scroll', scrollAnimation);
// Si cambias el tamaño de ventana, las longitudes del SVG pueden variar
window.addEventListener('resize', () => {
    initPaths();
    scrollAnimation();
});
window.addEventListener('load', scrollAnimation);

scrollAnimation();

























// const path1 = document.querySelector('#camino1');
// const path2 = document.querySelector('#camino2');

// // Guardamos las longitudes de forma global
// let pathLength1, pathLength2;

// // Configuración inicial: Medimos y preparamos los trazos
// function initPaths() {
//     if (path1 && path2) {
//         pathLength1 = path1.getTotalLength();
//         pathLength2 = path2.getTotalLength();
        
//         // Configuramos el dasharray
//         path1.style.strokeDasharray = `${pathLength1} ${pathLength1}`;
//         path2.style.strokeDasharray = `${pathLength2} ${pathLength2}`;
        
//         // Estado inicial (oculto)
//         path1.style.strokeDashoffset = pathLength1;
//         path2.style.strokeDashoffset = pathLength2;
//     }
// }

// function scrollAnimation() {
//     // 1. Calculamos cuánto ha bajado el scroll (px)
//     const winScroll = window.pageYOffset || document.documentElement.scrollTop;
    
//     // 2. Calculamos la altura total de la página MENOS la ventana del navegador
//     // Esto nos da el recorrido máximo real que puede hacer el usuario
//     const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

//     // 3. Progreso de 0 a 1 (con seguro para evitar división por cero)
//     let progreso = height > 0 ? winScroll / height : 0;

//     // 4. Límites de seguridad (0% a 100%)
//     progreso = Math.max(0, Math.min(1, progreso));

//     // 5. Aplicamos el dibujo proporcional al progreso de la página
//     if (path1 && path2) {
//         path1.style.strokeDashoffset = pathLength1 - (progreso * pathLength1);
//         path2.style.strokeDashoffset = pathLength2 - (progreso * pathLength2);
//     }
// }

// // --- EVENTOS ---

// // Inicializamos medidas al cargar
// initPaths();

// // Escuchamos el scroll
// window.addEventListener('scroll', scrollAnimation);

// // Si cambia el tamaño de la ventana (resize), las longitudes del SVG 
// // o la altura de la página podrían cambiar, así que reiniciamos todo.
// window.addEventListener('resize', () => {
//     initPaths();
//     scrollAnimation();
// });

// // Por si acaso hay imágenes que tardan en cargar y cambian la altura de la web
// window.addEventListener('load', () => {
//     initPaths();
//     scrollAnimation();
// });

// // Ejecución inmediata inicial
// scrollAnimation();


