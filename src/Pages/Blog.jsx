import { Link } from "react-router-dom";
import Reveal from "../Components/Reveal";

const posts = [
  {
    image: "/images/gallery-1.webp",
    category: "Property Guide",
    date: "October 2026",
    title: "What to consider before choosing a property",
    text: "A practical look at the questions that can help you understand whether a property fits your requirements.",
  },
  {
    image: "/images/gallery-2.webp",
    category: "Lifestyle",
    date: "October 2026",
    title: "Why surroundings matter when choosing a home",
    text: "The right environment can influence how comfortable and connected everyday life feels.",
  },
  {
    image: "/images/gallery-3.webp",
    category: "Investment",
    date: "October 2026",
    title: "Understanding your property goals",
    text: "Before exploring properties, it helps to understand what you want from your investment or future home.",
  },
  {
    image: "/images/gallery-4.webp",
    category: "Jattari",
    date: "October 2026",
    title: "The idea behind Jattari Homes",
    text: "Discover the thinking behind our people-first approach to property.",
  },
  {
    image: "/images/gallery-5.webp",
    category: "Lifestyle",
    date: "October 2026",
    title: "Creating space for everyday moments",
    text: "Good planning is about creating surroundings that support the way people actually live.",
  },
  {
    image: "/images/gallery-6.webp",
    category: "Property Guide",
    date: "October 2026",
    title: "Questions to ask during a site visit",
    text: "A few useful things to observe and understand when you visit a property.",
  },
];

function Blog() {
  return (
    <div>

      <section className="jh-page-hero">

        <img
          src="/images/image-3.webp"
          alt="Jattari Blog"
        />

        <div className="jh-page-hero-overlay" />

        <div className="jh-container">

          <Reveal>

            <div className="jh-page-hero-content">

              <span className="jh-eyebrow light">
                JATTARI JOURNAL
              </span>

              <h1>
                Ideas for
                <br />
                <em>better property decisions.</em>
              </h1>

              <p>
                Property, lifestyle and ideas from Jattari Homes.
              </p>

            </div>

          </Reveal>

        </div>

      </section>

      <section className="jh-section">

        <div className="jh-container">

          <Reveal>

            <div className="jh-section-heading-row">

              <div>

                <span className="jh-eyebrow">
                  LATEST STORIES
                </span>

                <h2 className="jh-title small">
                  Read, explore,
                  <em> discover.</em>
                </h2>

              </div>

            </div>

          </Reveal>

          <div className="jh-blog-grid">

            {posts.map((post, index) => (
              <Reveal
                key={post.title}
                delay={index * 0.08}
              >

                <article className="jh-blog-card">

                  <div className="jh-blog-image">

                    <img
                      src={post.image}
                      alt={post.title}
                    />

                    <span>
                      {post.category}
                    </span>

                  </div>

                  <div className="jh-blog-content">

                    <small>{post.date}</small>

                    <h3>{post.title}</h3>

                    <p>{post.text}</p>

                    <Link to="/contact">
                      Read More →
                    </Link>

                  </div>

                </article>

              </Reveal>
            ))}

          </div>

        </div>

      </section>

      <section className="jh-cta">

        <div className="jh-container jh-cta-inner">

          <span className="jh-eyebrow light">
            HAVE A QUESTION?
          </span>

          <h2>
            Let's talk about
            <br />
            your next move.
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

export default Blog;