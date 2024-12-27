import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <div className="dashboard-cards">
                <Link to="/admin/flights" className="dashboard-card">
                    <h2>Manage Flights</h2>
                </Link>
                <Link to="/admin/users" className="dashboard-card">
                    <h2>Manage Users</h2>
                </Link>
                <Link to="/admin/bookings" className="dashboard-card">
                    <h2>Manage Bookings</h2>
                </Link>
            </div>
        </div>
    );
}

export default Dashboard;
