import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar({ onHero, onAbout, onServices, onContact }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleToggleMenu = () => setIsOpen((open) => !open);
  const handleLinkClick = () => setIsOpen(false);

  const isHome = location.pathname === "/";

  // Map section names to the scroll functions you already have
  const scrollHandlers = {
    hero: onHero,
    about: onAbout,
    services: onServices,
    contact: onContact,
  };

  const goToSection = (section) => {
    handleLinkClick();

    if (isHome) {
      // already home → just scroll
      scrollHandlers[section]?.();
    } else {
      // not home → go home and request scroll
      navigate("/", { state: { scrollTo: section } });
    }
  };

  return (
    <header className="navbar">
      <Link to="/" className="nav-logo" onClick={handleLinkClick}>
        🎨 Jack Tucker
      </Link>

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

      <nav>
        <ul
          id="primary-navigation"
          className={`nav-links ${isOpen ? "nav-links--open" : ""}`}
        >
          <li>
            {isHome ? (
              <button
                type="button"
                onClick={() => goToSection("hero")}
                className="nav-button"
              >
                Home
              </button>
            ) : (
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            )}
          </li>

          <li>
            <Link to="/Projects" onClick={handleLinkClick}>
              Projects
            </Link>
          </li>

          <li>
            <button
              type="button"
              onClick={() => goToSection("services")}
              className="nav-button"
            >
              Services
            </button>
          </li>

          <li>
            <button
              type="button"
              onClick={() => goToSection("about")}
              className="nav-button"
            >
              About
            </button>
          </li>

          <li>
            <button
              type="button"
              onClick={() => goToSection("contact")}
              className="nav-button"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
