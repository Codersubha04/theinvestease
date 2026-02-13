import { Link } from "react-router-dom";
// import ContactForm from "./ContactForm";
import "./contact.scss";
import { PhoneCall, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section className="section-contact-home page-contact tf-spacing-2">
      <div className="tf-container position-relative">
        <div className="row rg-60">
          <div className="">
            <div className="section-contact-home-inner mr-30">
              <div className="section-content">
                <div className="heading-section mb-28">
                  <div className="wow fadeInUp">
                    <Link
                      to={`/contact-us`}
                      className="tag label text-btn-uppercase mb-12"
                    >
                      Contact US
                    </Link>
                  </div>
                  <h3 className="title-section mb-12 wow fadeInUp">
                    Get in Touch with InvestEase
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
                <div className="cols">
                  <div className="benefit-lists item">
                    <div className="benefit-items">
                      <div className="icon wow fadeInUp">
                        <i className="icon-checkbox" />
                      </div>
                      <div
                        className="caption-1 wow fadeInUp"
                        data-wow-delay=".1s"
                      >
                        SEBI-Registered Research Analyst
                      </div>
                    </div>
                    <div className="benefit-items">
                      <div className="icon wow fadeInUp">
                        <i className="icon-checkbox" />
                      </div>
                      <div
                        className="caption-1 wow fadeInUp"
                        data-wow-delay=".1s"
                      >
                        24/7 Expert support
                      </div>
                    </div>
                  </div>
                  <div className="benefit-lists item">
                    <div className="benefit-items">
                      <div className="icon wow fadeInUp" data-wow-delay=".2s">
                        <i className="icon-checkbox" />
                      </div>
                      <div
                        className="caption-1 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        Clear disclosures and transparent communication
                      </div>
                    </div>
                    <div className="benefit-items">
                      <div className="icon wow fadeInUp" data-wow-delay=".2s">
                        <i className="icon-checkbox" />
                      </div>
                      <div
                        className="caption-1 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        Investor-first mindset
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact-card-wrapper mt-5">
                  <div className="row g-4">
                    {/* Call */}
                    <div className="col-lg-4 col-md-6">
                      <div className="contact-dark-card">
                        <div className="icon-circle">
                          <PhoneCall size={26} strokeWidth={2} />
                        </div>
                        <h5>Call or WhatsApp</h5>
                        <p>+91-7980561156</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-lg-4 col-md-6">
                      <div className="contact-dark-card">
                        <div className="icon-circle">
                          <Mail size={26} strokeWidth={2} />
                        </div>
                        <h5>Message Us</h5>
                        <p>support@theinvestease.com</p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="col-lg-4 col-md-6">
                      <div className="contact-dark-card">
                        <div className="icon-circle">
                          <Clock size={26} strokeWidth={2} />
                        </div>
                        <h5>Open Hours</h5>
                        <p>Monday – Saturday: 9:30 AM – 6:00 PM</p>
                        <p>Sunday & Market Holidays: Closed</p>
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
