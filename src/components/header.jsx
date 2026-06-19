import { useState } from "react";
import "../styles/header.css";

const navLinks = [
  { label: "Home", href: "https://qnayds.in" },
  { label: "How it works", id: "whoisthisfor" },
  { label: "Courses", id: "courses" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo */}
        <a href="/" className="header-logo">
          <img
            src="/logo.png"
            alt="Qnayds AI Academy"
            className="header-logo-img"
          />
          <span className="header-logo-text">Qnayds AI Academy</span>
        </a>

        {/* Navigation */}
        <nav className={`header-nav ${menuOpen ? "header-nav--open" : ""}`}>
          {navLinks.map(({ label, id, href }) => (
            <a
              key={label}
              href={href || `#${id}`}
              className="header-nav-link"
              onClick={href ? undefined : scrollTo(id)}
            >
              {label}
            </a>
          ))}

          {/* Mobile Enroll Button */}
          <a
            href="#enroll"
            className="header-enroll-btn header-enroll-mobile"
            onClick={scrollTo("enroll")}
          >
            Enroll now →
          </a>
        </nav>

        {/* Right Side Actions */}
        <div className="header-actions">
          <a
            href="#enroll"
            className="header-enroll-btn header-enroll-desktop"
            onClick={scrollTo("enroll")}
          >
            Enroll now →
          </a>

          {/* Hamburger Menu */}
          <button
            className={`header-hamburger ${
              menuOpen ? "header-hamburger--open" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="header-bar" />
            <span className="header-bar" />
            <span className="header-bar" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;