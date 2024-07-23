// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import PaymentPage from './PaymentPage'; 
import Schedule from './Schedule';
import Login from './Login'
import History from './History';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/payment" element={<PaymentPage />} /> {/* Rute untuk halaman pembayaran */}
        <Route path="/login" element={<Login />} />
        <Route path="/history" element={<History />} />

        {/* Tambahkan rute-rute untuk halaman lain jika diperlukan */}
      </Routes>
    </Router>
  );
};

export default App;
