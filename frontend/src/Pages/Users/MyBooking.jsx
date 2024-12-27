import React, { useState } from 'react';

function MyBookings() {
    const [bookings, setBookings] = useState([
        {
            flightName: "Flight A123",
            departureDate: "2024-12-30",
            seats: ["1A", "1B"],
            totalCost: 100,
        },
        {
            flightName: "Flight B456",
            departureDate: "2024-12-31",
            seats: ["2C", "2D"],
            totalCost: 100,
        },
    ]);

    return (
        <div className="my-bookings-container">
            <h1>My Bookings</h1>
            {bookings && bookings.length > 0 ? (
                <div className="bookings-list">
                    {bookings.map((booking, index) => (
                        <div key={index} className="booking-card">
                            <h2>{booking.flightName}</h2>
                            <p><strong>Departure Date:</strong> {booking.departureDate}</p>
                            <p><strong>Seats:</strong> {booking.seats.join(", ")}</p>
                            <p><strong>Total Cost:</strong> ${booking.totalCost}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No bookings found. Book a flight to see your bookings here!</p>
            )}
        </div>
    );
}

export default MyBookings;
