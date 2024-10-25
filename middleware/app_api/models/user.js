const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Define the User schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    hash: String,
    salt: String
});

// Use bcrypt for password hashing
userSchema.methods.setPassword = async function(password) {
    this.hash = await bcrypt.hash(password, 10);  // Salt rounds are 10 by default
};

// Use bcrypt for password validation
userSchema.methods.validPassword = async function(password) {
    return await bcrypt.compare(password, this.hash);
};

// Generate JWT token
userSchema.methods.generateJwt = function() {
    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
    }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const User = mongoose.model('users', userSchema);
module.exports = User;
