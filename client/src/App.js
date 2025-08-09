// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/theme.css";

// Shared Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LeadersPage from "./pages/LeadersPage";
import RegisterRepPage from "./pages/RegisterRepPage";
import AnnouncementsPage from "./pages/AnnouncementsPage";
import EventsPage from "./pages/EventsPage";
import ResourcesPage from "./pages/ResourcesPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage"; // optional
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/leaders" element={<LeadersPage />} />
          <Route path="/register" element={<RegisterRepPage />} />
          <Route path="/announcements" element={<AnnouncementsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} /> {/* optional */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
