import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../Components/Reveal";

const questions = [
  {
    question: "What is Jattari Homes?",
    answer:
      "Jattari Homes is a property-focused brand created around thoughtfully planned spaces and a people-first property experience.",
  },
  {
    question: "How can I enquire about a property?",
    answer:
      "You can contact the Jattari Homes team through the Contact Us page and share your requirements.",
  },
  {
    question: "Can I schedule a site visit?",
    answer:
      "Yes. You can contact the team to discuss your requirements and arrange a suitable site visit.",
  },
  {
    question: "Do you provide property consultation?",
    answer:
      "Yes. Property consultation is designed to help you understand your requirements and explore suitable options.",
  },
  {
    question: "How can I contact Jattari Homes?",
    answer:
      "You can use the phone, email or enquiry form available on the Contact Us page.",
  },
];

function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <div>

      {/* HERO */}
      <section className="jh-page-hero">

        <img
          src="/images/home-2.webp"
          alt="Jattari FAQ"
        />

        <div className="jh-page-hero-overlay" />

        <div className="jh-container">

          <Reveal>

            <div className="jh-page-hero-content">

              <span className="jh-eyebrow light">
                FAQ
              </span>

              <h1>
                Questions,
                <br />
                <em>answered simply.</em>
              </h1>

              <p>
                Everything you need to know before taking your next step.
              </p>

            </div>

          </Reveal>

        </div>

      </section>

      {/* FAQ */}
      <section className="jh-section jh-faq-section">

        <div className="jh-container">

          <motion.div
            className="jh-faq-title-top"
            initial={{
              opacity: 0,
              y: -35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <span className="jh-eyebrow">
              NEED TO KNOW
            </span>

            <h2 className="jh-title small">
              Answers to your
              <em> questions.</em>
            </h2>

          </motion.div>

          <div className="jh-faq-layout">

            <Reveal>

              <div className="jh-faq-intro">

                <div className="jh-faq-number">
                  05
                </div>

                <h3>
                  Frequently asked
                  <br />
                  questions.
                </h3>

                <p>
                  If you still have a question after reading these answers,
                  our team is ready to help.
                </p>

              </div>

            </Reveal>

            <Reveal direction="left">

              <div className="jh-faq-list">

                {questions.map((item, index) => (
                  <div
                    key={item.question}
                    className={`jh-faq-item ${
                      active === index ? "active" : ""
                    }`}
                  >

                    <button
                      onClick={() =>
                        setActive(
                          active === index ? -1 : index
                        )
                      }
                    >

                      <span>
                        <small>
                          0{index + 1}
                        </small>

                        {item.question}
                      </span>

                      <strong>
                        {active === index ? "−" : "+"}
                      </strong>

                    </button>

                    <motion.div
                      className="jh-faq-answer"
                      initial={false}
                      animate={{
                        height:
                          active === index
                            ? "auto"
                            : 0,
                        opacity:
                          active === index
                            ? 1
                            : 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <p>
                        {item.answer}
                      </p>
                    </motion.div>

                  </div>
                ))}

              </div>

            </Reveal>

          </div>

        </div>

      </section>

    </div>
  );
}

export default FAQ;