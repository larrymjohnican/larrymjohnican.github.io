import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../forms/login-form'; // Import the LoginForm component

const LoginComponent = () => {
  const navigate = useNavigate();
  const [formError, setFormError] = useState('');
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  // Function to validate form data
  const validateCredentials = (credentials) => {
    if (!credentials.email || !credentials.password) {
      setFormError('Both fields are required.');
      return false;
    }
    if (credentials.password.length < 6) {
      setFormError('Password must be at least 6 characters long.');
      return false;
    }
    return true;
  };

  // Handle form submission
  const onLoginSubmit = (e) => {
    e.preventDefault(); // Prevent default form behavior
    setFormError('');

    if (!validateCredentials(credentials)) {
      return;
    }
    
    doLogin();
  };

  // Login process with JWT
  const doLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/auth/login', { // Update URL to your backend endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        setFormError(errorData.message || 'Login failed');
        return;
      }

      const data = await response.json();
      const token = data.token; // JWT token from backend response

      // Save token in localStorage
      localStorage.setItem('jwtToken', token);

      // Navigate to home page
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      setFormError('An error occurred while logging in');
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value
    }));
  };

  return (
    <div>
      <h2 className="text-center text-2xl mb-4">Login</h2>
      <LoginForm
        credentials={credentials}
        handleInputChange={handleInputChange}
        onLoginSubmit={onLoginSubmit}
        formError={formError} // Pass the error message as a prop
      />
      {formError && <p className="text-red-500 text-center mt-2">{formError}</p>}
    </div>
  );
};

export default LoginComponent;
