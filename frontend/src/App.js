// Import necessary components and libraries
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './app/home/home'; // Import the Home page component
import TripCardComponent from './app/trip-card/trip-card'; // Import the Trip Card component
import Menubar from '../src/forms/menubar';
import AddTripComponent from './app/add-trip/add-trip';
import LoginComponent from './app/login/login';

// Define the App component
function App() {
  return (
    // Wrap the app in a BrowserRouter to enable client-side routing
    <BrowserRouter>
    <Menubar />
      {/* Define the Routes for the app */}
      <Routes>
        {/* Route for Add Trip, maps '/add-trip' URL to the TripCardComponent */}
        <Route path="/add-trip" element={<AddTripComponent />} />
        
        {/* Route for Edit Trip, maps '/edit-trip' URL to the TripCardComponent */}
        <Route path="/edit-trip" element={<TripCardComponent />} />
        
        {/* Route for Login, maps '/login' URL to the TripCardComponent */}
        <Route path="/login" element={<LoginComponent />} />
        
        {/* Default route, maps '/' URL to the HomeComponent */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
