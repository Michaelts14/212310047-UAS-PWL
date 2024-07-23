import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const ExampleComponent = () => {
  return (
    <div>
      <h1>Contoh Penggunaan React Icons</h1>
      <p>
        <FaCheck /> Pembayaran berhasil
      </p>
      <p>
        <FaTimes /> Pembayaran gagal
      </p>
    </div>
  );
};

export default ExampleComponent;
