import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import "./features2.scss";

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

export default function Features({
  parentClass = "section-why-choose h-2 tf-spacing-31",
  hasBorder = false,
}) {
  return (
    <section className={`${parentClass} features2-premium`}>
      <div className="tf-container position-relative">
        <div
          className={`${
            hasBorder
              ? "row rg-60 border-bottom tf-spacing-31"
              : "row rg-60 align-items-center"
          }`}
        >
          <div className="col-lg-6">
            <div className="image mr-15 tf-animate-1 features2-image-card">
              <img
                src="/image/section/img-section-why-choose-h2.jpg"
                alt="Why Choose InvestEase"
                className="lazyload"
                width={615}
                height={615}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-content ml-15 features2-content-panel">
              <div className="heading-section">
                <div className="wow fadeInUp">
                  <span className="tag label text-btn-uppercase features2-chip">
                    Why Choose InvestEase
                  </span>
                </div>
                <h3 className="title-section wow fadeInUp mb-12 features2-title">
                  Why Choose <span>InvestEase</span>
                </h3>
              </div>

              <div className="benefit-lists features2-list">
                {points.map((point, index) => (
                  <div className="benefit-items features2-list-item" key={point}>
                    <div className="icon wow fadeInUp" data-wow-delay={`${index * 0.05}s`}>
                      <i className="icon-checkbox" />
                    </div>
                    <div className="title wow fadeInUp" data-wow-delay={`${index * 0.05 + 0.05}s`}>
                      {point}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/contact-us"
                className="wow fadeInUp features2-cta-btn"
              >
                <span>Free Consultation</span>
                <Send size={18} className="btn-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
