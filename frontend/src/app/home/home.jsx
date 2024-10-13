import React from 'react';
import trips from '../data/trips'; // 'trips' here will be the array of trip objects

const HomeComponent = () => {
  return (
    <div>
      <h1>Welcome to our website!</h1>
      <h2>Trips</h2>
      {trips.map((trip, index) => (
        <div key={index}>
          <img src={trip.image} alt={trip.name} />
          <p>{trip.name}</p>
          <p>Code: {trip.code}</p>
          <p>Per Person: ${trip.perPerson}</p>
          <p>Resort: {trip.resort}</p>
          <p>Length: {trip.length}</p>
          <p>Description: {trip.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HomeComponent;
