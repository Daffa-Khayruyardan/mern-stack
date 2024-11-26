const express = require('express');
const cors = require('cors');
require('./config/database');

// import middleware
const errorMiddleware = require('./middleware/errorMiddleware');

// import routes
const contactRoutes = require('./routes/contactRoute');


const app = express();

// use third party middleware
app.use(cors())
app.use(express.json());

// inject all routes here
app.use('/api/v1', contactRoutes);

// handle error using middleware
app.use(errorMiddleware);

module.exports = app;