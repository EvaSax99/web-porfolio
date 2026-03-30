
     const cursor = document.getElementById("cursor");

if (cursor) {
    document.addEventListener("mousemove", (e) => {
        // Usamos requestAnimationFrame para que el movimiento sea fluido
        requestAnimationFrame(() => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
        });
    });
}