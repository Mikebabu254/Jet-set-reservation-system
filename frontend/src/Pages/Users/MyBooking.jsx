import React, { useState } from "react";

function MyBookings() {
    const [bookings, setBookings] = useState([
        {
            flightName: "Flight A123",
            departureDate: "2024-12-30",
            departureTime: "10:00 AM",
            arrivalTime: "12:00 PM",
            departureLocation: "New York (JFK)",
            arrivalLocation: "Los Angeles (LAX)",
            seats: ["1A", "1B"],
            totalCost: 200,
        },
        {
            flightName: "Flight B456",
            departureDate: "2024-12-31",
            departureTime: "2:00 PM",
            arrivalTime: "5:00 PM",
            departureLocation: "Chicago (ORD)",
            arrivalLocation: "Miami (MIA)",
            seats: ["2C", "2D"],
            totalCost: 150,
        },
    ]);

    return (
        <div className="my-bookings-container">
            <h1>My Bookings</h1>
            {bookings && bookings.length > 0 ? (
                <div className="bookings-list">
                    {bookings.map((booking, index) => (
                        <div key={index} className="receipt-card">
                            <div className="header">
                                <img
                                    src="https://via.placeholder.com/150x50?text=Airline+Logo"
                                    alt="Airline Logo"
                                    className="logo"
                                />
                                <h2>{booking.flightName}</h2>
                            </div>
                            <div className="flight-details">
                                <div>
                                    <strong>From:</strong> {booking.departureLocation}
                                    <p>{booking.departureTime}</p>
                                </div>
                                <div className="route">
                                    <hr />
                                    ✈
                                    <hr />
                                </div>
                                <div>
                                    <strong>To:</strong> {booking.arrivalLocation}
                                    <p>{booking.arrivalTime}</p>
                                </div>
                            </div>
                            <div className="booking-details">
                                <p><strong>Departure Date:</strong> {booking.departureDate}</p>
                                <p><strong>Seats:</strong> {booking.seats.join(", ")}</p>
                                <p><strong>Total Cost:</strong> ${booking.totalCost}</p>
                            </div>
                            <div className="footer">
                                <p>Thank you for flying with us!</p>
                                <p>Booking ID: {index + 1}</p>
                            </div>
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
