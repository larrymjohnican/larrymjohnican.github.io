// middleware/app_api/controllers/authentication.js
const User = require('../models/user');
const passport = require('passport');

// Registration Controller
const register = async (req, res) => {
  const { name, email, password } = req.body;

  // Check for all required fields
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    // Create a new user and set the password
    const user = new User({ name, email });
    await user.setPassword(password);
    await user.save();

    // Generate JWT token
    const token = user.generateJwt();
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Error registering user.' });
  }
};

// Login Controller
const login = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: 'All fields required.' });
  }

  passport.authenticate('local', (err, user, info) => {
    if (err) return res.status(404).json(err);

    if (user) {
      const token = user.generateJwt();
      return res.status(200).json({ token });
    } else {
      return res.status(401).json(info);
    }
  })(req, res);
};

module.exports = { register, login };
