const mongoose = require('mongoose');
require('dotenv').config();

const db_url = process.env.DB_URL || 'mongodb://localhost:27017/mern-stack';

mongoose.connect(db_url)
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.log(`Error: ${err}`));