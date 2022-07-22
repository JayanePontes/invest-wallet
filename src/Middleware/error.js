module.exports = (err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message: 'Some mandatory fields are missing' });
      break;

    case 'NotFoundError':
      res.status(404).json({ message: 'User does not exist' });
      break;
    case 'ConflictError':
      res.status(409).json({ message });
      break;
    default:
      res.status(500).json({ message });
      break;
  }
};