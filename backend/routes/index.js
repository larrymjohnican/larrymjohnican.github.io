// Require Express and HTTP modules
const express = require('express'),
      http = require('http');

//Require Cors and Dotenv modules
const cors = require('cors');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');

// Set the hostname and port for our server
const hostname = 'localhost';
const port = 3000;

// Create a new Express app
const app = express();

// Use CORS middleware to enable cross-origin requests
app.use(cors()); // Enable CORS for all routes

require('dotenv').config(); // Configure environment variables

// Get the MONGODB_URI environment variable, or default to localhost if not set
let dbUrl;
try {
  // Try to get the MONGODB_URI env var
  dbUrl = process.env.MONGODB_URI;
} catch (err) {
  // If error, log it and continue
  console.error(err);
}

// Set a default MongoDB URL if MONGODB_URI is not set
if (!dbUrl) {
  dbUrl = 'mongodb://localhost:27017';
}

// Define some routes
app.get('/users', (req, res) => {
MongoClient.connect(dbUrl, function(err, client) {
  if (err) {
    console.log(err);
    return;
  }
    const db = client.db();
    const collection = db.collection('users');
  
    // Find all users
    collection.find({}).toArray(function(err, result) {
    if (err) {
        res.status(400).send({ message: 'Error fetching user data' });
      } else {
        res.send(result);
    }
});

    client.close();
  });
});

app.get('/users/:id', (req, res) => {
  MongoClient.connect(dbUrl, function(err, client) {
    if (err) {
      console.log(err);
      return;
    }
    const db = client.db();
    const collection = db.collection('users');

    // Find a user by ID
    collection.findOne({ _id: req.params.id }, function(err, result) {
      if (err) {
        res.status(404).send({ message: 'User not found' });
      } else {
        res.send(result);
      }
    });

    client.close();
  });
});

app.post('/users', (req, res) => {
  MongoClient.connect(dbUrl, function(err, client) {
    if (err) {
      console.log(err);
      return;
    }
    const db = client.db();
    const collection = db.collection('users');

    // Create a new user
    collection.insertOne(req.body, function(err, result) {
      if (err) {
        res.status(400).send({ message: 'Error creating user' });
      } else {
        res.send(result);
      }
    });

    client.close();
  });
});

app.put('/users/:id', (req, res) => {
  MongoClient.connect(dbUrl, function(err, client) {
    if (err) {
      console.log(err);
      return;
    }
    const db = client.db();
    const collection = db.collection('users');

    // Update an existing user
    collection.updateOne({ _id: req.params.id }, req.body, function(err, result) {
      if (err) {
        res.status(400).send({ message: 'Error updating user' });
      } else {
        res.send(result);
      }
    });

    client.close();
  });
});

app.delete('/users/:id', (req, res) => {
  MongoClient.connect(dbUrl, function(err, client) {
    if (err) {
      console.log(err);
      return;
    }
    const db = client.db();
    const collection = db.collection('users');

    // Delete a user
    collection.deleteOne({ _id: req.params.id }, function(err, result) {
      if (err) {
        res.status(404).send({ message: 'User not found' });
      } else {
        res.send(result);
      }
    });

    client.close();
  });
});

// Define a middleware function that logs incoming request headers, sets response status code and header, and sends a HTML response
app.use((req, res) => {
  // Log the incoming request headers
  console.log(req.headers);
  // Set the response status code to 200 (OK)
  res.statusCode = 200;
  // Set the Content-Type header to text/html for an HTML response
  res.setHeader('Content-Type', 'text/html');
  // Send a simple HTML response with a heading
  res.end('<html><body><h1>This is a test server</h1></body></html>');
});

// Start the Express server on port 3000
http.createServer(app).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});