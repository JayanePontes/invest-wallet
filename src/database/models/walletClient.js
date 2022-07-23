const createWalletClient = (sequelize, DataTypes) => {
  const walletClient = sequelize.define('WalletClients', {
    codClient: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
  },
  value: DataTypes.DECIMAL(10,2),
  }, 
  const walletClient = sequelize.define(
    'walletClient',
    {
      codClient: {
        type: DataTypes.INTEGER,
      },
      value: DataTypes.DECIMAL(10,2),
    },
    {
      timestamps: false,
    },
  );
  return walletClient;
};

module.exports = createWalletClient;
