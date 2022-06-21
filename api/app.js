const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('root route.'));

app.use('/users', userRoutes);

module.exports = app;
