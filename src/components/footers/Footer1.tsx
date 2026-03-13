import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Send,
  Youtube,
} from "lucide-react";
import "./footer1-custom.scss";

import { useEffect } from "react";
import NewsLetterForm from "../common/NewsLetterForm";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61587700070114",
    icon: Facebook,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@InvestEaseSchool",
    icon: Youtube,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/investease_research/",
    icon: Instagram,
  },
  {
    label: "Telegram",
    href: "https://t.me/InvestEase_Official",
    icon: Send,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/investease-research/",
    icon: Linkedin,
  },
  {
    label: "Twitter/X",
    href: "https://x.com/the_investease",
    icon: Twitter,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/917980561156",
    iconClass: "bi bi-whatsapp",
  },
];

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
                        <Link to={`/about-us`}>About InvestEase</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link to={`/`}>Services</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link to={`/`}>
                          Investor Education
                        </Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link to={`/contact-us`}>Contact Us</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link to={`/register`}>e-KYC</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link to={`/`}>FAQ</Link>
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
                  <ul className="tf-social style-border radius-50 g-8 footer-social-premium">
                    {socialLinks.map(({ label, href, icon: Icon, iconClass }) => (
                      <li className="item" key={label}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={label}
                          title={label}
                          className="footer-social-link"
                        >
                          <div className="icon footer-social-icon">
                            {iconClass ? (
                              <i className={iconClass} style={{ fontSize: "15px", lineHeight: 1 }} />
                            ) : (
                              Icon ? <Icon size={15} strokeWidth={2.1} /> : null
                            )}
                          </div>
                        </a>
                      </li>
                    ))}
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
