import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function SeatSelection() {
    const location = useLocation();
    const { flight } = location.state;
    const [selectedSeats, setSelectedSeats] = useState([]);
    const seatMap = [
        ["1A", "1B","1C", "1D"],
        ["2A", "2B", "2C", "2D"],
        ["3A", "3B", "3C", "3D"],
        ["4A", "4B", "4C", "4D"],
        ["5A", "5B", "5C", "5D"],
        ["6A", "6B", "6C", "6D"],
    ];

    const seatPrice = 50;

    const toggleSeatSelection = (seat) => {
        setSelectedSeats((prevSeats) =>
            prevSeats.includes(seat)
                ? prevSeats.filter((s) => s !== seat)
                : [...prevSeats, seat]
        );
    };

    const totalCost = selectedSeats.length * seatPrice;

    return (
        <div className="seat-selection-container">
            <h1>Seat Selection for {flight.name}</h1>
            <div className="seat-map">
                {seatMap.map((row, rowIndex) => (
                    <div key={rowIndex} className="seat-row">
                        {row.map((seat) => (
                            <div
                                key={seat}
                                className={`seat ${
                                    selectedSeats.includes(seat) ? "selected" : ""
                                }`}
                                onClick={() => toggleSeatSelection(seat)}
                            >
                                {seat}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="seat-summary">
                <h2>Selected Seats: {selectedSeats.join(", ") || "None"}</h2>
                <h2>Total Cost: ${totalCost}</h2>
                <button
                    onClick={() => alert("Booking Confirmed!")}
                    className="confirm-button"
                >
                    Confirm Booking
                </button>
            </div>
        </div>
    );
}

export default SeatSelection;
