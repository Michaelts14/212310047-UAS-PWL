import React from 'react';
import './Header.css'; // Import CSS file

const Header = ({ storeName }) => {
  return (
    <header className="header">
      <div className="store-name">{storeName}</div>
    </header>
  );
}

export default Header;
