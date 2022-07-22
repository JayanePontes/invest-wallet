const sequelize = require('sequelize');

const createWalletClient = (sequelize, DataTypes) => {
  const walletClient = sequelize.define('walletClient', {
    codClient: {
      type: DataTypes.INTEGER,
  },
    value: DataTypes.INTEGER,
  }, 
    {
      timestamps: false,
    });
  return walletClient;
}
    
module.exports = createWalletClient;