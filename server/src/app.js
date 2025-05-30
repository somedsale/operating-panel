const express = require('express');
const userRoutes = require('./routes/userRoutes');
const lightingRoutes = require('./routes/lightingRoutes');
const sensorRoutes = require('./routes/sensorRoutes');
const controlRoutes = require('./routes/controlRoutes');
const powerRoutes = require('./routes/powerRoutes')
const gasRoutes = require('./routes/gasRoutes')
const ventilationRoutes = require('./routes/ventilationRoutes')

const app = express();
const cors = require('cors');
// Middleware
app.use(express.json()); // Parse JSON body
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded body
app.use(cors({ origin: 'http://localhost:3000' }));
// Routes
app.use('/api/users', userRoutes);
app.use('/api/lightings', lightingRoutes);
app.use('/api/sensor',sensorRoutes)
app.use('/api/control',controlRoutes)
app.use('/api/power',powerRoutes)
app.use('/api/gas',gasRoutes)
app.use('/api/ventilation',ventilationRoutes)


// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Express API!');
});

module.exports = app;