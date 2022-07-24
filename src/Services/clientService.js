const db = require('../database/models/index');
const jwtToken = require('../Middleware/jwtToken');

const loginService = {
  login: async (email, password) => {
    const user = await db.Clients.findOne({
      attributes: { exclude: ['name'] },
      where: { email },
    });

    if (!user || user.password !== password) {
      const e = new Error('NotFoundError');
      e.name = 'NotFoundError';
      throw e;
    }

    const { passwordHash, ...userWithoutPassword } = user.dataValues;

    const token = jwtToken.createToken(userWithoutPassword);

    return token;
  },

  validateToken: (token) => {
    const data = jwtToken.validateToken(token);

    return data;
  },

  comprar: async (codClient, codAsset, name, amountAssets, value) => {
    const assets = await db.assets.findOne({ where: { codAsset } });
    const newAmount = Number(assets.amountAssets) - Number(amountAssets);
    const newinvestesAmount = Number(assets.value) * Number(amountAssets);
    const exist = await db.AssetsClients.findOne({ where: { codAsset } });
    const verifica = Number(assets.codAsset) === Number(codAsset) && assets.name === name;

    if (amountAssets > assets.amountAssets) return 'error';
    if (!verifica) return 'error name';

    if (exist) {
      const amount = Number(exist.amountAssets) + Number(amountAssets);
      await db.AssetsClients.update({ amountAssets: amount }, { where: { codAsset } });
      await db.assets.update({ amountAssets: newAmount }, { where: { codAsset } });
    } else {
      await db.AssetsClients.create({
        codClient, codAsset, name, amountAssets, value, investesAmount: newinvestesAmount,
      });
      await db.assets.update({ amountAssets: newAmount }, { where: { codAsset } });      
    }
  },

  vender: async (codAsset, amountAssets) => {
    const assets = await db.AssetsClients.findOne({ where: { codAsset } });
    const newSell = Number(assets.amountAssets) - Number(amountAssets);

    const vendido = await db.AssetsClients.findAll({
      attributes: ['codClient', 'codAsset', 'amountAssets'],
      where: { codAsset },
    });

    if (amountAssets > assets.amountAssets) return 'error';

    await db.AssetsClients.update({ amountAssets: newSell }, { where: { codAsset } });

    return vendido;
  },

  getAssetsClient: async (codClient) => {
    const assetsList = await db.AssetsClients.findAll({ where: { codClient } });

    return assetsList;
  },

  postDeposito: async (codClient, value) => {
    const wallet = await db.WalletClients.findOne({ where: { codClient } });

    if (!value || Number(value) < 0.01) return 'error';
    
    const newValue = Number(wallet.value) + Number(value);

    await db.WalletClients.update({ value: newValue }, { where: { codClient } });
  },

  postSaque: async (codClient, value) => {
    const wallet = await db.WalletClients.findOne({ where: { codClient } });

    if (!value || value > wallet.value || value < 0.01) return 'error';

    const newValue = Number(wallet.value) - Number(value);

    await db.WalletClients.update({ value: newValue }, { where: { codClient } });
  },

  getWallet: async (codClient) => {
    const wallet = await db.WalletClients.findAll({ where: { codClient } });

    return wallet;
  },
};

module.exports = loginService;
