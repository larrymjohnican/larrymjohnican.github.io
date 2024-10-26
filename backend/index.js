// backend/index.js / main server file)
const express = require('express');
const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectToDatabase } = require('./config/database'); 
dotenv.config();

const app = express();
const hostname = 'localhost';
const port = 3000;

app.use(cors());
app.use(express.json());

// Connect to the database
connectToDatabase();

// Import and use routes
const userRoutes = require('./routes/users');
const travelRoutes = require('./routes/travel');
const authRoutes = require('./routes/auth'); // Import the new auth routes

app.use('/users', userRoutes);
app.use('/travel', travelRoutes);
app.use('/auth', authRoutes); // Use /auth for authentication routes

// Define a simple route for the root
app.get('/', (req, res) => {
  res.status(200).send('<html><body><h1>This is a test server</h1></body></html>');
});

// Start the server
http.createServer(app).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
