import { useState, useEffect } from "react";
import { Scheduler } from "@aldabil/react-scheduler";
import { week } from "./week";
import "./Schedule.css";
import { useNavigate } from 'react-router-dom';

const Schedule = () => {
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
    const [newEventPrice, setNewEventPrice] = useState(0); // State untuk harga event baru

    // Fungsi untuk menghitung harga berdasarkan durasi event
    const calculatePrice = (event) => {
        const start = new Date(event.start);
        const end = new Date(event.end);
        const durationInHours = (end - start) / (1000 * 60 * 60);
        return durationInHours * 50000; // 50,000 per hour
    };

    // Load events from localStorage when component mounts
    useEffect(() => {
        const storedEvents = localStorage.getItem("schedulerEvents");
        if (storedEvents) {
            const parsedEvents = JSON.parse(storedEvents).map(event => ({
                ...event,
                start: new Date(event.start),
                end: new Date(event.end),
                price: calculatePrice(event) // Hitung harga saat memuat
            }));
            setEvents(parsedEvents);
        }
    }, []);

    // Save events to localStorage whenever they change
    useEffect(() => {
        const eventsToStore = events.map(event => ({
            ...event,
            start: event.start.toISOString(),
            end: event.end.toISOString()
        }));
        localStorage.setItem("schedulerEvents", JSON.stringify(eventsToStore));
    }, [events]);

    const handleConfirm = async (event, action) => {
        const price = calculatePrice(event);
        event = { ...event, price };

        setNewEventPrice(price); // Set harga event baru

        if (action === "create") {
            setEvents((prevEvents) => [...prevEvents, event]);
        } else if (action === "edit") {
            setEvents((prevEvents) =>
                prevEvents.map((evt) => (evt.id === event.id ? event : evt))
            );
        }
        return event;
    };

    const handleDelete = async (deletedId) => {
        setEvents((prevEvents) =>
            prevEvents.filter((event) => event.id !== deletedId)
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/history');
    };

    return (
        <div className="schedule-container">
            <div style={{ backgroundColor: "black", margin: "0" }}>
                <h1 style={{ textAlign: "center", color: "white", margin: "0" }}>MIPOOL08</h1>
            </div>
            <div className="card-holder">
                <div className="card">
                    <form onSubmit={handleSubmit} className="booking-form">
                        <div className="scheduler">
                            <Scheduler
                                events={events}
                                height={100}
                                view="week"
                                week={week}
                                hourFormat="12" // Format 12 jam (AM/PM)
                                onEventClick={() => {
                                    console.log("onEventClick");
                                }}
                                onConfirm={handleConfirm}
                                onDelete={handleDelete}
                            />
                        </div>
                        <div className="new-event-price">
                            <p>Total Harga: Rp {newEventPrice.toLocaleString()}</p>
                        </div>
                        <div className="btn-container">
                            <button type="submit" className="btn-submit">Pesan</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Schedule;
