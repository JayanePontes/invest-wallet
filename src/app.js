const express = require('express');
const clientRouter = require('./Router/clientRouter');
const error = require('./Middleware/error');

const app = express();

app.use(express.json());

app.use('/', clientRouter);

app.use(error);

module.exports = app;