// Import necessary components and libraries
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// Define the Navbar component
const Navbar = () => {
  // Use the useState hook to create a state variable for user login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Use the useEffect hook to fetch the login status from your service (similar to Angular's OnInit)
  useEffect(() => {
    const isLoggedIn = AuthenticationService.isLoggedIn();
    setIsLoggedIn(isLoggedIn);
  }, []);

  // Define the logout function, which will be called when the user logs out
  const handleLogout = () => {
    AuthenticationService.logout();
  };

  return (
    <nav>
      {/* Use the Link component from React Router to create links */}
      {isLoggedIn ? (
        <Link to="/home" onClick={handleLogout}>
          Logout
        </Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
