document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.getElementById("cursor");
    
    if (!cursor) {
        console.error("Cursor element not found");
        return;
    }

    // Posición inicial del cursor
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        requestAnimationFrame(() => {
            cursor.style.left = mouseX + "px";
            cursor.style.top = mouseY + "px";
        });
    });

    // Para que se haga más grande al pasar por links
    document.querySelectorAll('a, button, .cta-button').forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });

    console.log("Cursor script loaded successfully");
});