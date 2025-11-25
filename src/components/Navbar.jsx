import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => setIsOpen((open) => !open);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="navbar">
      {/* Left: logo / name */}
      <Link 
        to="/my-portfolio" 
        className="nav-logo" 
        onClick={handleLinkClick}
      >
        🎨 Jack Tucker
      </Link>

      {/* Right: hamburger button */}
      <button
        type="button"
        className={`nav-toggle ${isOpen ? "nav-toggle--open" : ""}`}
        onClick={handleToggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Right: links */}
      <nav>
        <ul
          id="primary-navigation"
          className={`nav-links ${isOpen ? "nav-links--open" : ""}`}
        >
          <li>
            <Link to="/my-portfolio/paintings" onClick={handleLinkClick}>
              Paintings
            </Link>
          </li>
          <li>
            <Link to="/my-portfolio/books" onClick={handleLinkClick}>
              Books
            </Link>
          </li>
          <li>
            <Link to="/my-portfolio/bio" onClick={handleLinkClick}>
              Bio
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}