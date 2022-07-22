const { Router } = require('express');
const clientController = require('../Controller/clientController');
const validateLogin = require('../Middleware/validateLogin');
const router = Router();

router.post('/login', validateLogin, clientController.loginClient);

module.exports = router;