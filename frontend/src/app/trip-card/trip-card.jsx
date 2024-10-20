import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '../util/utils';

const TripCardComponent = ({ trip }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('logged-in')) {
      setLoggedIn(true);
    }
  }, []);

  const editTrip = (trip) => {
    if (!trip.code) return;
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    navigate.replace('/edit-trip'); // Navigate to the edit-trip page
  };

  return (
    <div className="card">
      <img src={trip.image} alt={trip.name} />
      <h2>{trip.name}</h2>
      <p>Per Person: {formatCurrency(trip.perPerson)}</p>
      <button onClick={() => editTrip(trip)} className="btn btn-info">Edit Trip</button>
    </div>
  );
};

export default TripCardComponent;
