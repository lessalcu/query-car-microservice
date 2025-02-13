const express = require('express');
const cors = require('cors'); // Importar el paquete cors
const app = express();
const vehicleRoutes = require('./routes/vehicleRoutes');
const dotenv = require('dotenv');

dotenv.config();

// Habilitar CORS para todas las rutas y orígenes
app.use(cors({
    origin: '*', // Permite peticiones desde cualquier origen
    methods: ['GET', 'POST'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Headers permitidos
    credentials: true // Permitir credenciales (cookies, tokens, etc.)
  }));
// Usar express.json() para que el servidor pueda procesar JSON
app.use(express.json());

// Rutas
app.use('/api', vehicleRoutes);

const PORT = process.env.PORT || 3003;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Query Vehicle microservice running on port ${PORT}`);
});
