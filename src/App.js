import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Import React Router components
import AddTrip from './add-trip/AddTrip';
// Import Add Trip component
import TripListing from './trip-listing/TripListing';
// Import Trip Listing component
import EditTrip from './edit-trip/EditTrip';
// Import Edit Trip component
import Login from './login/Login';
// Import Login component

function App() {
  // Define the App component
  return (
    // Wrap the app in a BrowserRouter to enable client-side routing
    <BrowserRouter>
      {/* Define the Routes for the app */}
      <Routes>
        {/* Route for Add Trip, maps '/add-trip' URL to the AddTrip component */}
        <Route path="/add-trip" element={<AddTrip />} />
        {/* Route for Edit Trip, maps '/edit-trip' URL to the EditTrip component */}
        <Route path="/edit-trip" element={<EditTrip />} />
        {/* Route for Login, maps '/login' URL to the Login component */}
        <Route path="/login" element={<Login />} />
        {/* Default route, maps '/' URL to the TripListing component */}
        <Route path="/" element={<TripListing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
