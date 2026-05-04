// 1. Cursor Suave
const cursor = document.querySelector("#custom-cursor");

window.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out"
    });
});

// 2. Animación de entrada del Título (Efecto Adcker)
window.addEventListener("load", () => {
    const tl = gsap.timeline();

    tl.from(".reveal-text", {
        y: 200,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
    })
    .from(".circle-media", {
        scale: 0,
        duration: 1,
        ease: "elastic.out(1, 0.3)"
    }, "-=1");
});

// 3. Interacción en servicios (Agrandar cursor al pasar por encima)
document.querySelectorAll(".service-item").forEach(item => {
    item.addEventListener("mouseenter", () => {
        gsap.to(cursor, { scale: 5, duration: 0.3 });
    });
    item.addEventListener("mouseleave", () => {
        gsap.to(cursor, { scale: 1, duration: 0.3 });
    });
});