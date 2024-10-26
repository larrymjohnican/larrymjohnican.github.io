// routes/auth.js
const express = require('express');
const router = express.Router();
const authentication = require('../controllers/authentication');

// Login route with console log for debugging
router.post('/login', (req, res, next) => {
    console.log("Login endpoint hit");
    next();
}, authentication.login);

// Example of a protected route
router.get('/protected', authentication.validateToken, (req, res) => {
  res.status(200).json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;
