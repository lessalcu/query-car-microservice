const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

// Route to query a vehicle by ID
router.get('/vehicle/:id', vehicleController.getVehicleById);

// Route to query all vehicles
router.get('/all/vehicles', vehicleController.getAllVehicles);

module.exports = router;
