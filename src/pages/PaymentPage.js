// import React, { useEffect, useState } from 'react';
// import { FaCheck, FaTimes } from 'react-icons/fa';
// import './PaymentPage.css';

// const PaymentPage = () => {
//   const [bookingHistory, setBookingHistory] = useState([]);
//   const [paymentStatus, setPaymentStatus] = useState(null);
//   const [showPending, setShowPending] = useState(false);

//   useEffect(() => {
//     const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
//     setBookingHistory(bookings);
//   }, []);

//   const handlePaymentMethod = (method) => {
//     setShowPending(true);

//     setTimeout(() => {
//       const paymentSuccess = true;
//       if (paymentSuccess) {
//         setPaymentStatus('success');
//         updateBookingHistory();
//       } else {
//         setPaymentStatus('failed');
//       }
//       setShowPending(false);
//     }, 3000);

//     setTimeout(() => {
//       setShowPending(false);
//     }, 50000);
//   };

//   const updateBookingHistory = () => {
//     const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
//     setBookingHistory(bookings);
//   };

//   return (
//     <div className= "payment-container">
//       <p>Silakan lakukan pembayaran di sini.</p>
//       <ul>
//         {bookingHistory.map((booking, index) => (
//           <li key={index}>
//             {booking.userName} - {booking.selectedDate} - {booking.selectedTime} - Total: {booking.totalBilling} IDR
//           </li>
//         ))}
//       </ul>

//       <h2>Pilih Metode Pembayaran</h2>
//       <div className="payment-methods">
//         <button onClick={() => handlePaymentMethod('Dana')}>Dana</button>
//         <button onClick={() => handlePaymentMethod('OVO')}>OVO</button>
//         <button onClick={() => handlePaymentMethod('Transfer Bank')}>Transfer Bank</button>
//       </div>

//       {showPending ? (
//         <p>Pending...</p>
//       ) : (
//         paymentStatus && (
//           <div>
//             {paymentStatus === 'success' ? (
//               <p>
//                 Pembayaran berhasil <FaCheck style={{ color: 'green', marginLeft: '5px' }} />
//               </p>
//             ) : (
//               <p>
//                 Pembayaran gagal <FaTimes style={{ color: 'red', marginLeft: '5px' }} />
//               </p>
//             )}
//           </div>
//         )
//       )}
//     </div>
//   );
// };

// export default PaymentPage;