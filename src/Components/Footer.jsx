import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="jh-footer">

      <div className="jh-container">

        <div className="jh-footer-top">

          <div className="jh-footer-brand">
            <Link to="/" className="jh-brand footer-brand">
              <span className="jh-brand-mark">J</span>

              <span className="jh-brand-text">
                <strong>Jattari</strong>
                <small>Homes</small>
              </span>
            </Link>

            <p>
              Thoughtful planned spaces designed for comfortable living,
              meaningful connections and a better tomorrow.
            </p>

            <div className="jh-socials">
              <a href="#instagram">Instagram</a>
              <a href="#facebook">Facebook</a>
              <a href="#linkedin">LinkedIn</a>
            </div>
          </div>

          <div className="jh-footer-column">
            <h4>Explore</h4>

            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/why-jattari">Why Jattari</Link>
          </div>

          <div className="jh-footer-column">
            <h4>Discover</h4>

            <Link to="/amenities">Amenities</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="jh-footer-column">
            <h4>Get In Touch</h4>

            <a href="tel:+919999999999">
              +91 99999 99999
            </a>

            <a href="mailto:hello@jattarihomes.com">
              hello@jattarihomes.com
            </a>

            <span>
              Jattari, Uttar Pradesh, India
            </span>
          </div>

        </div>

        <div className="jh-footer-bottom">
          <span>© 2026 Jattari Homes. All rights reserved.</span>

          <div>
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>

      </div>

    </footer>
  );
}

export default Footer;