const express = require('express');
const dotenv = require('dotenv');
const vehicleRoutes = require('./routes/vehicleRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

// Rutas
app.use('/api', vehicleRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Query Vehicle microservice running on port ${PORT}`);
});
