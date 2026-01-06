var mypassword = "password";
var email = "pedrito@gmail.com";

let button = document.getElementById("button");
let email_user = document.getElementById("email");
let password_user = document.getElementById("password");
let alert_danger = document.getElementById("alert-danger");

button.addEventListener("click", function () {

    // Ocultar alerta antes de validar
    alert_danger.classList.add("d-none");

    // Quitar errores previos
    email_user.classList.remove("is-invalid");
    password_user.classList.remove("is-invalid");

    if (email_user.value === email && password_user.value === mypassword) {
        window.location.href = "./home.html";
    } else {
        alert_danger.classList.remove("d-none");
        alert_danger.innerText = "Usuario o contraseña incorrectos";

        email_user.classList.add("is-invalid");
        password_user.classList.add("is-invalid");

        password_user.value = "";
    }
});
