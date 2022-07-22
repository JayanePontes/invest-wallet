const createClient = (sequelize, DataTypes) => {
  const Client = sequelize.define('client', {
    codClient: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
  },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      passwordHash: DataTypes.STRING,
  }, {
      timestamps: false,
  });
  
  Client.associate = (models) => {
    Client.hasMany(models.assetsClient, {
      foreignKey: 'codClient', as: 'assetsClient',
    });
    Client.hasMany(models.walletClient, {
      foreignKey: 'codClient', as: 'walletClient',
    });
  };
  
  return Client;
}
  
module.exports = createClient;