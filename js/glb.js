// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);

// 3. FUNCIONALIDAD PARALLAX GLB (Zoom In -> Zoom Out)
        const model = document.querySelector("#miModelo");

        gsap.timeline({
            scrollTrigger: {
                trigger: ".contenedor-glb",
                start: "top bottom", // Empieza cuando el contenedor entra en vista
                end: "bottom top",    // Termina cuando sale
                scrub: 1,             // Sigue el scroll con suavizado
            }
        })
        .fromTo(model, 
            { scale: 0.5, opacity: 0.3 }, // Estado inicial (pequeño y transparente)
            { scale: 1.8, opacity: 1, duration: 1 } // Crece al centro
        )
        .to(model, 
            { scale: 0.5, opacity: 0.3, duration: 1 } // Se encoge al salir
        );