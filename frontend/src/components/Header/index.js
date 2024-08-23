import {Link} from "react-router-dom"
import "./index.css"

const Header = ( ) =>(
    <div>
        <nav className="nava-bar">
            <h1 className="nav-heading">Book Session</h1>
            <ul className="pages">
               <Link to = "/" className="link">
               <li className="nav-item">BookingForm</li>
               </Link>
                <Link to = "/bookings" className="link">
                <li className="nav-item">Bookings</li>
                </Link>
            </ul>
        </nav>
    </div>
)

export default Header