// formulario.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('miFormulario');
    const mensajeError = document.getElementById('mensaje-error');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;

        if (!nombre || !email) {
            mensajeError.textContent = "Todos los campos son obligatorios.";
        } else {
            mensajeError.textContent = "";
            alert("Formulario enviado correctamente.");
        }
    });
});
