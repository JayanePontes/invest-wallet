require('dotenv').config();
require('express-async-errors');

const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('ouvindo porta', port));