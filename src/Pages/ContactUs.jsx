// src/Pages/ContactUs.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Reveal from "../Components/Reveal";

function ContactUs() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    const nameRegex = /^[A-Za-z\s]{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!nameRegex.test(form.name.trim())) {
      newErrors.name =
        "Name must contain only letters and spaces.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (form.email.length > 100) {
      newErrors.email =
        "Email cannot exceed 100 characters.";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(form.phone)) {
      newErrors.phone =
        "Enter a valid 10-digit Indian mobile number.";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required.";
    } else if (form.subject.length > 100) {
      newErrors.subject =
        "Subject cannot exceed 100 characters.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (form.message.trim().length < 10) {
      newErrors.message =
        "Message must contain at least 10 characters.";
    } else if (form.message.length > 500) {
      newErrors.message =
        "Message cannot exceed 500 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    navigate("/thank-you");
  };

  return (
    <div>

      {/* HERO */}

      <section className="jh-page-hero">

        <img
          src="/images/image-4.webp"
          alt="Contact Jattari Homes"
        />

        <div className="jh-page-hero-overlay" />

        <div className="jh-container">
          <Reveal>
            <div className="jh-page-hero-content">

              <span className="jh-eyebrow light">
                CONTACT US
              </span>

              <h1>
                Let's talk about
                <br />
                <em>your property goals.</em>
              </h1>

              <p>
                Have a question or looking for the right
                property? We are here to help.
              </p>

            </div>
          </Reveal>
        </div>

      </section>

      {/* CONTACT */}

      <section className="jh-section">

        <div className="jh-container">

          <div className="jh-contact-grid">

            <Reveal>
              <div className="jh-contact-info">

                <span className="jh-eyebrow">
                  GET IN TOUCH
                </span>

                <h2 className="jh-title small">
                  Start a
                  <em> conversation.</em>
                </h2>

                <p className="jh-description">
                  Tell us what you are looking for and
                  our team will help you take the next
                  step with confidence.
                </p>

                <div className="jh-contact-details">

                  <div>
                    <span>EMAIL</span>
                    <p>info@jattar homes.com</p>
                  </div>

                  <div>
                    <span>PHONE</span>
                    <p>+91 98765 43210</p>
                  </div>

                  <div>
                    <span>LOCATION</span>
                    <p>
                      Jattari, Uttar Pradesh, India
                    </p>
                  </div>

                </div>

              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <form
                className="jh-contact-form"
                onSubmit={handleSubmit}
                noValidate
              >

                {/* NAME */}

                <div className="jh-form-group">

                  <label htmlFor="name">
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    maxLength={50}
                    placeholder="Enter your full name"
                    onChange={handleChange}
                  />

                  {errors.name && (
                    <span className="jh-form-error">
                      {errors.name}
                    </span>
                  )}

                </div>

                {/* EMAIL */}

                <div className="jh-form-group">

                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    maxLength={100}
                    placeholder="Enter your email address"
                    onChange={handleChange}
                  />

                  {errors.email && (
                    <span className="jh-form-error">
                      {errors.email}
                    </span>
                  )}

                </div>

                {/* PHONE */}

                <div className="jh-form-group">

                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    maxLength={10}
                    placeholder="Enter 10-digit mobile number"
                    onChange={(e) => {
                      const value =
                        e.target.value.replace(/\D/g, "");

                      if (value.length <= 10) {
                        setForm((prev) => ({
                          ...prev,
                          phone: value,
                        }));

                        setErrors((prev) => ({
                          ...prev,
                          phone: "",
                        }));
                      }
                    }}
                  />

                  {errors.phone && (
                    <span className="jh-form-error">
                      {errors.phone}
                    </span>
                  )}

                </div>

                {/* SUBJECT */}

                <div className="jh-form-group">

                  <label htmlFor="subject">
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    maxLength={100}
                    placeholder="What can we help you with?"
                    onChange={handleChange}
                  />

                  {errors.subject && (
                    <span className="jh-form-error">
                      {errors.subject}
                    </span>
                  )}

                </div>

                {/* MESSAGE */}

                <div className="jh-form-group">

                  <label htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    maxLength={500}
                    value={form.message}
                    placeholder="Tell us about your requirement..."
                    onChange={handleChange}
                  />

                  <div className="jh-message-count">
                    {form.message.length}/500
                  </div>

                  {errors.message && (
                    <span className="jh-form-error">
                      {errors.message}
                    </span>
                  )}

                </div>

                <button
                  type="submit"
                  className="jh-button"
                >
                  Send Message
                  <span>↗</span>
                </button>

              </form>
            </Reveal>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ContactUs;