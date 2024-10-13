import React from 'react';
import TripCardComponent from '../app/trip-card'; // Assuming you have a TripCard component

const TripList = ({ trips, addTrip }) => {
  return (
    <div>
      {/* Add Trip Button */}
      <div>
        <button onClick={addTrip} className="btn btn-info">Add Trip</button>
      </div>

      {/* Trips List */}
      <div className="row">
        {trips.map((trip, index) => (
          <div key={index} className="col-3">
            <TripCardComponent trip={trip} className="card-deck mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripList;
