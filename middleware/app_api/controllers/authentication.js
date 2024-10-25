const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Define the User schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  hash: String,
  salt: String
});

// Method to set password and hash it using bcrypt
userSchema.methods.setPassword = async function(password) {
  this.salt = await bcrypt.genSalt(10);
  this.hash = await bcrypt.hash(password, this.salt);
};

// Method to validate password
userSchema.methods.validatePassword = async function(password) {
  return bcrypt.compare(password, this.hash);
};

// Method to generate JWT
userSchema.methods.generateJwt = function() {
  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name
  }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
