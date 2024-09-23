import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Import React Router components

import TripCardComponent from './app/trip-card/trip-card';
// Import the Trip Card component

import Home from './app/home/home';
// Import the Home page component
function App() {
  // Define the App component
  return (
    // Wrap the app in a BrowserRouter to enable client-side routing
    <BrowserRouter>
      {/* Define the Routes for the app */}
      <Routes>
        {/* Route for Add Trip, maps '/add-trip' URL to the TripCardComponent */}
        <Route path="/add-trip" element={<TripCardComponent />} />
        {/* Route for Edit Trip, maps '/edit-trip' URL to the TripCardComponent */}
        <Route path="/edit-trip" element={<TripCardComponent />} />
        {/* Route for Login, maps '/login' URL to the TripCardComponent */}
        <Route path="/login" element={<TripCardComponent />} />
        {/* Default route, maps '/' URL to the HomeComponent */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
