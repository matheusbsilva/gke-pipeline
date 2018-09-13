const mongoose = require('mongoose');

const ListeningSchema = mongoose.Schema({
  name: String,
  description: String, 
  timestamps: true 
})

const ApplicationSchema = mongoose.Schema({
  name: String,
  description: String, 
  listening: [ListeningSchema],
  timestamps: true 
})

const UserSchema = mongoose.Schema({
  name: String,
  createdListenings: [ListeningSchema],
  applications: [ApplicationSchema],
  timestamps: true 
})

module.exports = mongoose.model('User', UserSchema)
