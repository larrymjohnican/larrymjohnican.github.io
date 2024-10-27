const mongoose = require('mongoose');

// Define the trip schema
const tripSchema = new mongoose.Schema({
  code: { type: String, required: true, index: true },
  name: { type: String, required: true, index: true },
  length: { type: String, required: true },
  start: { type: Date, required: true }, // Changed from String to Date
  resort: { type: String, required: true },
  perPerson: { type: Number, required: true }, // Changed from String to Number
  image: { type: String, required: true },
  description: { type: String, required: true }
}, {
  timestamps: true // Adds createdAt and updatedAt fields automatically
});

// Create and export the Trip model
const Trip = mongoose.model('Trip', tripSchema); // Changed 'trips' to 'Trip'

module.exports = Trip;
