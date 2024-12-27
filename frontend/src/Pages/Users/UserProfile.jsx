import React from "react";

function UserProfile() {
    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1 123-456-7890",
        address: "123 Main Street, New York, NY, USA",
        loyaltyPoints: 1200,
        membership: "Gold",
    };

    return (
        <div className="user-profile-container">
            <h1>User Profile</h1>
            <div className="profile-card">
                <div className="profile-header">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="User Avatar"
                        className="profile-avatar"
                    />
                    <h2>{user.name}</h2>
                    <p>{user.membership} Member</p>
                </div>
                <div className="profile-details">
                    <p>
                        <strong>Email:</strong> {user.email}
                    </p>
                    <p>
                        <strong>Phone:</strong> {user.phone}
                    </p>
                    <p>
                        <strong>Address:</strong> {user.address}
                    </p>
                    <p>
                        <strong>Loyalty Points:</strong> {user.loyaltyPoints}
                    </p>
                </div>
                <button className="edit-profile-btn">Edit Profile</button>
            </div>
        </div>
    );
}

export default UserProfile;
