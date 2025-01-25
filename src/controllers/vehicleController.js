const connection = require('../config/db');

// Función para consultar todos los vehículos
exports.getAllVehicles = (req, res) => {
    connection.query('SELECT * FROM Cars', (err, results) => {
        if (err) {
            console.error('Error retrieving vehicles:', err);
            return res.status(500).json({ message: 'Error retrieving vehicles', error: err });
        }
        return res.status(200).json(results); // Retorna todos los vehículos
    });
};

// Función para consultar un vehículo por su id
exports.getVehicleById = (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM Cars WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error('Error retrieving vehicle:', err);
            return res.status(500).json({ message: 'Error retrieving vehicle', error: err });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        return res.status(200).json(results[0]); // Retorna el vehículo encontrado
    });
};
