const db = require('../database/models/index');
const jwtToken = require('../Middleware/jwtToken');

const loginService = {  
  login: async (email, password) => {
    const user = await db.Clients.findOne({
      attributes: { exclude: ['name'] },
      where: { email }, 
    });

    if (!user || user.password !== password) {
      const e = new Error('NotFoundError');
      e.name = 'NotFoundError';
      throw e;
    }

    const { passwordHash, ...userWithoutPassword } = user.dataValues;

    const token = jwtToken.createToken(userWithoutPassword);

    return token;
  },

  validateToken: (token) => {
    const data = jwtToken.validateToken(token);

    return data;
  },
};

module.exports = loginService;