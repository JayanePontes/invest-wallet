const { Sequelize } = require("sequelize/types");

const createWalletClient = (sequelize, DataTypes) => {
  const walletClient = sequelize.define('walletClient', {
    codClient: {
      type: DataTypes.INTEGER,
  },
    value: DataTypes.DECIMAL,
  }, 
    {
      timestamps: false,
    });
    
  walletClient.associate = (models) => {
    walletClient.belongsTo(models.client, {
       foreignKey: 'codAsset', as: 'client',
      });
  };
  return walletClient;
}
    
module.exports = createWalletClient;