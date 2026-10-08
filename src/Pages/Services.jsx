import { Link } from "react-router-dom";
import Reveal from "../Components/Reveal";

const services = [
  {
    number: "01",
    title: "Property Consultation",
    image: "/images/gallery-3.webp",
    text: "Start with a conversation. Tell us what you are looking for and we help you understand the available possibilities.",
    points: [
      "Requirement discussion",
      "Property guidance",
      "Option comparison",
    ],
  },
  {
    number: "02",
    title: "Site Visits",
    image: "/images/image-8.webp",
    text: "A property is best understood in person. Experience the surroundings, location and overall environment through guided visits.",
    points: [
      "Guided visits",
      "Location walkthrough",
      "Property experience",
    ],
  },
  {
    number: "03",
    title: "Property Support",
    image: "/images/image-4.webp",
    text: "Stay supported throughout your property journey with a team focused on making the experience clearer and smoother.",
    points: [
      "Ongoing assistance",
      "Property information",
      "Decision support",
    ],
  },
];

function Services() {
  return (
    <div>

      <section className="jh-page-hero">

        <img
          src="/images/gallery-6.webp"
          alt="Jattari Services"
        />

        <div className="jh-page-hero-overlay" />

        <div className="jh-container">
          <Reveal>
            <div className="jh-page-hero-content">

              <span className="jh-eyebrow light">
                OUR SERVICES
              </span>

              <h1>
                Property support
                <br />
                <em>with a human touch.</em>
              </h1>

              <p>
                From first conversation to your next step.
              </p>

            </div>
          </Reveal>
        </div>

      </section>

      <section className="jh-section">

        <div className="jh-container">

          <Reveal>
            <div className="jh-centered-heading">

              <span className="jh-eyebrow">
                WHAT WE DO
              </span>

              <h2 className="jh-title small">
                Everything starts with
                <em> understanding you.</em>
              </h2>

              <p className="jh-description centered">
                Our services are designed around a simple goal:
                make your property journey easier to understand.
              </p>

            </div>
          </Reveal>

          <div className="jh-service-list">

            {services.map((service, index) => (
              <Reveal
                key={service.number}
                delay={index * 0.1}
              >

                <article className="jh-large-service">

                  <div className="jh-large-service-image">

                    <img
                      src={service.image}
                      alt={service.title}
                    />

                    <span>
                      {service.number}
                    </span>

                  </div>

                  <div className="jh-large-service-content">

                    <span className="jh-eyebrow">
                      SERVICE {service.number}
                    </span>

                    <h2>{service.title}</h2>

                    <p>{service.text}</p>

                    <ul>
                      {service.points.map((point) => (
                        <li key={point}>
                          <span>✓</span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="jh-text-button"
                    >
                      Enquire Now →
                    </Link>

                  </div>

                </article>

              </Reveal>
            ))}

          </div>

        </div>

      </section>

      <section className="jh-section jh-section-soft">

        <div className="jh-container">

          <Reveal>

            <div className="jh-process-heading">

              <span className="jh-eyebrow">
                OUR PROCESS
              </span>

              <h2 className="jh-title small">
                Simple steps.
                <em> Clear decisions.</em>
              </h2>

            </div>

          </Reveal>

          <div className="jh-process-grid">

            <div>
              <span>01</span>
              <h3>Connect</h3>
              <p>
                Tell us what you are looking for.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Explore</h3>
              <p>
                Understand the property and location.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Visit</h3>
              <p>
                Experience the space personally.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Decide</h3>
              <p>
                Move forward with clarity.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="jh-cta">

        <div className="jh-container jh-cta-inner">

          <span className="jh-eyebrow light">
            NEED HELP?
          </span>

          <h2>
            Let's talk about
            <br />
            your property goals.
          </h2>

          <Link to="/contact" className="jh-button light-button">
            Start A Conversation
            <span>↗</span>
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Services;