const sequelize = require('sequelize');

const createAssetsClient = (sequelize, DataTypes) => {
  const assetsClient = sequelize.define('assetsClient', {
    codClient: {
      type: DataTypes.INTEGER,
    },
    codAsset: {
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
  });

  assetsClient.associate = (models) => {
    models.client.belongsToMany(models.assets, {
      as: 'assets',
      through: assetsClient,
      foreignKey: 'codClient',
      otherKey: 'codAsset',
    });
    models.assets.belongsToMany(models.client, {
      as: 'client',
      through: assetsClient,
      foreignKey: 'codAsset',
      otherKey: 'codClient',
    });
  }

  return assetsClient;
}

module.exports = createAssetsClient;