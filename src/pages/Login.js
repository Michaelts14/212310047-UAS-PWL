import React, { useState } from 'react';
import './Login.css'; // Import CSS untuk styling
import { Link, useNavigate } from 'react-router-dom'; // Import Link dan useNavigate dari react-router-dom untuk navigasi

const Masuk = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login clicked with:', username, password);
    
    // Navigate to the schedule page after successful login
    navigate('/schedule');
  };

  return (
    <div className="login-container">
      <div className="background-image"></div>
      <div className="content-container">
        <div className="logo-container">    
          <h2>MIPOOL08</h2>
        </div>
        <form onSubmit={handleSubmit} className="form-container">
          <h3>Login</h3>
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
          <button type="submit">Login</button>
        </form>
        <p>Belum punya akun? <Link to="/.">Daftar</Link></p>
      </div>
    </div>
  );
};

export default Masuk;
