import { Link } from "react-router-dom";
import Reveal from "../Components/Reveal";

const amenities = [
  {
    number: "01",
    title: "Green Spaces",
    text: "Open surroundings and greenery that bring a calmer feel to everyday life.",
  },
  {
    number: "02",
    title: "Security",
    text: "Thoughtful planning with safety and peace of mind in focus.",
  },
  {
    number: "03",
    title: "Lifestyle Spaces",
    text: "Spaces designed to support everyday comfort and community.",
  },
  {
    number: "04",
    title: "Water Facilities",
    text: "Important infrastructure planned around practical everyday needs.",
  },
];

function Amenities() {
  return (
    <div>

      <section className="jh-page-hero">

        <img
          src="/images/gallery-4.webp"
          alt="Jattari Amenities"
        />

        <div className="jh-page-hero-overlay" />

        <div className="jh-container">

          <Reveal>

            <div className="jh-page-hero-content">

              <span className="jh-eyebrow light">
                AMENITIES
              </span>

              <h1>
                Details that make
                <br />
                <em>everyday life better.</em>
              </h1>

            </div>

          </Reveal>

        </div>

      </section>

      <section className="jh-section">

        <div className="jh-container">

          <Reveal>

            <div className="jh-centered-heading">

              <span className="jh-eyebrow">
                BUILT AROUND LIFE
              </span>

              <h2 className="jh-title small">
                More comfort.
                <em> More possibilities.</em>
              </h2>

              <p className="jh-description centered">
                Explore thoughtful features created around everyday living.
              </p>

            </div>

          </Reveal>

          <div className="jh-amenities-grid">

            {amenities.map((amenity, index) => (
              <Reveal
                key={amenity.number}
                delay={index * 0.1}
              >

                <article className="jh-amenity-card">

                  <span className="amenity-number">
                    {amenity.number}
                  </span>

                  <div className="amenity-icon">
                    +
                  </div>

                  <h3>{amenity.title}</h3>

                  <p>{amenity.text}</p>

                </article>

              </Reveal>
            ))}

          </div>

        </div>

      </section>

      <section className="jh-section jh-section-soft">

        <div className="jh-container jh-two-column">

          <Reveal>

            <div className="jh-image-frame large">

              <img
                src="/images/gallery-5.webp"
                alt="Jattari"
              />

            </div>

          </Reveal>

          <Reveal direction="left">

            <div>

              <span className="jh-eyebrow">
                EXPERIENCE
              </span>

              <h2 className="jh-title small">
                Designed for
                <em> everyday moments.</em>
              </h2>

              <p className="jh-description">
                From quiet mornings to family gatherings, thoughtful
                surroundings can make a difference in the way a place feels.
              </p>

              <Link to="/contact" className="jh-button">
                Discover More
                <span>↗</span>
              </Link>

            </div>

          </Reveal>

        </div>

      </section>

    </div>
  );
}

export default Amenities;