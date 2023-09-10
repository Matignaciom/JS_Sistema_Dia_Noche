const modoBtn = document.getElementById('modo-btn');
const iconoModo = document.getElementById('icono-modo');
const body = document.body;

modoBtn.addEventListener('click', () => {
    if (body.classList.contains('modo-dia')) {
        body.classList.remove('modo-dia');
        iconoModo.classList.remove('fa-moon');
        iconoModo.classList.add('fa-sun');
        body.style.backgroundColor = '#87CEEB'; // Cambia al color azul claro para el día
        body.style.color = '#333'; // Cambia al texto oscuro para el día
    } else {
        body.classList.add('modo-dia');
        iconoModo.classList.remove('fa-sun');
        iconoModo.classList.add('fa-moon');
        body.style.backgroundColor = '#444'; // Cambia a negro para la noche
        body.style.color = 'white'; // Cambia al texto blanco para la noche
    }
});
