// const observerOptions = {
//     threshold: 0.2 // Se activa cuando vemos el 20% del elemento
// };

// const revealObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             // Buscamos el texto dentro de la columna que ha entrado
//             const text = entry.target.querySelector('.reveal-text');
//             if (text) {
//                 text.classList.add('active');
//             }
//             // Una vez revelado, dejamos de observarlo para ahorrar recursos
//             revealObserver.unobserve(entry.target);
//         }
//     });
// }, observerOptions);

// // Aplicamos el observador a todas tus columnas
// document.querySelectorAll('.columna-p').forEach(columna => {
//     revealObserver.observe(columna);
// });