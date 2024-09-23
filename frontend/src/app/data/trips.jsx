import React from 'react';

const trips = () => {
  const trips = [
    {
      "code": "GALR210214",
      "name": "Gale Reef",
      "length": "4 nights / 5 days",
      "start": "2021-02-14T08:00:00Z",
      "resort": "Emerald Bay, 3 stars",
      "perPerson": "799.00",
      "image": "reef1.jpg",
      "description": "Gale Reef FROM APP_ADMIN, Sed et augue lorem..."
    },
    {
      "code": "DAWR210315",
      "name": "Dawson’s Reef",
      "length": "4 nights / 5 days",
      "start": "2021-03-15T08:00:002",
      "resort": "Blue Lagoon, 4 stars",
      "perPerson": "1199.00",
      "image": "reef2.jpg",
      "description": "Integer magna leo, posuere et dignissim vitae..."
    },
    {
      "code": "CLAR210621",
      "name": "Claire’s REEF",
      "length": "4 nights / 5 days",
      "start": "2021-06-21T08:00:00z",
      "resort": "Coral Sands,, 5 stars",
      "perPerson": "1999.00",
      "image": "reef3.jpg",
      "description": "Donec sed felis risus. Nulla facilisi..."
    }
  ];

  return (
    <div>
      {trips.map((trip, index) => (
        // Your code goes here
      ))}
    </div>
  );
};

export default TripList;
