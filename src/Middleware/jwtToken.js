require('dotenv/config');
const jwt = require('jsonwebtoken');

const jwtToken = {
  createToken: (data) => {
    const token = jwt.sign({ data }, process.env.JWT_SECRET);
    return token;
  },

  validateToken: async (req, res, next) => {
    const token = req.headers.authorization;
    try {
    if (!token) return res.status(401).json({ message: 'Token not found' });
    
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload.user;
    
    next();
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
      }
    },
};

module.exports = jwtToken;