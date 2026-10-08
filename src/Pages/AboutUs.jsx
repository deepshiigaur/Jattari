import { Link } from "react-router-dom";
import Reveal from "../Components/Reveal";

function AboutUs() {
  return (
    <div>

      {/* PAGE HERO */}
      <section className="jh-page-hero">

        <img
          src="/images/image-8.webp"
          alt="About Jattari Homes"
        />

        <div className="jh-page-hero-overlay" />

        <div className="jh-container">
          <Reveal>
            <div className="jh-page-hero-content">

              <span className="jh-eyebrow light">
                ABOUT JATTARI
              </span>

              <h1>
                Creating spaces
                <br />
                <em>worth coming home to.</em>
              </h1>

              <p>
                A people-first approach to property and lifestyle.
              </p>

            </div>
          </Reveal>
        </div>

      </section>

      {/* INTRO */}
      <section className="jh-section">

        <div className="jh-container jh-two-column">

          <Reveal>

            <div>
              <span className="jh-eyebrow">
                OUR STORY
              </span>

              <h2 className="jh-title small">
                Property should feel
                <em> personal.</em>
              </h2>
            </div>

          </Reveal>

          <Reveal direction="left">

            <div className="jh-copy">

              <p>
                Jattari Homes is built around a simple idea:
                property decisions should be easier, clearer and more
                meaningful.
              </p>

              <p>
                We bring together thoughtful planning, lifestyle-focused
                spaces and customer support to create a property experience
                that feels different from the ordinary.
              </p>

              <p>
                From discovering a location to understanding your options,
                our focus remains on helping people make confident decisions.
              </p>

            </div>

          </Reveal>

        </div>

      </section>

      {/* IMAGE */}
      <section className="jh-section jh-section-soft">

        <div className="jh-container jh-about-image-grid">

          <Reveal>

            <div className="jh-image-frame">
              <img
                src="/images/home-2.webp"
                alt="Jattari Homes"
              />
            </div>

          </Reveal>

          <Reveal direction="left">

            <div className="jh-about-panel">

              <span className="jh-eyebrow">
                OUR APPROACH
              </span>

              <h2>
                Designed for
                <br />
                <em>real life.</em>
              </h2>

              <p>
                Good spaces are not only about how they look. They are about
                how they make everyday life feel.
              </p>

              <div className="jh-mini-points">

                <div>
                  <strong>01</strong>
                  <span>Listen</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Understand</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Create</span>
                </div>

              </div>

            </div>

          </Reveal>

        </div>

      </section>

      {/* VALUES */}
      <section className="jh-section">

        <div className="jh-container">

          <Reveal>

            <div className="jh-centered-heading">

              <span className="jh-eyebrow">
                WHAT WE BELIEVE
              </span>

              <h2 className="jh-title small">
                The principles behind Jattari.
              </h2>

            </div>

          </Reveal>

          <div className="jh-values-grid">

            <Reveal>
              <article className="jh-value-card">
                <span>01</span>
                <h3>People First</h3>
                <p>
                  Every experience begins by understanding the people we serve.
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article className="jh-value-card">
                <span>02</span>
                <h3>Thoughtful Design</h3>
                <p>
                  We value spaces that combine visual character with everyday
                  practicality.
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.2}>
              <article className="jh-value-card">
                <span>03</span>
                <h3>Trust</h3>
                <p>
                  Clear conversations and dependable support are central to
                  our approach.
                </p>
              </article>
            </Reveal>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="jh-cta">

        <div className="jh-container jh-cta-inner">

          <span className="jh-eyebrow light">
            DISCOVER JATTARI
          </span>

          <h2>
            Let's find the
            <br />
            right space for you.
          </h2>

          <Link to="/contact" className="jh-button light-button">
            Contact Us
            <span>↗</span>
          </Link>

        </div>

      </section>

    </div>
  );
}

export default AboutUs;