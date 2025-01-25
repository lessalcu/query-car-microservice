const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

// Route to query all vehicles
router.get('/vehicles', vehicleController.getAllVehicles);

// Route to query a vehicle by ID
router.get('/vehicle/:id', vehicleController.getVehicleById);

module.exports = router;
