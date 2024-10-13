import React, { useState } from 'react';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: ''
  });
  
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    if (!credentials.name || !credentials.email || !credentials.password) {
      setFormError('All fields are required');
    } else {
      setFormError('');
      console.log('Form submitted successfully', credentials);
      // Add actual login logic here
    }
  };

  return (
    <div className="row">
      <div className="col-12 col-md-8">
        <h2>Login</h2>
        <form onSubmit={onLoginSubmit}>
          {formError && (
            <div role="alert" className="alert alert-danger">
              {formError}
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={credentials.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={credentials.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="e.g. 12+ alphanumerics"
              value={credentials.password}
              onChange={handleChange}
              className="form-control"
              id="password"
            />
          </div>
          
          <button type="submit" className="btn btn-primary">
            Sign In!
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
