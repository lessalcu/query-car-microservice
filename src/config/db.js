require('dotenv').config();  // Load environment variables

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost', // Get from .env or use 'localhost'
    user: process.env.DB_USER || 'root', // Database user
    password: process.env.DB_PASSWORD || 'Lesly1105', // Database password
    database: process.env.DB_NAME || 'CarDB' // Database name
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database as id ' + connection.threadId);
});

module.exports = connection;
