const sequelize = require('sequelize');

const createAssets = (sequelize, DataTypes) => {
  const Assets = sequelize.define('assets', {
    codAsset: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
  },
    amountAssets: DataTypes.INTEGER,
    value: DataTypes.INTEGER,
  }, 
    {
      timestamps: false,
    });
  return Assets;
}
    
module.exports = createAssets;