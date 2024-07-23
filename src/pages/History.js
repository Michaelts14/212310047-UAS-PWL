import React, { useEffect, useState } from "react";
import "./History.css";

const History = () => {
    const [bookings, setBookings] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const storedBookings = JSON.parse(localStorage.getItem('schedulerEvents')) || [];
        setBookings(storedBookings);

        const calculateTotalPrice = (bookings) => {
            return bookings.reduce((total, booking) => total + (booking.price || 0), 0);
        };

        setTotalPrice(calculateTotalPrice(storedBookings));
    }, []);

    return (
        <div className="history-container">
            <h1>Riwayat Pemesanan</h1>
            {bookings.length === 0 ? (
                <p className="no-bookings">Tidak ada pemesanan.</p>
            ) : (
                <>
                    <table className="booking-table">
                        <thead>
                            <tr>
                                <th>Pemesan</th>
                                <th>Mulai</th>
                                <th>Berakhir</th>
                                {/* <th>Harga</th> Tambahkan kolom harga */}
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking, index) => (
                                <tr key={index}>
                                    <td>{booking.title}</td>
                                    <td>{new Date(booking.start).toLocaleString()}</td>
                                    <td>{new Date(booking.end).toLocaleString()}</td>
                                    {/* <td>Rp {booking.price?.toLocaleString() || '0'}</td>  */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* <h3>Lokasi : Jl. Ahmad Yani No.02 Kecamatan Bogor Tengah Kota Bogor 16141</h3>
                    <h3>Nomor Admin : 087746528536</h3> */}
                    {/* <div className="total-price"> */}
                        {/* <p>Total Harga: Rp {totalPrice.toLocaleString()}</p>  */}
                        {/* Tampilkan total harga */}
                    {/* </div> */}
                    {/* <div className="btn-container"><div className="btn-submit"><a href="https://api.whatsapp.com/send?phone=6287746528536" target="_blank">Kontak Admin untuk Konfirmasi</a></div></div> */}
                </>
            )}
        </div>
    );
};

export default History;
