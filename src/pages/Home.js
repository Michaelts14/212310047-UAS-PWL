import React, { useState } from 'react';
import './Home.css'; // Import CSS untuk styling
import { Link, useNavigate } from 'react-router-dom'; // Import Link dan useNavigate dari react-router-dom untuk navigasi

const Daftar = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle register logic here
    console.log('Register clicked with:', username, password, confirmPassword);
    
    // Navigate to the login page after successful registration
    navigate('/login');
  };

  return (
    <div className="register-container">
      <div className="background-image"></div>
      <div className="content-container">
        <div className="logo-container">
          <h2>MIPOOL08</h2>
        </div>
        <form onSubmit={handleSubmit} className="form-container">
          <h3>Register</h3>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            required
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirm Password"
            required
          />
          <button type="submit">Register</button>
        </form>
        <p>Sudah punya akun? <Link to="/">Masuk</Link></p>
      </div>
    </div>
  );
};

export default Daftar;
