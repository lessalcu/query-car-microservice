const express = require('express');
const app = express();
const vehicleRoutes = require('./routes/vehicleRoutes');
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json());

// Routes
app.use('/api', vehicleRoutes);

const PORT = process.env.PORT || 3003;
// Start server
app.listen(PORT, () => {
    console.log(`Query Vehicle microservice running on port ${PORT}`);
});
