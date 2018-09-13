const User = require('../models/user.model.js');

// List top active users
exports.active = (req, res) => {
  User.find()
    .then(users => {
      res.status(200).send(users);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error occurred while retrieving the users"
      });
    });
};

// Retrive one user
exports.findOne = (req, res) => {
  return res.status(200).send({message: "Success"});;
}
