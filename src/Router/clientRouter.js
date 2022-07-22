const { Router } = require('express');
const clientController = require('../Controller/clientController');
const validateLogin = require('../Middleware/validateLogin');
const { validateToken } = require('../Middleware/jwtToken');
const router = Router();

router.post('/login', validateLogin, clientController.loginClient);
router.post('/assets/comprar', validateToken, clientController.comprar);
router.post('/assets/vender', validateToken, clientController.vender);

module.exports = router;