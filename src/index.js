import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App'; // Ensure that the path to App.js is correct
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();