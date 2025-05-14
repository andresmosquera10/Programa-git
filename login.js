document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form'); // Asegúrate de que tu formulario tenga id="login-form"

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente

        const userInput = document.getElementById('user-input').value.trim(); // Input del usuario
        const passwordInput = document.getElementById('password-input').value.trim(); // Input de contraseña
        // Validaciones básicas
        if (userInput === '') {
            alert('Por favor, ingresa tu usuario, correo o número de teléfono.');
            return;
        }

        if (passwordInput.length < 8) {
            alert('La contraseña debe tener al menos 8 caracteres.');
            return;
        }

        // Si todo está bien, puedes enviar el formulario
        form.submit();
    });
});