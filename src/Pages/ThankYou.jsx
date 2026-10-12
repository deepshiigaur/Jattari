// src/Pages/ThankYou.jsx

import { Link } from "react-router-dom";
import Reveal from "../Components/Reveal";

function ThankYou() {
  return (
    <div>

      <section className="jh-page-hero">

        <img
          src="/images/image-1.webp"
          alt="Jattari Homes"
        />

        <div className="jh-page-hero-overlay" />

        <div className="jh-container">

          <Reveal>
            <div className="jh-page-hero-content">

              <span className="jh-eyebrow light">
                JATTARI HOMES
              </span>

              <h1>
                Thank you for
                <br />
                <em>reaching out.</em>
              </h1>

              <p>
                We have received your request and
                appreciate you connecting with us.
              </p>

            </div>
          </Reveal>

        </div>

      </section>

      <section className="jh-section">

        <div className="jh-container">

          <Reveal>
            <div
              style={{
                maxWidth: "650px",
                margin: "0 auto",
                textAlign: "center",
              }}
            >

              <span className="jh-eyebrow">
                REQUEST RECEIVED
              </span>

              <h2 className="jh-title small">
                Your journey
                <em> starts here.</em>
              </h2>

              <p className="jh-description centered">
                Thank you for getting in touch with
                Jattari Homes. Our team will review your
                details and shortly get back to you .
              </p>

              <Link
                to="/"
                className="jh-button"
                style={{
                  display: "inline-flex",
                  marginTop: "25px",
                }}
              >
                Back To Home
                <span>↗</span>
              </Link>

            </div>
          </Reveal>

        </div>

      </section>

    </div>
  );
}

export default ThankYou;