const express = require('express'); // Express app
const router = express.Router(); // Router logic
const authenticateJWT = require('../authenticateJWT'); // JWT Middleware

// Import controllers
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

// Authentication routes
router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);

// Trips routes
router
    .route('/trips')
    .get(tripsController.tripsList) // GET: List trips
    .post(authenticateJWT, tripsController.tripsAddTrip); // POST: Add a new trip

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode) // GET: Find trip by code
    .put(authenticateJWT, tripsController.tripsUpdateTrip); // PUT: Update a trip

module.exports = router;
