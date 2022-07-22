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

    if (amountAssets > assets.amountAssets) {
      return 'error';
    }
    await db.AssetsClients.create({ codClient, codAsset, amountAssets, value });
    
    const comprado = await db.AssetsClients.findAll({ 
      attributes: ['codClient', 'codAsset', 'amountAssets'],
      where: { codAsset: codAsset },
    });

    await db.assets.update(newAmount, { where: { codAsset: codAsset }});
    
    return comprado;
  },
};

module.exports = loginService;