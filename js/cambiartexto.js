 document.addEventListener("DOMContentLoaded", () => {
                const párrafos = document.getElementById("p");

                const opciones = {
                    root: null, // usa el viewport
                    rootMargin: "0px",
                    threshold: 0.5 // se activa cuando el 50% del texto es visible
                };

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            // Añade la clase para cambiar color y opacidad
                            entry.target.classList.add("p-active");
                        } else {
                            // Opcional: quita la clase si quieres que vuelva al estado original al salir
                            entry.target.classList.remove("p-active");
                        }
                    });
                }, opciones);

                párrafos.forEach((p) => observer.observe(p));
            });