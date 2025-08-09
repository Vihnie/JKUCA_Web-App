import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="JKUCA Logo" />
        <span>JKUCA</span>
      </div>
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/leaders">Leaders</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/announcements">Announcements</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/resources">Resources</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
}
