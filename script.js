// === Proyecto Completo de Autenticación con Firebase ===

// === 1. Backend (Node.js + Express) ===
// Archivo: backend/server.js
const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Inicializar Firebase
const serviceAccount = require("./firebase-config.json"); // Archivo de configuración de Firebase
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const auth = admin.auth();

// Registro de usuario
app.post("/register", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await auth.createUser({ email, password });
        res.status(201).json({ message: "Usuario registrado", uid: user.uid });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Servidor escuchando en el puerto 5000
app.listen(5000, () => console.log("Servidor corriendo en http://localhost:5000"));
