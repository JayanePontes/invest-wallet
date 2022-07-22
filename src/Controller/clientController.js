const jwtToken = require('../Middleware/jwtToken');
const clientService = require('../Services/clientService');

const clientController = {
  loginClient: async (req, res) => {
    const { email, password } = req.body;

    const token = await clientService.login(email, password);

	  res.status(200).json({ token }); 
	},

	validateToken: (req, _res, next) => {
    const { authorization } = req.headers;
    jwtToken.validateToken(authorization);

    next();
  },

  comprar: async (req, res) => {
    const { codClient, codAsset, amountAssets, value } = req.body;

    const comprado = await clientService.comprar(codClient, codAsset, amountAssets, value);

    if (comprado === 'error') {
      return res.status(400).json({ message: "Verifique a quantidade de ativos disponível"});
    }

    res.status(201).json(comprado);
  }
}

module.exports = clientController;
