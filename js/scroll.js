



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
