// src/App.jsx

import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LoginPopup from "./Components/LoginPopup";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import WhyJattari from "./Pages/WhyJattari";
import Amenities from "./Pages/Amenities";
import FAQ from "./Pages/FAQ";
import Blog from "./Pages/Blog";
import ContactUs from "./Pages/ContactUs";
import ThankYou from "./Pages/ThankYou";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function App() {
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoginOpen(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">

      {/* Scroll page to top whenever route changes */}
      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/about-us"
            element={<AboutUs />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/why-jattari"
            element={<WhyJattari />}
          />

          <Route
            path="/amenities"
            element={<Amenities />}
          />

          <Route
            path="/faq"
            element={<FAQ />}
          />

          <Route
            path="/blog"
            element={<Blog />}
          />

          <Route
            path="/contact"
            element={<ContactUs />}
          />

          <Route
            path="/contact-us"
            element={<ContactUs />}
          />

          <Route
            path="/thank-you"
            element={<ThankYou />}
          />
        </Routes>
      </main>

      <Footer />

      <LoginPopup
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
      />

    </div>
  );
}

export default App;