const User = require('../models/user.model.js');

// List top active users
exports.active = (req, res) => {
  return res.status(200).send({message: "Success"});
}

// Retrive one user
exports.findOne = (req, res) => {
  return res.status(200).send({message: "Success"});;
}
