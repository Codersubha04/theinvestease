import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import "./features.scss";

const points = [
  "SEBI Registered Company - INH000020721",
  "Client Centric Point of View",
  "High Accuracy up to - 90%",
  "Proven Research Methodology",
  "100% Genuine Customer Support",
  "7+ Years Experience in Market",
  "Free Consultation by Our Experts",
  "Dedicated Relationship Manager",
];

export default function Features() {
  return (
    <section className="section-why-choose h-4 tf-spacing-2 features-premium-h4">
      <div className="tf-container position-relative">
        <div className="row rg-60 align-items-center">
          <div className="col-lg-6">
            <div className="section-content features-content-panel">
              <div className="heading-section">
                <div className="text-anime-wave">
                  <span className="tag label text-btn-uppercase features-chip">
                    Why Choose us?
                  </span>
                </div>
                <h3 className="text-anime-wave mb-12 features-title">
                  Why Choose <span>InvestEase</span>
                </h3>
              </div>

              <div className="benefit-lists features-list">
                {points.map((point, index) => (
                  <div
                    className="benefit-items text-anime-wave features-list-item"
                    key={point}
                    data-wow-delay={`${index * 0.05}s`}
                  >
                    <div className="icon">
                      <i className="icon-checkbox" />
                    </div>
                    <div className="title">{point}</div>
                  </div>
                ))}
              </div>

              <div className="text-anime-wave">
                <Link to="/contact-us" className="features-cta-btn">
                  <span>Schedule A Consultation</span>
                  <Send size={18} className="btn-icon" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="image tf-animate-4 features-image-card">
              <img
                src="/image/section/img-section-why-choose-h2.jpg"
                alt="Why Choose InvestEase"
                className="lazyload"
                width={615}
                height={615}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
