// Espera a que el DOM cargue completamente
document.addEventListener("DOMContentLoaded", function () {
    
    // Agregar funcionalidad al menú responsive
    const navLinks = document.querySelector(".nav-links");
    const menuToggle = document.createElement("div");
    menuToggle.innerHTML = "&#9776;"; // Icono de menú hamburguesa
    menuToggle.classList.add("menu-toggle");
    document.querySelector("nav").prepend(menuToggle);

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Botón para volver arriba
    const btnUp = document.createElement("button");
    btnUp.innerText = "⬆";
    btnUp.classList.add("btn-up");
    document.body.appendChild(btnUp);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            btnUp.classList.add("visible");
        } else {
            btnUp.classList.remove("visible");
        }
    });

    btnUp.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Animaciones en las secciones
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach((section) => {
        observer.observe(section);
    });
});
