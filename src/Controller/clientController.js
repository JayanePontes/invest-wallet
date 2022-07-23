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
      return res.status(400).json({ message: 'Verifique a quantidade de ativos disponível' });
    }

    res.status(201).json(comprado);
  },

  vender: async (req, res) => {
    const { codAsset, amountAssets } = req.body;

    const vendido = await clientService.vender(codAsset, amountAssets);

    if (vendido === 'error') {
      return res.status(400).json({ message: 'Verifique a quantidade de ativos disponível' });
    }

    res.status(201).json(vendido);
  },

  getAssetsClient: async (req, res) => {
    const { codClient } = req.params;

    const assetsList = await clientService.getAssetsClient(codClient);

    res.status(200).json(assetsList);
  },

  postDeposito: async (req, res) => {
    const { codClient, value } = req.body;

    const deposito = await clientService.postDeposito(codClient, value);

    if (deposito === 'error') {
      return res.status(400).json({ message: "Insira um valor a ser depositado" });
    }
    
    res.status(200).json({ codClient, value });
  },

  postSaque: async (req, res) => {
    const { codClient, value } = req.body;

    const saque = await clientService.postSaque(codClient, value);

    if (saque === 'error') {
      return res.status(400).json({ message: "Insira um valor a ser sacado" });
    }

    res.status(200).json({ codClient, value });
  },

  getWallet: async (req, res) => {
    const { codClient } = req.params;

    const wallet = await clientService.getWallet(codClient);

    res.status(200).json(wallet);
  }
};

module.exports = clientController;
