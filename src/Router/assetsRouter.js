const { Router } = require('express');
const assetsController = require('../Controller/assetsController');

const router = Router();

router.get('/assets', assetsController.getAllAssets);
router.get('/assets/:codAsset', assetsController.getAsset);

module.exports = router;