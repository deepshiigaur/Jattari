import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Why Jattari", path: "/why-jattari" },
    { name: "FAQ", path: "/faq" },
    { name: "Blog", path: "/blog" },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <header className="jh-navbar">
      <div className="jh-navbar-inner">

        <Link to="/" className="jh-brand" onClick={closeMenu}>
          <span className="jh-brand-mark">J</span>

          <span className="jh-brand-text">
            <strong>Jattari</strong>
            <small>Homes</small>
          </span>
        </Link>

        <nav className={`jh-nav ${open ? "active" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "jh-nav-link active" : "jh-nav-link"
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="jh-nav-button"
            onClick={closeMenu}
          >
            Contact Us
            <span>↗</span>
          </Link>
        </nav>

        <button
          className="jh-menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "×" : "☰"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;