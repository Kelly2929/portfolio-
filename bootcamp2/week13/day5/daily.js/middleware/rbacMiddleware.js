
const { users, roles } = require('../data');

const authenticateUser = (req, res, next) => {

  const user = users.find(u => u.username === req.headers.username);
  if (!user) {
    return res.status(401).send('Authentication required');
  }
  req.user = user;
  next();
};

const authorizeRole = (role) => {
  return (req, res, next) => {
    if (!roles[req.user.role].includes(role)) {
      return res.status(403).send('Access denied');
    }
    next();
  };
};

module.exports = { authenticateUser, authorizeRole };
