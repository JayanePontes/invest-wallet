const sequelize = require('sequelize');

const createAssetsClient = (sequelize, DataTypes) => {
  const assetsClient = sequelize.define('assetsClient', {
    codClient: {
      type: DataTypes.INTEGER,
    },
    codAsset: {
      type: DataTypes.INTEGER,
    },
    amountAssets: {
      type: DataTypes.INTEGER,
    },
    value: {
      type: DataTypes.INTEGER
    }
  }, {
    timestamps: false,
  });

  return assetsClient;
}

module.exports = createAssetsClient;