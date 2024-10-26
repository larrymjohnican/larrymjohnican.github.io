// Bring in the DB connection and the Trip schema
const Mongoose = require('./db');
const Trip = require('./travlr');
const path = require('path'); // For handling file paths
const fs = require('fs');

// Read seed data from JSON file
const tripsFilePath = path.resolve(__dirname, '../../data/trips.json');
let trips;

// Handle JSON file reading with error handling
try {
  trips = JSON.parse(fs.readFileSync(tripsFilePath, 'utf-8'));
  console.log('Seed data loaded successfully.');
} catch (err) {
  console.error('Error reading the trips JSON file:', err);
  process.exit(1); // Exit with error code
}

// Delete existing records, then insert seed data
const seedDB = async () => {
  try {
    await Trip.deleteMany({});
    console.log('Existing trips deleted.');

    await Trip.insertMany(trips);
    console.log('Seed data inserted successfully.');
  } catch (err) {
    console.error('Error seeding the database:', err);
  }
};

// Close the MongoDB connection and exit
seedDB().then(async () => {
  try {
    await Mongoose.connection.close();
    console.log('MongoDB connection closed.');
    process.exit(0);
  } catch (err) {
    console.error('Error closing the MongoDB connection:', err);
    process.exit(1); // Exit with error code
  }
});
