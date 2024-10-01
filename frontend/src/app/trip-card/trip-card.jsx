import React from 'react';
import { useNavigate } from 'react-router-dom';
const TripCardComponent = ({ trip }) => {
  const navigate = useNavigate();
  const isLoggedin = window.localStorage.getItem('tripCode') !== null;
  return (
    <div class="card">
      <div class="card-header">{trip.name}</div>
      <img src={`assets/images/${trip.image}`} alt="trip thumbnail" class="card-img-top"></img>
      <div class="card-body">
        <h6 class="card-subtitle mb-2 text-muted">{trip.resort}</h6>
        <p class="card-subtitle mt-3 mb-3 text-muted">${trip.length} only ${trip.perPerson | currency: 'USD': 'symbol'} per person</p>
        <p class="card-text" dangerouslySetInnerHTML={{ __html: trip.description }}></p>
        {isLoggedin && (
          <div>
            <button onClick={() => editTrip(trip)} class="btn btn-info">Edit Trip</button>
          </div>
        )}
      </div>
    </div>
  );

  const editTrip = (trip) => {
    // Remove the trip code from local storage and set it to the new trip code
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    navigate.replace('/edit-trip'); // Navigate to the edit-trip page
  };
};

export default TripCardComponent;
