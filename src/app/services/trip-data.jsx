import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define a TripDataService class
const TripDataService = () => {
  // Constructor to initialize the data service (not applicable in React)
  const [storage, setStorage] = useState(null); // Initialize storage state

  // Base URL for API requests
  const baseUrl = 'http://localhost:3000/api/trips';
  const url = `${baseUrl}/trips/`; // URL for trip-related requests

  // Get trips from the API (Observable)
  const getTrips = () => {
    // Make a GET request to retrieve trips from the database
    axios.get(url).then(response => console.log('Get Trips: ', response));
  };

  // Add a new trip to the API (Observable)
  const addTrip = (formData) => {
    // Make a POST request to create a new trip
    axios.post(url, formData).then(response => console.log('Add Trip: ', response));
  };

  // Get a specific trip from the API (Observable)
  const getTrip = (tripCode) => {
    // Make a GET request to retrieve a specific trip from the database
    axios.get(`${url}${tripCode}`).then(response => console.log('Get Trip: ', response));
  };

  // Update an existing trip in the API (Observable)
  const updateTrip = (formData) => {
    // Make a PUT request to update an existing trip
    axios.put(`${url}${formData.code}`, formData).then(response => console.log('Update Trip: ', response));
  };

  // Login endpoint - returns JWT token (Observable)
  const login = (user, passwd) => {
    // Make a POST request to our /login endpoint to authenticate
    handleAuthAPICall('login', user, passwd);
  };

  // Register endpoint - creates new user and returns JWT token (Observable)
  const register = (user, passwd) => {
    // Make a POST request to our /register endpoint to create a new user
    handleAuthAPICall('register', user, passwd);
  };

  // Helper method to process both login and register methods
  const handleAuthAPICall = (endpoint, user, passwd) => {
    // Create a JSON object with user details
    let formData = {
      name: user.name,
      email: user.email,
      password: passwd
    };
    // Make a POST request to our /login or /register endpoint
    axios.post(`${baseUrl}/${endpoint}`, formData).then(response => console.log('Handle Auth API Call: ', response));
  };

  return (
    <div>
      {/* Add your JSX components here */}
    </div>
  );
};

export default TripDataService;
