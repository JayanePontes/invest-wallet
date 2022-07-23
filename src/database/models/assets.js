const createAssets = (sequelize, DataTypes) => {
  const Assets = sequelize.define('assets', {
    codAsset: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
  },
    amountAssets: DataTypes.INTEGER,
    value: DataTypes.DECIMAL(10,2),
  }, 

  const Assets = sequelize.define(
    'assets',
    {
      codAsset: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      amountAssets: DataTypes.INTEGER,
      value: DataTypes.DECIMAL(10,2),
    },
    {
      timestamps: false,
    },
  );
  return Assets;
};

module.exports = createAssets;
