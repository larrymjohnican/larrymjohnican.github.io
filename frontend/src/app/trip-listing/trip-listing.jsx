import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TripListingComponent = () => {
  //Initialize state variables for trips and message
  const [trips, setTrips] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Get the browser's Navigate object
  const tripDataService = new TripDataService(); 

  //Define an addTrip function to navigate to the add-trip page
  const addTrip = () => {
    navigate.push('/add-trip'); //Navigate to the add-trip page
  };
// Use the useEffect hook to make a request to the trip data service when the component mounts
  useEffect(() => {
    // Make a GET request to retrieve trips from the database
    tripDataService.getTrips().subscribe({
      // Handle successful response  
      next: (value) => {
        setTrips(value); // Update state with retrieved trips
        if (value.length > 0) {
          setMessage(`There are ${value.length} trips available.`); // Update message state
        } else {
          setMessage('No trips retrieved from the database'); // Update message state
        }
        console.log(message); // Log the updated message to the console
      },
      // Handle error response
      error: (error) => {
        console.error('Error:', error); // Log any errors that occur
      }
    });
  }, []); // Run this effect once, when the component mounts

  return (
    <div>
      {/* Render trip card components for each trip*/}
      {trips.map((trip, index) => (
        <TripCardComponent key={index} trip={trip} />
      ))}
      {/* Display any error message or success message */}
      <p>{message}</p>
      {/* Define an add trip button to navigate to the add-trip page */}
      <button onClick={addTrip}>Add Trip</button>
    </div>
  );
};

export default TripListingComponent;
