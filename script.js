document.addEventListener('DOMContentLoaded', () => {
    // 1. CONTROL DE MENÚ RESPONSIVE DESPLEGABLE
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // 2. INICIALIZACIÓN DEL GRÁFICO (Exclusivo en ods.html)
    const chartCanvas = document.getElementById('odsChart');
    if (chartCanvas) {
        new Chart(chartCanvas, {
            type: 'doughnut',
            data: {
                labels: ['Agua Limpia', 'Energía Asequible', 'Vida Submarina', 'Acción por el Clima', 'Otros Objetivos'],
                datasets: [{
                    label: 'Distribución de Prioridades',
                    data: [35, 20, 15, 20, 10],
                    backgroundColor: [
                        '#2596be', // Agua Limpia
                        '#e28743', // Energía
                        '#063970', // Vida Submarina
                        '#76b5c5', // Acción por el Clima
                        '#abd6dfff' // Otros
                    ],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { font: { family: 'Segoe UI', size: 12 } }
                    }
                }
            }
        });
    }
});
