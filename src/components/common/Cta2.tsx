import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import "./cta2.scss";

export default function Cta() {
  return (
    <section className="section-cta h-1 tf-spacing-3 section-one-page cta-premium" id="cta">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="cta-inner">
              <div className="image tf-animate-1 cta-premium-image">
                <img
                  src="/image/section/img-cta-1.png"
                  alt="InvestEase advisory support"
                  className="lazyload"
                  width={344}
                  height={447}
                />
              </div>
              <div className="cta-content">
                <div className="heading-section style-color-white mb-0 cta-premium-heading">
                  <Link
                    to={`/contact-us`}
                    className="tag label text-btn-uppercase wow fadeInUp cta-premium-chip"
                  >
                    CONTACT US
                  </Link>
                  <h3 className="title-section wow fadeInUp mb-12 cta-premium-title">
                    Need More Clarity? <span>Talk to Our Research Team.</span>
                  </h3>
                  <div className="sub-title mb-28 body-2 wow fadeInUp cta-premium-subtitle">
                    If your question is still unresolved, connect with us directly.
                    We provide clear, compliance-focused, and research-backed support.
                  </div>
                  <div className="bottom cta-premium-bottom">
                    <Link
                      to={`/contact-us`}
                      className="cta-premium-btn wow fadeInUp"
                    >
                      <span>Send Your Query</span>
                      <Send size={18} className="btn-icon" />
                    </Link>
                    <div className="tf-phone no-border color-white g-14 cta-premium-phone">
                      <a href="tel:+917980561156" className="icon wow fadeInUp">
                        <i className="icon-PhoneCall" />
                      </a>
                      <div className="content wow fadeInUp">
                        <p className="caption-2 mb-2">Call Us Directly</p>
                        <h6>
                          <a href="tel:+917980561156">+91-7980561156</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
