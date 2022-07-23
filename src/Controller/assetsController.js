const assetsService = require('../Services/assetsService');

const assetsController = {
  getAsset: async (req, res) => {
    const { codAsset } = req.params;

    const asset = await assetsService.getAsset(codAsset);

    if (asset === 'error') return res.status(400).json({ message: 'codAsset inexistente'});

    res.status(200).json(asset);
  },

  getAllAssets: async (_req, res) => {
    const assets = await assetsService.getAllAssets();

    res.status(200).json(assets);
  },
};

module.exports = assetsController;