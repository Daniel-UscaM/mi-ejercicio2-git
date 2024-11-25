// app.js

// Esperamos que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Accedemos al elemento HTML y le cambiamos el texto
    const h1 = document.querySelector('h1');
    h1.textContent = "¡Hola, GitHub! Interactivo con JavaScript";

    // Creamos un botón y añadimos un evento al hacer clic
    const button = document.createElement('button');
    button.textContent = "Haz clic aquí";
    document.body.appendChild(button);

    button.addEventListener('click', function() {
        alert("¡Has hecho clic en el botón!");
    });
});
