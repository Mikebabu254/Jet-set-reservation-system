import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookFlight() {
    const [selectedFlight, setSelectedFlight] = useState(null);
    const flights = [
        { id: 1, name: "Flight A", from: "New York", to: "London", price: 500 },
        { id: 2, name: "Flight B", from: "Paris", to: "Tokyo", price: 700 },
        { id: 3, name: "Flight C", from: "Berlin", to: "Dubai", price: 450 },
    ];
    const navigate = useNavigate();

    const handleFlightSelect = (flight) => {
        setSelectedFlight(flight);
    };

    const proceedToSeatSelection = () => {
        if (selectedFlight) {
            navigate("/seat-selection", { state: { flight: selectedFlight } });
        } else {
            alert("Please select a flight.");
        }
    };

    return (
        <div className="book-flight-container">
            <h1>Book a Flight</h1>
            <div className="flight-list">
                {flights.map((flight) => (
                    <div
                        key={flight.id}
                        className={`flight-card ${
                            selectedFlight?.id === flight.id ? "selected" : ""
                        }`}
                        onClick={() => handleFlightSelect(flight)}
                    >
                        <h2>{flight.name}</h2>
                        <p>{flight.from} ➔ {flight.to}</p>
                        <p>Price: ${flight.price}</p>
                    </div>
                ))}
            </div>
            <button onClick={proceedToSeatSelection} className="proceed-button">
                Proceed to Seat Selection
            </button>
        </div>
    );
}

export default BookFlight;
