/* ===============================
VALIDACIÓN DE LOGIN
================================ */

var mypassword = "1";
var email = "p@gmail.com";

// Obtener elementos del HTML
let button = document.getElementById("button");
let email_user = document.getElementById("email");
let password_user = document.getElementById("password");
let alert_danger = document.getElementById("alert-danger");

// Evento al hacer click en el botón
if (button) {
    button.addEventListener("click", function () {

        // Oculta la alerta antes de validar
        alert_danger.classList.add("d-none");

        // Quita estilos de error anteriores
        email_user.classList.remove("is-invalid");
        password_user.classList.remove("is-invalid");

        // Validación de usuario y contraseña
        if (email_user.value === email && password_user.value === mypassword) {
            window.location.href = "./home.html";
            sessionStorage.setItem("sesion","yes")
        } else {
            alert_danger.classList.remove("d-none");
            alert_danger.innerText = "Usuario o contraseña incorrectos";

            email_user.classList.add("is-invalid");
            password_user.classList.add("is-invalid");

            password_user.value = "";
        }
    });
}

/* ===============================
MODO OSCURO / CLARO
================================ */

// Botón de cambio de tema
const toggleThemeBtn = document.getElementById("toggleTheme");

// Body de la página
const body = document.body;

// Guardar y aplicar tema al cargar
const savedTheme = localStorage.getItem("theme") || "light";

if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    if (toggleThemeBtn) toggleThemeBtn.innerText = "☀️ Modo claro";
} else {
    if (toggleThemeBtn) toggleThemeBtn.innerText = "🌙 Modo oscuro";
}

// Evento para cambiar tema
if (toggleThemeBtn) {
    toggleThemeBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        const isDark = body.classList.contains("dark-mode");

        // Guardar preferencia
        localStorage.setItem("theme", isDark ? "dark" : "light");

        // Cambiar texto del botón
        toggleThemeBtn.innerText = isDark ? "☀️ Modo claro" : "🌙 Modo oscuro";
    });
}

/* ===============================
Estilos directos de modo oscuro
================================ */
const style = document.createElement("style");
style.innerHTML = `
    body.dark-mode {
        background-color: #121212;
        color: #ffffff;
    }
    body.dark-mode .card {
        background-color: #1e1e1e;
        color: #ffffff;
        border-color: #333;
    }
    body.dark-mode .card-text {
        color: #ccc;
    }
`;
document.head.appendChild(style);
