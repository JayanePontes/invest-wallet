const sequelize = require('sequelize');

const createAssetsClient = (sequelize, DataTypes) => {
  const assetsClient = sequelize.define('AssetsClients', {
    codClient: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    codAsset: {
      type: DataTypes.INTEGER,
      primaryKey:true,
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

  assetsClient.associate = (models) => {
    models.Clients.belongsToMany(models.assets, {
      as: 'assets',
      through: assetsClient,
      foreignKey: 'codClient',
      otherKey: 'codAsset',
    });
    models.assets.belongsToMany(models.Clients, {
      as: 'Clients',
      through: assetsClient,
      foreignKey: 'codAsset',
      otherKey: 'codClient',
    });
  }

  return assetsClient;
}

module.exports = createAssetsClient;