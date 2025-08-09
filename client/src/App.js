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
import BlogPage from "./pages/BlogPage";
import LoginPage from "./pages/LoginPage";

// Optional: Admin ProtectedRoute
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  // Dummy login state (replace with real authentication later)
  const isAuthenticated = false;

  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/leaders" element={<LeadersPage />} />
          <Route path="/register" element={<RegisterRepPage />} />
          <Route path="/announcements" element={<AnnouncementsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Example of protecting an admin route */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <h1>Admin Dashboard</h1>
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
