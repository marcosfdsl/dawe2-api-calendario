const express = require('express');
const morgan = require('morgan');
const config = require('./config');

const profesor = require('./modulos/profesor/rutas');
const error = require('./red/errors')

const app = express();

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// config
app.set('port', config.app.port);

// rutas
app.use('/api/profesor', profesor);
app.use(error);

module.exports = app;