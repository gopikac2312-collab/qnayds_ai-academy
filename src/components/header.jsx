import { useState } from "react";
import "../styles/header.css";

const navLinks = [
  { label: "Home", id: null, href: "https://qnayds.in" },
  { label: "How it works", id: "whoisthisfor" },
  { label: "Courses", id: "courses" },
];
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className="header-inner">

        {/* Logo */}
        <a href="/" className="header-logo">
          <span className="header-logo-dot" />
          Qnayds AI Academy
        </a>

        {/* Desktop Nav */}
        <nav className={`header-nav ${menuOpen ? "header-nav--open" : ""}`}>
          {navLinks.map(({ label, id ,href}) => (
            <a
              key={label}
              href={href||`#${id}`}

              className="header-nav-link"
              onClick={href ? undefined : scrollTo(id)}
              target={href ? "_self" : undefined}
            >
              {label}
            </a>
          ))}
          {/* Mobile-only enroll */}
          <a
            href="#enroll"
            className="header-enroll-btn header-enroll-mobile"
            onClick={scrollTo("enroll")}
          >
            Enroll now →
          </a>
        </nav>

        {/* Right side */}
        <div className="header-actions">
          <a
            href="#enroll"
            className="header-enroll-btn header-enroll-desktop"
            onClick={scrollTo("enroll")}
          >
            Enroll now →
          </a>

          {/* Hamburger */}
          <button
            className={`header-hamburger ${menuOpen ? "header-hamburger--open" : ""}`}
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