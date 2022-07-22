const db = require('../database/models/index');
const jwtToken = require('../Middleware/jwtToken');

const { Op } = require('sequelize');

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

  comprar: async (codClient, codAsset, amountAssets, value) => {
    const assets = await db.assets.findOne({ where: { codAsset } });
    const newAmount = assets.amountAssets - amountAssets;

    if (amountAssets > assets.amountAssets) return 'error';

    await db.AssetsClients.create({ codClient, codAsset, amountAssets, value });
    
    const comprado = await db.AssetsClients.findAll({ 
      attributes: ['codClient', 'codAsset', 'amountAssets'],
      where: { codAsset: codAsset },
    });

    await db.assets.update(newAmount, { where: { codAsset: codAsset }});
    
    return comprado;
  },

  vender: async (codAsset, amountAssets) => {
    const assets = await db.AssetsClients.findOne({ where: { codAsset } });
    const newSell = assets.amountAssets + amountAssets;

    const vendido = await db.AssetsClients.findAll({ 
      attributes: ['codClient', 'codAsset', 'amountAssets'],
      where: { codAsset: codAsset },
    });

    if (amountAssets > assets.amountAssets) return 'error';
    if (assets.amountAssets === 0) {
      return await db.AssetsClients.destroy({ where: { codAsset: codAsset } });
    }

    await db.assets.update(newSell, { where: { codAsset: codAsset }});

    return vendido;
  }
};

module.exports = loginService;