// backend/controllers/authentication.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../middleware/app_api/models/user'); 
const secret = process.env.JWT_SECRET || 'your_jwt_secret_key';

module.exports = {
  // User login function
  login: async (req, res) => {
    console.log("Login function triggered");  // Debugging line
    const { username, password } = req.body;
    try {
      // Find user in the database
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Compare password with stored hash
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Generate a JWT token
      const token = jwt.sign({ id: user._id }, secret, { expiresIn: '1h' });
      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  },

  // Middleware to validate JWT
  validateToken: (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
      return res.status(403).json({ message: 'Access denied' });
    }
    try {
      const decoded = jwt.verify(token, secret);
      req.user = decoded; // Pass user info to the next middleware
      next();
    } catch (error) {
      res.status(401).json({ message: 'Invalid or expired token' });
    }
  },

  // Optional: Logout function
  logout: (req, res) => {
    // For stateless JWT, simply notify user of logout; token will expire naturally
    res.status(200).json({ message: 'Logout successful' });
  },
};
