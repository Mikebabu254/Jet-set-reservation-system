import React, { useState } from "react";

function ManageFlights() {
    const [flights, setFlights] = useState([
        { id: 1, name: "Flight A123", origin: "JFK", destination: "LAX", date: "2024-12-30" },
        { id: 2, name: "Flight B456", origin: "LAX", destination: "ORD", date: "2024-12-31" },
    ]);

    const handleDelete = (id) => {
        const updatedFlights = flights.filter((flight) => flight.id !== id);
        setFlights(updatedFlights);
    };

    return (
        <div className="manage-flights">
            <h1>Manage Flights</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map((flight) => (
                        <tr key={flight.id}>
                            <td>{flight.id}</td>
                            <td>{flight.name}</td>
                            <td>{flight.origin}</td>
                            <td>{flight.destination}</td>
                            <td>{flight.date}</td>
                            <td>
                                <button onClick={() => handleDelete(flight.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ManageFlights;
