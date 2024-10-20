import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../forms/login-form'; // Import the LoginForm component
import background from '../../images/bg-pattern.jpg';

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

  // Simulate login process
  const doLogin = () => {
    const timer = setTimeout(() => {
      navigate('/'); // Navigate to home after 3 seconds
    }, 3000);
    
    return () => clearTimeout(timer);
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
      <h2>Login</h2>
      <LoginForm
        credentials={credentials}
        handleInputChange={handleInputChange}
        onLoginSubmit={onLoginSubmit}
      />
      {formError && <p style={{ color: 'red' }}>{formError}</p>}
    </div>
  );
};

export default LoginComponent;
