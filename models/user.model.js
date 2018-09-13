const mongoose = require('mongoose');

var ListingSchema = mongoose.Schema({
  name: String,
  description: String, 
  createdAt: Date
})

var ApplicationSchema = mongoose.Schema({
  name: String,
  description: String, 
  listing: ListingSchema,
  createdAt: Date
})

var UserSchema = mongoose.Schema({
  name: String,
  createdListings: [ListingSchema],
  applications: [ApplicationSchema],
  createdAt: Date
})

module.exports = mongoose.model('User', UserSchema)
