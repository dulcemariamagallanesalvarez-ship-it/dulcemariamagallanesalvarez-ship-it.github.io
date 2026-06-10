document.addEventListener("DOMContentLoaded", () => {
    // 1. Menú Responsivo Hamburguesa
    const menuToggle = document.getElementById("mobile-menu");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // 2. Generación del Gráfico en ods.html (Simulando librería con Canvas Nativo)
    const canvas = document.getElementById("graficoODS");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        
        // Datos de ejemplo: Concientización ecológica antes y después
        const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun"];
        const impacto = [20, 35, 45, 60, 75, 90]; // Porcentaje de participación

        ctx.fillStyle = "#2e7d32";
        
        // Dibujo de barras simple
        for (let i = 0; i < impacto.length; i++) {
            let h = impacto[i] * 2; // Escalar altura
            let x = i * 60 + 50;
            let y = 250 - h;
            
            // Dibujar Barra
            ctx.fillRect(x, y, 40, h);
            
            // Texto de porcentaje
            ctx.fillStyle = "#333";
            ctx.fillText(impacto[i] + "%", x + 10, y - 5);
            // Texto de mes
            ctx.fillText(meses[i], x + 10, 270);
            ctx.fillStyle = "#2e7d32";
        }
    }
});
