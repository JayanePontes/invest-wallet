const createAssets = (sequelize, DataTypes) => {
  const Assets = sequelize.define('assets', {
    codAsset: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
  },
    name: DataTypes.STRING,
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
