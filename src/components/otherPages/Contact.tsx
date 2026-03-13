import { Link } from "react-router-dom";
import "./contact.scss";
import {
  PhoneCall,
  Mail,
  Clock,
  BadgeCheck,
  Headset,
  FileCheck2,
  Handshake,
} from "lucide-react";

export default function Contact() {
  const strengths = [
    {
      icon: <BadgeCheck size={18} strokeWidth={2.2} />,
      text: "SEBI-Registered Research Analyst",
      delay: ".1s",
    },
    {
      icon: <Headset size={18} strokeWidth={2.2} />,
      text: "24/7 Expert support",
      delay: ".15s",
    },
    {
      icon: <FileCheck2 size={18} strokeWidth={2.2} />,
      text: "Clear disclosures and transparent communication",
      delay: ".2s",
    },
    {
      icon: <Handshake size={18} strokeWidth={2.2} />,
      text: "Investor-first mindset",
      delay: ".25s",
    },
  ];

  return (
    <section className="section-contact-home page-contact tf-spacing-2 contact-section-premium">
      <div className="tf-container position-relative">
        <div className="row rg-60">
          <div className="">
            <div className="section-contact-home-inner mr-30">
              <div className="section-content">
                <div className="heading-section mb-28">
                  <div className="wow fadeInUp">
                    <Link
                      to="/contact-us"
                      className="tag label text-btn-uppercase mb-12 contact-chip"
                    >
                      Contact Us
                    </Link>
                  </div>
                  <h3 className="title-section mb-12 wow fadeInUp contact-title">
                    Get in Touch with <span>InvestEase</span>
                  </h3>
                  <div className="sub-title body-2 color-on-suface-container wow fadeInUp">
                    Have questions about equity research, market insights, or
                    our research process?
                  </div>
                  <div className="sub-title body-2 color-on-suface-container wow fadeInUp">
                    Reach out to us for transparent, regulation-aligned equity
                    research and clear, structured communication focused on
                    long-term market understanding.
                    <br /> <br />
                    At InvestEase, our focus is on investor education, research
                    clarity, and long-term market understanding. Why Connect
                    with Us?
                  </div>
                </div>
                <div className="cols contact-strengths">
                  {strengths.map((item) => (
                    <div className="benefit-lists item" key={item.text}>
                      <div className="benefit-items contact-strength-item">
                        <div className="icon wow fadeInUp">{item.icon}</div>
                        <div className="caption-1 wow fadeInUp" data-wow-delay={item.delay}>
                          {item.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="contact-card-wrapper mt-5">
                  <div className="row g-4 contact-info-grid">
                    <div className="col-lg-4 col-md-6">
                      <article className="contact-dark-card contact-info-card">
                        <div className="icon-circle">
                          <PhoneCall size={26} strokeWidth={2} />
                        </div>
                        <h5 className="contact-info-label">Call or WhatsApp</h5>
                        <p className="contact-info-main">+91-7980561156</p>
                      </article>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <article className="contact-dark-card contact-info-card">
                        <div className="icon-circle">
                          <Mail size={26} strokeWidth={2} />
                        </div>
                        <h5 className="contact-info-label">Message Us</h5>
                        <p className="contact-info-main">support@theinvestease.com</p>
                      </article>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <article className="contact-dark-card contact-info-card">
                        <div className="icon-circle">
                          <Clock size={26} strokeWidth={2} />
                        </div>
                        <h5 className="contact-info-label">Open Hours</h5>
                        <p className="contact-info-main">
                          Monday - Saturday: 9:30 AM - 6:00 PM
                        </p>
                        <p className="contact-info-sub">
                          Sunday & Market Holidays: Closed
                        </p>
                      </article>
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
