import { Link } from "react-router-dom";
import Reveal from "../Components/Reveal";

function WhyJattari() {
  const reasons = [
    {
      number: "01",
      title: "Thoughtful Planning",
      text: "We focus on spaces that feel considered, practical and comfortable.",
    },
    {
      number: "02",
      title: "Customer Focus",
      text: "Your questions, requirements and goals remain central to the experience.",
    },
    {
      number: "03",
      title: "Modern Lifestyle",
      text: "We think about the way people want to live today and tomorrow.",
    },
    {
      number: "04",
      title: "Personal Support",
      text: "A property decision becomes easier when you have someone to guide you.",
    },
  ];

  return (
    <div>

      <section className="jh-page-hero">

        <img
          src="/images/image-2.webp"
          alt="Why Jattari"
        />

        <div className="jh-page-hero-overlay" />

        <div className="jh-container">

          <Reveal>

            <div className="jh-page-hero-content">

              <span className="jh-eyebrow light">
                WHY JATTARI
              </span>

              <h1>
                Because where
                <br />
                <em>you live matters.</em>
              </h1>

              <p>
                Thoughtful spaces. Meaningful experiences.
              </p>

            </div>

          </Reveal>

        </div>

      </section>

      <section className="jh-section">

        <div className="jh-container jh-two-column">

          <Reveal>

            <div>

              <span className="jh-eyebrow">
                THE JATTARI DIFFERENCE
              </span>

              <h2 className="jh-title small">
                We think beyond
                <em> four walls.</em>
              </h2>

            </div>

          </Reveal>

          <Reveal direction="left">

            <div className="jh-copy">

              <p>
                A great property experience is about much more than a
                transaction. It is about understanding the location,
                surroundings, lifestyle and the people who will call it home.
              </p>

              <p>
                Jattari Homes brings these ideas together through a
                people-first approach and thoughtful property support.
              </p>

            </div>

          </Reveal>

        </div>

      </section>

      <section className="jh-section jh-section-soft">

        <div className="jh-container">

          <Reveal>

            <div className="jh-centered-heading">

              <span className="jh-eyebrow">
                WHY CHOOSE US
              </span>

              <h2 className="jh-title small">
                What makes Jattari
                <em> different.</em>
              </h2>

            </div>

          </Reveal>

          <div className="jh-reasons-grid">

            {reasons.map((reason, index) => (
              <Reveal
                key={reason.number}
                delay={index * 0.1}
              >

                <article className="jh-reason-card">

                  <span>{reason.number}</span>

                  <h3>{reason.title}</h3>

                  <p>{reason.text}</p>

                  <div className="reason-arrow">
                    ↗
                  </div>

                </article>

              </Reveal>
            ))}

          </div>

        </div>

      </section>

      <section className="jh-section">

        <div className="jh-container jh-about-image-grid">

          <Reveal>

            <div className="jh-image-frame">

              <img
                src="/images/home-3.webp"
                alt="Jattari lifestyle"
              />

            </div>

          </Reveal>

          <Reveal direction="left">

            <div className="jh-dark-panel">

              <span className="jh-eyebrow light">
                OUR PROMISE
              </span>

              <h2>
                Make the
                <br />
                journey <em>better.</em>
              </h2>

              <p>
                We believe the property journey should feel informed,
                comfortable and personal from the beginning.
              </p>

              <Link
                to="/contact"
                className="jh-button light-button"
              >
                Talk To Jattari
                <span>↗</span>
              </Link>

            </div>

          </Reveal>

        </div>

      </section>

    </div>
  );
}

export default WhyJattari;