window.addEventListener("scroll", () => {
  const lines = document.querySelectorAll(".line");

  // Calculamos cuánto ha bajado el usuario (0 a 1)
  const scrollPercent =
    window.scrollY / (document.body.offsetHeight - window.innerHeight);

  lines.forEach((line, index) => {
    // Obtenemos el largo total del camino de zig-zag
    const pathLength = document.getElementById("zigzag-path").getTotalLength();

    // El "offset" mueve la barra a lo largo del camino.
    // Multiplicamos por pathLength para que recorra todo el trayecto.
    // El (index * 60) añade una separación constante entre las 3 barras.

    const move = pathLength - scrollPercent * pathLength;

    line.style.strokeDashoffset = move;
  });
});
window.addEventListener("scroll", () => {
  const contenedor = document.querySelector(".contenedor-degradado");
  const lines = document.querySelectorAll(".line");
  const path = document.getElementById("zigzag-path");
  const pathLength = path.getTotalLength();

  // Calculamos el progreso basado en cuándo el contenedor entra en pantalla
  const rect = contenedor.getBoundingClientRect();
  const viewHeight = window.innerHeight;

  // Progreso de 0 a 1 dentro del div
  let progress = (viewHeight - rect.top) / (rect.height + viewHeight);
  progress = Math.max(0, Math.min(1, progress)); // Limitamos entre 0 y 1

  lines.forEach((line) => {
    // Movemos las barras sincronizadas
    line.style.strokeDashoffset = pathLength - progress * pathLength;
  });
});
