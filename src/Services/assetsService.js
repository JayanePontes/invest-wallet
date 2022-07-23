const db = require('../database/models/index');

const assetsService = {
  getAsset: async (codAsset) => {
    const asset = await db.assets.findAll({ where: { codAsset } });

    if (asset.length === 0) return 'error';

    return asset;
  },

  getAllAssets: async () => {
    const assets = await db.assets.findAll();
    
    return assets;
  },
};

module.exports = assetsService;