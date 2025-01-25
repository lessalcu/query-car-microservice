const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

// Ruta para consultar todos los vehículos
router.get('/vehicles', vehicleController.getAllVehicles);

// Ruta para consultar un vehículo por ID
router.get('/vehicle/:id', vehicleController.getVehicleById);

module.exports = router;
