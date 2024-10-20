import React from 'react';
import trips from '../data/trips'; // 'trips' here will be the array of trip objects
import logo from '../../images/logo.png'; //import Travlr Getaways logo
import background from '../../images/bg-pattern.jpg'; //imports background
import { Button } from "flowbite-react";

const HomeComponent = () => {
  return (
    <div className="pl-64"> {/* Adjust padding to the left to account for the sidebar width */}
      <div className="bg-fixed min-h-screen bg-cover" style={{ backgroundImage: `url(${background})`, zIndex: 1 }}>
        <img src={logo} alt="Travlr Getaways!" className="w-48 h-48 mx-auto mb-4"/>
        <h2 className='flex justify-center'>Trips!</h2>
        <div className='flex justify-center items-center min-h-screen'>
          <div className='grid grid-cols-2 gap-x-4 gap-y-4' style={{ width: '90%' }}>
            {trips.map((trip, index) => (
              <div key={index} className="bg-white shadow-md p-4 rounded-md">
                <img src={trip.image} alt={trip.name}/>
                <Button>
                  <span className='text-lg font-bold text-black mt-2 mb-4'>{trip.name}</span>
                </Button>
                <p>Code: {trip.code}</p>
                <p>Per Person: ${trip.perPerson}</p>
                <p>Resort: {trip.resort}</p>
                <p>Length: {trip.length}</p>
                <p>Description: {trip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default HomeComponent;
