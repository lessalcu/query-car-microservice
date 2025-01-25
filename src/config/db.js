require('dotenv').config();  // Cargar variables de entorno

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost', // Obtener desde el .env o usar 'localhost'
    user: process.env.DB_USER || 'root', // Usuario de la base de datos
    password: process.env.DB_PASSWORD || 'Lesly1105', // Contraseña de la base de datos
    database: process.env.DB_NAME || 'CarDB' // Nombre de la base de datos
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database as id ' + connection.threadId);
});

module.exports = connection;
