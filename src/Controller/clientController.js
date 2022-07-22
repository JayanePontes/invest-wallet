const jwtToken = require('../Middleware/jwtToken');
const clientService = require('../Services/clientService');

const clientController = {
  loginClient: async (req, res) => {
    const { email, password } = req.body;

    const token = await clientService.login(email, password);

	  res.status(200).json({ token }); 
	},

	validateToken: (req, _res, next) => {
    const { authorization } = req.headers;
    jwtToken.validateToken(authorization);

    next();
  },
}

module.exports = clientController;
