const connection = require('../config/db');

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
        return res.status(200).json(results[0]); // Return the found vehicle
    });
};
