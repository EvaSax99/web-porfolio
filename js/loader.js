window.addEventListener('DOMContentLoaded', () => {
    const percentageText = document.getElementById('percentage');
    const loader = document.getElementById('custom-loader-container');
    let count = 0;

    const updateLoader = setInterval(() => {
        count += Math.floor(Math.random() * 6) + 2;

        if (count >= 100) {
            count = 100;
            clearInterval(updateLoader);
            
            setTimeout(() => {
                loader.classList.add('loaded');
                loader.style.pointerEvents = 'none'; // Asegurar que no intercepte eventos
                
                // Después de 1 segundo (cuando termina de subir), lo borramos del mapa
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 1000);
            }, 500);
        }
        if (percentageText) percentageText.innerText = count + '%';
    }, 60);
});