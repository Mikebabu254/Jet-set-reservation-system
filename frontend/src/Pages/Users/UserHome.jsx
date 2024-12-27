import Footer from "../../components/Footer";
import UserNav from "./UserNav";

function UserHome(){
    return(
        <div>
            <UserNav></UserNav>
            <div className="home-container">
                <header className="home-header">
                    <h1>Welcome, John Doe</h1>
                    <p>Your gateway to seamless travel reservations starts here.</p>
                </header>
                <div className="home-content">
                    <section className="quick-actions"> 
                        <h2>Quick Action</h2>
                        <div className="actions">
                            <div className="action-card">
                                <h3>Book a flight</h3>
                                <p>find the best and book your flight now</p>
                                <a href="/book" className="action-button">Book now</a>
                            </div>
                            <div className="action-card">
                                <h3>My booking</h3>
                                <a href="/bookings" className="action-button">View booking</a>
                            </div>
                            <div className="action-card">
                                <h3>Profile</h3>
                                <p>update you personal details and preferences</p>
                                <a href="/profile" className="action-button">View Profile</a>
                            </div>
                        </div>
                        
                    </section>
                    <section className="latest-updates">
                    <h2>Latest Updates</h2>
                    <ul>
                        <li>🎉 Get up to 20% off on flights to Europe!</li>
                        <li>✈️ New destinations added: Explore Asia and Africa.</li>
                        <li>💺 Book now and enjoy free seat selection.</li>
                    </ul>
                </section>
                </div>
            </div>
            <Footer></Footer>
        </div>
        
        
    )
}

export default UserHome;