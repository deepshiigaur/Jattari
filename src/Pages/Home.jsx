import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "../Components/Reveal";

const heroSlides = [
  {
    image: "/images/home-1.webp",
    eyebrow: "WELCOME TO JATTARI",
    title: "A better place to build your future.",
    text: "Discover thoughtfully planned spaces where modern living meets a calm and connected lifestyle.",
  },
  {
    image: "/images/home-2.webp",
    eyebrow: "FIND YOUR SPACE",
    title: "Spaces designed around you.",
    text: "Explore opportunities created for families, investors and people looking for a place they can truly call their own.",
  },
  {
    image: "/images/home-3.webp",
    eyebrow: "YOUR NEXT CHAPTER",
    title: "Live with more room to grow.",
    text: "A premium property experience with thoughtful planning, useful amenities and a people-first approach.",
  },
];

const properties = [
  {
    image: "/images/home-1.webp",
    category: "Residential",
    title: "Premium Residential Spaces",
    text: "Beautifully planned spaces for comfortable everyday living.",
  },
  {
    image: "/images/home-2.webp",
    category: "Investment",
    title: "Smart Investment Opportunities",
    text: "Explore property opportunities with a long-term perspective.",
  },
  {
    image: "/images/home-3.webp",
    category: "Lifestyle",
    title: "A Connected Lifestyle",
    text: "Thoughtful surroundings created for modern families.",
  },
];

const services = [
  {
    number: "01",
    title: "Property Consultation",
    text: "Understand your requirements and discover property options that match your goals.",
  },
  {
    number: "02",
    title: "Site Visits",
    text: "Experience the location personally with guided site visits and property walkthroughs.",
  },
  {
    number: "03",
    title: "Property Support",
    text: "Get assistance throughout your property journey, from enquiry to decision-making.",
  },
];

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[current];

  return (
    <div>

      {/* HERO */}
      <section className="jh-home-hero">

        <AnimatePresence mode="wait">
          <motion.img
            key={slide.image}
            src={slide.image}
            alt="Jattari Homes"
            className="jh-hero-image"
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        <div className="jh-hero-overlay" />

        <div className="jh-container jh-hero-content">

          <motion.div
            key={current}
            className="jh-hero-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="jh-eyebrow light">
              {slide.eyebrow}
            </span>

            <h1>{slide.title}</h1>

            <p>{slide.text}</p>

            <div className="jh-hero-actions">
              <Link to="/contact" className="jh-button light-button">
                Explore Jattari
                <span>↗</span>
              </Link>

              <Link to="/about-us" className="jh-text-button light">
                Discover More
                <span>→</span>
              </Link>
            </div>
          </motion.div>

        </div>

        <div className="jh-slide-controls">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={index === current ? "active" : ""}
            >
              0{index + 1}
            </button>
          ))}
        </div>

      </section>

      {/* STATS */}
      <section className="jh-stats">
        <div className="jh-container jh-stats-grid">

          <div>
            <strong>01</strong>
            <span>People First</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Thoughtful Planning</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Modern Lifestyle</span>
          </div>

          <div>
            <strong>04</strong>
            <span>Property Support</span>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="jh-section">
        <div className="jh-container jh-intro-grid">

          <Reveal>
            <div>
              <span className="jh-eyebrow">ABOUT JATTARI</span>

              <h2 className="jh-title">
                More than a property.
                <br />
                <em>A place to belong.</em>
              </h2>

              <p className="jh-description">
                Jattari Homes brings together thoughtfully planned spaces,
                modern lifestyle considerations and a customer-focused
                property experience.
              </p>

              <Link to="/about-us" className="jh-button">
                About Jattari
                <span>↗</span>
              </Link>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="jh-image-frame">
              <img
                src="/images/image-7.webp"
                alt="Jattari Homes"
              />

              <div className="jh-floating-note">
                <strong>Jattari</strong>
                <span>Homes & Lifestyle</span>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* PROPERTIES */}
      <section className="jh-section jh-section-soft">
        <div className="jh-container">

          <Reveal>
            <div className="jh-section-heading-row">

              <div>
                <span className="jh-eyebrow">
                  EXPLORE
                </span>

                <h2 className="jh-title small">
                  Find a space that feels right.
                </h2>
              </div>

              <Link to="/services" className="jh-text-button">
                View Services →
              </Link>

            </div>
          </Reveal>

          <div className="jh-property-grid">

            {properties.map((property, index) => (
              <Reveal key={property.title} delay={index * 0.1}>

                <article className="jh-property-card">

                  <div className="jh-card-image">
                    <img
                      src={property.image}
                      alt={property.title}
                    />

                    <span>{property.category}</span>
                  </div>

                  <div className="jh-card-content">
                    <h3>{property.title}</h3>

                    <p>{property.text}</p>

                    <Link to="/contact">
                      Learn More →
                    </Link>
                  </div>

                </article>

              </Reveal>
            ))}

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="jh-section dark-section">

        <div className="jh-container">

          <Reveal>
            <span className="jh-eyebrow light">
              OUR SERVICES
            </span>

            <h2 className="jh-title light">
              Your property journey,
              <br />
              made simpler.
            </h2>
          </Reveal>

          <div className="jh-services-grid">

        {services.map((service, index) => (
        <Reveal key={service.number} delay={index * 0.1}>

          <div className="jh-service-card dark-card">

  <img
    src="/images/gallery-1.webp"
    alt="Jattari Homes"
    className="service-hover-img"
  />

  <span className="service-number">
    {service.number}
  </span>

  <h3>{service.title}</h3>

  <p>{service.text}</p>

  <Link to="/services">
    Explore Service →
  </Link>

</div>

    </Reveal>
  ))}

</div>

        </div>

      </section>

      {/* GALLERY */}
     <section className="jh-section jh-gallery-section">
  <div className="jh-container">

    <div className="jh-centered-heading">
      <span className="jh-eyebrow">OUR GALLERY</span>

      <h2 className="jh-title small">
        Explore
        <em> Jattari Homes.</em>
      </h2>

      <p className="jh-description centered">
        Take a closer look at our properties, spaces and surroundings.
      </p>
    </div>

    <div className="jh-running-gallery">
      <div className="jh-gallery-track">

        {/* First set */}
        <div className="jh-gallery-card">
          <img src="/images/gallery-1.webp" alt="Jattari Homes" />
        </div>

        <div className="jh-gallery-card">
          <img src="/images/image-1.webp" alt="Jattari Homes" />
        </div>

        <div className="jh-gallery-card">
          <img src="/images/image-2.webp" alt="Jattari Homes" />
        </div>

        <div className="jh-gallery-card">
          <img src="/images/image-3.webp" alt="Jattari Homes" />
        </div>

        <div className="jh-gallery-card">
          <img src="/images/image-4.webp" alt="Jattari Homes" />
        </div>

        <div className="jh-gallery-card">
          <img src="/images/image-5.webp" alt="Jattari Homes" />
        </div>

        {/* Duplicate set for continuous running */}
        <div className="jh-gallery-card">
          <img src="/images/image-6.webp" alt="Jattari Homes" />
        </div>

        <div className="jh-gallery-card">
          <img src="/images/image-1.webp" alt="Jattari Homes" />
        </div>

        <div className="jh-gallery-card">
          <img src="/images/image-2.webp" alt="Jattari Homes" />
        </div>

        <div className="jh-gallery-card">
          <img src="/images/image-3.webp" alt="Jattari Homes" />
        </div>

        <div className="jh-gallery-card">
          <img src="/images/image-4.webp" alt="Jattari Homes" />
        </div>

        <div className="jh-gallery-card">
          <img src="/images/image-5.webp" alt="Jattari Homes" />
        </div>

        <div className="jh-gallery-card">
          <img src="/images/image-7.webp" alt="Jattari Homes" />
        </div>

      </div>
    </div>

  </div>
</section>

      {/* WHY */}
      <section className="jh-section jh-section-soft">

        <div className="jh-container jh-two-column">

          <Reveal>
            <div className="jh-image-frame large">
              <img
                src="/images/flagpark.webp"
                alt="Why Jattari"
              />
            </div>
          </Reveal>

          <Reveal direction="left">

            <div>

              <span className="jh-eyebrow">
                WHY JATTARI
              </span>

              <h2 className="jh-title small">
                Built around what
                <em> matters.</em>
              </h2>

              <div className="jh-feature-list">

                <div>
                  <span>01</span>
                  <div>
                    <h3>Thoughtful Spaces</h3>
                    <p>
                      Every detail starts with the way people actually live.
                    </p>
                  </div>
                </div>

                <div>
                  <span>02</span>
                  <div>
                    <h3>Customer Focus</h3>
                    <p>
                      Clear communication and support throughout your journey.
                    </p>
                  </div>
                </div>

                <div>
                  <span>03</span>
                  <div>
                    <h3>Long-Term Thinking</h3>
                    <p>
                      We look beyond today to create spaces with lasting value.
                    </p>
                  </div>
                </div>

              </div>

              <Link to="/why-jattari" className="jh-button">
                Why Jattari
                <span>↗</span>
              </Link>

            </div>

          </Reveal>

        </div>

      </section>

      {/* CTA */}
      <section className="jh-cta">

        <div className="jh-container">

          <Reveal>
            <div className="jh-cta-inner">

              <span className="jh-eyebrow light">
                START YOUR JOURNEY
              </span>

              <h2>
                Your next chapter
                <br />
                starts here.
              </h2>

              <p>
                Connect with Jattari Homes and discover your next space.
              </p>

              <Link to="/contact" className="jh-button light-button">
                Talk To Us
                <span>↗</span>
              </Link>

            </div>
          </Reveal>

        </div>

      </section>

    </div>
  );
}

export default Home;