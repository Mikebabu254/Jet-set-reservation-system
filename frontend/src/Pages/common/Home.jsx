import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

function Home(){
    return(
        <div>
            <NavBar></NavBar>
            <section className="hero">
                <h1>Welcome to Jetset ariline reservation</h1>
                <p>Your gateway to seamless travel reservation</p>
            </section>
            <section className="features">
                <h2>Why choose us?</h2>
                <div className="feature-card">
                    <div className="card">
                        <h3>Easy Booking</h3>
                        <p>Booking flights in just a few clicks with our user-friendly platform</p>
                    </div>
                    <div className="card">
                        <h3>Affordable prices</h3>
                        <p>get the best deal in you favorite destinations</p>
                    </div>
                    <div className="card">
                        <h3>24/7 Support</h3>
                        <p>Our team is always here to help you with youe travel needs</p>
                    </div>
                </div>
            </section>
            <section className="testimonials">
                <h2>What Our Customers Say</h2>
                <p>"Booking fights has never been easier. Highly recommended" - John Doe</p>
                <p>"Great prices and excellent customer service. I am impressed" - Jane Doe</p>
            </section>
            <Footer></Footer>
        
        </div>
    )
}

export default Home;