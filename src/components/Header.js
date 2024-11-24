import { Link } from "react-router-dom";
import logo from "../assets/header.png";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="cafe logo" />
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/booking">Reservation</Link>
            <Link to="/special">Special</Link>
            <Link to="/about">About</Link>          
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
