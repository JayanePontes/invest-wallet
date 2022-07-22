const { Sequelize } = require("sequelize/types");

const createAssets = (sequelize, DataTypes) => {
  const Assets = sequelize.define('client', {
    codAsset: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
  },
    amountAssets: DataTypes.STRING,
    value: DataTypes.DECIMAL,
  }, 
    {
      timestamps: false,
    });
    
  Assets.associate = (models) => {
    Assets.hasMany(models.assetsClient, {
      foreignKey: 'codAsset', as: 'assetsClient',
    });
  };
  return Assets;
}
    
module.exports = createAssets;