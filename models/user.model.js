const mongoose = require('mongoose');

var ListeningSchema = mongoose.Schema({
  name: String,
  description: String, 
  createdAt: Date
})

var ApplicationSchema = mongoose.Schema({
  name: String,
  description: String, 
  listening: ListeningSchema,
  createdAt: Date
})

var UserSchema = mongoose.Schema({
  name: String,
  createdListenings: [ListeningSchema],
  applications: [ApplicationSchema],
  createdAt: Date
})

module.exports = mongoose.model('User', UserSchema)
