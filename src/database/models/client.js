const sequelize = require('sequelize');

const createClient = (sequelize, DataTypes) => {
  const Client = sequelize.define('Clients', {
    codClient: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
  },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
    {
      tableName:'clients',
      timestamps: false,
    });  
  return Client;
}
  
module.exports = createClient;