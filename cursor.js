
        const cursor = document.getElementById("cursor");
        const link = document.getElementById("link");

        document.addEventListener("mousemove", (e) => {
            requestAnimationFrame(() => {
                cursor.style.left = e.clientX + "px";
                cursor.style.top = e.clientY + "px";
            });
        });

       
        link.addEventListener("mouseover", () => {
            cursor.classList.add("cursor-hover");
        });
        link.addEventListener("mouseout", () => {
            cursor.classList.remove("cursor-hover");
        });