const connection = require('../config/db');

exports.getVehicleById = (req, res) => {
    const { id } = req.params;

    const query = `
        SELECT Cars.id, Cars.licensePlate, Cars.brand, Cars.model, Cars.color,
               Users.identification AS userIdentification, Users.name AS userName
        FROM Cars
        JOIN Users ON Cars.userIdentifier = Users.id
        WHERE Cars.id = ?
    `;

    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('❌ Error retrieving vehicle:', err);
            return res.status(500).json({ message: 'Error retrieving vehicle', error: err });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        return res.status(200).json(results[0]); 
    });
};


exports.getAllVehicles = (req, res) => {
    const query = `
        SELECT Cars.id, Cars.licensePlate, Cars.brand, Cars.model, Cars.color,
               Users.identification AS userIdentification, Users.name AS userName
        FROM Cars
        JOIN Users ON Cars.userIdentifier = Users.id
    `;

    connection.query(query, (err, results) => {
        if (err) {
            console.error('❌ Error retrieving vehicles:', err);
            return res.status(500).json({ message: 'Error retrieving vehicles', error: err });
        }
        return res.status(200).json(results);
    });
};
