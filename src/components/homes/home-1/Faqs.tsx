import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import "./faqs.scss";

const faqs = [
  {
    id: "according-1",
    question: "Is InvestEase Research SEBI registered?",
    answer:
      "Yes. InvestEase Research is a SEBI-registered Research Analyst and operates in accordance with the SEBI (Research Analyst) Regulations, 2014.",
    open: false,
  },
  {
    id: "according-2",
    question: "What kind of services do you provide?",
    answer:
      "We provide equity research and market insights focused on long-term investing, swing opportunities, and investor education. Our services are research-driven and do not involve execution or portfolio management.",
    open: true,
  },
  {
    id: "according-3",
    question: "Who is a Research Analyst?",
    answer:
      "A Research Analyst is a SEBI-registered professional authorized to provide research reports and investment recommendations based on structured analysis, subject to regulatory guidelines.",
    open: false,
  },
  {
    id: "according-4",
    question: "Are your services suitable for beginners?",
    answer:
      "Yes. Our services are suitable for both beginners and experienced investors who are willing to learn, understand risks, and follow a disciplined investment approach.",
    open: false,
  },
  {
    id: "according-5",
    question: "What is the typical holding period of your research recommendations?",
    answer:
      "Holding periods vary depending on the research category. Long-term ideas may range from months to years, while short- to medium-term insights depend on market conditions and strategy.",
    open: false,
  },
  {
    id: "according-6",
    question: "Where can I get the stock research and analysis?",
    answer:
      "Our research is shared through official communication channels such as our website, email updates, or other authorized platforms mentioned at the time of subscription.",
    open: false,
  },
];

export default function Faqs() {
  return (
    <section className="section-faqs h-1 tf-spacing-2 section-one-page faq-premium" id="faqs">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="section-faqs-inner">
              <div className="left">
                <div className="heading-section">
                  <div className="text-anime-wave">
                    <span className="tag label text-btn-uppercase bg-white faq-chip">FAQs</span>
                  </div>
                  <h3 className="title-section mb-12 text-anime-wave faq-title">
                    Research That Delivers <span>Real Results</span>
                  </h3>
                  <div className="sub-title body-2 text-anime-wave mb-40 faq-subtitle">
                    We answer the most common investor questions - what to buy, when to buy, and how to
                    manage risk - using disciplined research and a long-term approach.
                  </div>
                  <div className="text-anime-wave">
                    <Link to="/contact-us" className="faq-cta-btn">
                      <span>Talk to an Expert</span>
                      <Send size={18} className="btn-icon" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="wg-according faq-accordion" id="According">
                  {faqs.map((item) => (
                    <div className="according-item" key={item.id}>
                      <h5>
                        <a
                          href={`#${item.id}`}
                          data-bs-toggle="collapse"
                          className={`title-according${item.open ? "" : " collapsed"}`}
                        >
                          {item.question}
                          <span />
                        </a>
                      </h5>
                      <div
                        id={item.id}
                        className={`collapse${item.open ? " show" : ""}`}
                        data-bs-parent="#According"
                      >
                        <div className="according-content">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
