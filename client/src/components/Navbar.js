import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">JKUCA</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/leaders">Leaders</Link>
        <Link to="/register">Register</Link>
        <Link to="/announcements">Announcements</Link>
        <Link to="/events">Events</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
