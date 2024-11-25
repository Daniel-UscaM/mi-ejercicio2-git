// contador.js
document.addEventListener("DOMContentLoaded", function() {
    const contadorElement = document.getElementById('contador');
    const incrementarButton = document.getElementById('incrementar');
    let contador = 0;

    incrementarButton.addEventListener('click', function() {
        contador++;
        contadorElement.textContent = contador;
    });
});
