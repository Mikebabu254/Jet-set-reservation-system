import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">about us</Link></li>
                <li><Link to="/login">login</Link></li>
                <li><Link to="/services">services</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;