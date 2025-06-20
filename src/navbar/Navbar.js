
import { useState } from "react";
import {
  Link
} from "react-router-dom";
import '../App.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaBars, FaTimes } from "react-icons/fa";


function Navbar (){
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
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
    </div>
  )}

export default Navbar;