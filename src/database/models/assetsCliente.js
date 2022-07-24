const createAssetsClient = (sequelize, DataTypes) => {
  const assetsClient = sequelize.define('AssetsClients', {
    codClient: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    codAsset: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    amountAssets: DataTypes.INTEGER,
    value: DataTypes.DECIMAL(10,2),
    investesAmount: DataTypes.DECIMAL(10,2),
  },
    {
      timestamps: false,
    },
  );

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
  };
  return assetsClient;
};

module.exports = createAssetsClient;
