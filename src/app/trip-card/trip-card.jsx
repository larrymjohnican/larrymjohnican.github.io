import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Import the Trip model and AuthenticationService if needed


const TripCardComponent = ({ trip }) => {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedIn] = useState(false);

  //This effect will run once when the component mounts
  useEffect(() => {
    //Set the isLoggedIn state based on the authentication service
    setIsLoggedIn(!!window.localStorage.getItem('tripCode'));
  }, []);

  const editTrip = () => {
    //Remove the trip code from local storage and set it to the new trip code
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    navigate.push('/edit-trip'); //Navigate to the edit-trip page
  };

  return (
    <div>
      {/* Add your component template here */}
    </div>
  );
};

export default TripCardComponent;
