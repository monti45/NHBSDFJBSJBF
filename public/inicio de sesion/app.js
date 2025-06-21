import { auth } from "./firebase-config.js";
import {
signInWithEmailAndPassword,
createUserWithEmailAndPassword,
signOut
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

window.login = function () {
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "inicio.html"; // Redirige al inicio
    })
    .catch((error) => {
    mostrarMensaje("Error al iniciar sesión");
    });
};

window.register = function () {
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
    mostrarMensaje("¡Usuario registrado! Ahora podés iniciar sesión.");
      // Después de un registro exitoso, redirige al login
    setTimeout(() => {
        window.location.href = "login.html"; // Redirige a la página de login
      }, 2000); // Espera 2 segundos antes de redirigir, para que el mensaje sea visible
    })
    .catch((error) => {
    mostrarMensaje("Error al registrarse");
    });
};

function mostrarMensaje(mensaje) {
document.getElementById("mensaje").innerText = mensaje;
}
