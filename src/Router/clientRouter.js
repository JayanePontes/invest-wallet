const { Router } = require('express');
const clientController = require('../Controller/clientController');
const validateLogin = require('../Middleware/validateLogin');
const { validateToken } = require('../Middleware/jwtToken');

const router = Router();

router.get('/wallet/:codClient', validateToken, clientController.getWallet);
router.get('/assets/client/:codClient', validateToken, clientController.getAssetsClient);
router.post('/login', validateLogin, clientController.loginClient);
router.post('/assets/comprar', validateToken, clientController.comprar);
router.post('/assets/vender', validateToken, clientController.vender);
router.post('/wallet/deposito', validateToken, clientController.postDeposito);
router.post('/wallet/saque', validateToken, clientController.postSaque);

module.exports = router;