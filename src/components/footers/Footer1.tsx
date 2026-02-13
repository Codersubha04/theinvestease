import { Link } from "react-router-dom";

import { useEffect } from "react";
import NewsLetterForm from "../common/NewsLetterForm";

export default function Footer1({ parentClass = "footer" }) {
  useEffect(() => {
    const headings = document.querySelectorAll(".title-mobile");

    const toggleOpen = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const parent = target.closest(".footer-col-block") as HTMLElement | null;
      if (!parent) return;
      const content = parent.querySelector(
        ".tf-collapse-content",
      ) as HTMLElement | null;
      if (!content) return;

      if (parent.classList.contains("open")) {
        parent.classList.remove("open");
        content.style.height = "0px";
      } else {
        parent.classList.add("open");
        content.style.height = content.scrollHeight + 10 + "px";
      }
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []); // Empty dependency array means this will run only once on mount

  return (
    <footer className={parentClass} id="footer">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="footer-top">
              <div className="footer-left">
                <div className="logo-footer">
                  <Link to={`/`} className="logo">
                    <img
                      alt=""
                      src="/image/logo/InvestEase-White.png"
                      width={189}
                      height={41}
                    />
                  </Link>
                </div>
                <div className="text caption-1">
                  InvestEase is a SEBI-registered research analyst firm
                  <br />
                  dedicated to empowering investors through transparent,
                  ethical, and research-driven equity market insights for
                  long-term wealth creation.{" "}
                </div>
                <div className="contact-footer">
                  <div className="address contact-top contact-footer-content">
                    <p className="caption-2">Head Office Address</p>
                    <a href="#">
                      4/82 Seth Bagan Road, Kolkata, West Bengal, India
                    </a>
                  </div>

                  <div className="address contact-top contact-footer-content">
                    <p className="caption-2">Branch Office Address</p>
                    <a href="#">Webel IT Park, Kharagpur, West Bengal, India</a>
                  </div>
                  <div className="contact-bottom">
                    <div className="contact-footer-content">
                      <p className="caption-2">Support 24/7</p>
                      <a href="tel:+917980561156">+91-7980561156</a>
                    </div>

                    <div className="contact-footer-content">
                      <p className="caption-2">Email Address</p>
                      <a href="mailto:support@investease.in">
                        support@investease.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-center">
                <div className="footer-content our-services footer-col-block">
                  <div className="title-mobile label text-btn-uppercase">
                    Quick Links
                    <i className="icon-arrow-51" />
                  </div>
                  <div className="tf-collapse-content">
                    <ul>
                      <li className="support-item-footer caption-1">
                        <Link to={`/`}>Home</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link to={`/about-investease`}>About InvestEase</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link to={`/services`}>Services</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link to={`/investor-education`}>
                          Investor Education
                        </Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link to={`/contact-us`}>Contact Us</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link to={`/e-kyc`}>e-KYC</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link to={`/faq`}>FAQ</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-content our-services footer-col-block">
                  <div className="title-mobile label text-btn-uppercase">
                    Important Links
                    <i className="icon-arrow-51" />
                  </div>
                  <div className="tf-collapse-content">
                    <ul>
                      <li className="support-item-footer caption-1">
                        <Link to={`/refund-policy`}>Refund Policy</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link to={`/cancellation-policy`}>
                          Cancellation Policy
                        </Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link to={`/disclaimer`}>Disclaimer</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link to={`/privacy-policy`}>Privacy Policy</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link to={`/investor-charter`}>Investor Charter</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link to={`/code-of-conduct`}>
                          Code Of Conduct of RA
                        </Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link to={`/disclosures`}>Disclosures</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link to={`/grievance-redressal`}>
                          Grievance Redressal Mechanism
                        </Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link to={`/complaints-data`}>Complaints Data</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-right">
                <div className="footer-subscribe">
                  <div className="label text-btn-uppercase">
                    Subscribe for all the top news!
                  </div>
                  <NewsLetterForm />
                  <div className="text caption-2">
                    Get research updates and investor education in your inbox.
                  </div>
                </div>
                <div className="footer-social">
                  <div className="title-footer">Follow Us:</div>
                  <ul className="tf-social style-border radius-50 g-8 style-2">
                    <li className="item">
                      <a href="#">
                        <div className="icon">
                          <i className="icon-messenger" />
                        </div>
                      </a>
                    </li>
                    <li className="item">
                      <a href="#">
                        <div className="icon">
                          <i className="icon-x" />
                        </div>
                      </a>
                    </li>
                    <li className="item">
                      <a href="#">
                        <div className="icon">
                          <i className="icon-ig1" />
                        </div>
                      </a>
                    </li>
                    <li className="item">
                      <a href="#">
                        <div className="icon">
                          <i className="icon-skype" />
                        </div>
                      </a>
                    </li>
                    <li className="item">
                      <a href="#">
                        <div className="icon">
                          <i className="icon-telegram" />
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="footer-bottom-inner">
                <div className="left">
                  <div className="text caption-1">
                    ©2026 InvestEase. All Rights Reserved.
                  </div>
                </div>
                <div className="right">
                  <ul>
                    <li>
                      <Link to="/legal-disclaimer" className="caption-1">
                        Legal Disclaimer
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms-of-use" className="caption-1">
                        Terms Of Use
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms-conditions" className="caption-1">
                        Most Important Terms & Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
