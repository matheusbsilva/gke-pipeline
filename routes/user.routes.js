module.exports = (app) => {
  const users = require('../controllers/user.controller.js');

  // List top active users
  app.get('/topActiveUsers', users.active);

  // Retrieve a single user with userId
  app.get('/users/:userId', users.findOne);
}
