document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Aquí puedes agregar lógica para enviar los datos a un servidor
        // y manejar la respuesta (por ejemplo, verificar si el usuario ya existe).
        // También puedes usar bibliotecas de JavaScript como Axios para realizar solicitudes AJAX.

        alert("Registro exitoso");
        registrationForm.reset();
    });
});
