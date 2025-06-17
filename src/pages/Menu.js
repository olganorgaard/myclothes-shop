
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import '../App.css';
import Home from "./Home";
import About from "./About";
import Catalog from "./Catalog";
import { FaFacebookF, FaInstagram, FaTwitter, FaBars, FaTimes } from "react-icons/fa";


function Menu (){
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      <Router>
        <header className="header">
          <div className="logo">
            <Link to="/" onClick={closeMenu}>🛍️ MyClothing</Link>
          </div>

          <button className="burger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
            <Link to="/" className="link" onClick={closeMenu}>Home</Link>
            <Link to="/about" className="link" onClick={closeMenu}>About</Link>
            <Link to="/catalog" className="link" onClick={closeMenu}>Catalog</Link>
          </nav>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </Router>
    </div>
  )}

export default Menu;