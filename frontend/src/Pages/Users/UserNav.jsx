import { Link } from "react-router-dom";

function UserNav (){
    return(
        <div className="nav">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/history">history</Link></li>
                <li><Link to="/profile">profile</Link></li>
            </ul>
        </div>
    )
}

export default UserNav;
