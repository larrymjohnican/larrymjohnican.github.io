// Import necessary modules
const express = require('express');
const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectToDatabase } = require('./config/database');

// Initialize dotenv to use environment variables
dotenv.config();

// Initialize Express app
const app = express();
const hostname = 'localhost';
const port = 3000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // To handle JSON requests

// Database connection
connectToDatabase(process.env.MONGODB_URI || 'mongodb://localhost:27017')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Import Routes
const userRoutes = require('./routes/users');

// Use routes
app.use('/users', userRoutes);

// Define a simple route for the root
app.get('/', (req, res) => {
  res.status(200).send('<html><body><h1>This is a test server</h1></body></html>');
});

// Start the server
http.createServer(app).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
