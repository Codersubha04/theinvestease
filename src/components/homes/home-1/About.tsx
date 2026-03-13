import { Link } from "react-router-dom";
import { useState } from "react";
import { Send } from "lucide-react";

import OdometerComponent from "@/components/common/OdometerComponent";

export default function About() {
  type TabKey = "research" | "responsibility" | "reliability";

  const [activeTab, setActiveTab] = useState<TabKey>("research");

  const tabData: Record<TabKey, { count: number; content: string }> = {
    research: {
      count: 7,
      content:
        "We treat research as a process of judgment, not prediction, combining analysis, context, and discipline to support long-term investment thinking.",
    },
    responsibility: {
      count: 7,
      content:
        "We recognise the responsibility that comes with influencing financial decisions. Every insight is delivered with transparency, regulatory awareness, and respect for investor trust.",
    },
    reliability: {
      count: 7,
      content:
        "In an environment of constant change, our reliability lies in stability of approach: measured, repeatable, and free from short-term bias.",
    },
  };

  return (
    <section
      className="section-about h-1 tf-spacing-2 section-one-page home1-about-premium"
      id="about"
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-8">
            <div className="heading-section about-content-left">
              <div className="text-anime-wave wow fadeInUp">
                <span className="tag label text-btn-uppercase about-home-chip">
                  WE ARE INVESTEASE
                </span>
              </div>

              <h3
                className="text-color-change mb-40 about-home-text wow fadeInUp"
                data-wow-delay=".1s"
              >
                At InvestEase, we aim to make investing easier without
                compromising on discipline or integrity. Our focus remains on
                clarity over complexity and sustainability over speculation,
                enabling investors to take informed decisions aligned with their
                financial goals.
              </h3>

              <Link
                to="/about-us"
                className="about-home-cta wow fadeInUp"
                data-wow-delay=".2s"
              >
                <span>About Us</span>
                <Send size={18} className="btn-icon" />
              </Link>
            </div>
          </div>

          <div className="col-lg-4">
            <div
              className="about-content-right about-home-right-panel wow fadeInRight"
              data-wow-delay=".15s"
            >
              <div className="counter-item about-home-counter">
                <div className="counter">
                  <div className="number-counter mb--3">
                    <h2 className="number odometer color-primary mb-2">
                      <OdometerComponent max={tabData[activeTab].count} />
                    </h2>
                    <h2 className="plus color-primary">+</h2>
                  </div>
                  <p className="text text-btn-uppercase label about-home-counter-label">
                    YEARS OF EXPERTISE
                  </p>
                </div>
              </div>

              <div className="flat-animate-tab about-home-tabs-wrap">
                <div className="wg-tab style-small about-home-tabs">
                  <ul className="tab-product min-w-366 about-home-tab-list" role="tablist">
                    <li className="nav-tab-item">
                      <h6>
                        <a
                          href="#"
                          className={`about-home-tab-link ${activeTab === "research" ? "active" : ""}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveTab("research");
                          }}
                        >
                          Research
                        </a>
                      </h6>
                    </li>

                    <li className="nav-tab-item">
                      <h6>
                        <a
                          href="#"
                          className={`about-home-tab-link ${
                            activeTab === "responsibility" ? "active" : ""
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveTab("responsibility");
                          }}
                        >
                          Responsibility
                        </a>
                      </h6>
                    </li>

                    <li className="nav-tab-item">
                      <h6>
                        <a
                          href="#"
                          className={`about-home-tab-link ${activeTab === "reliability" ? "active" : ""}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveTab("reliability");
                          }}
                        >
                          Reliability
                        </a>
                      </h6>
                    </li>
                  </ul>
                </div>

                <div className="tab-content about-home-tab-content">
                  <div>
                    <p className="text about-home-tab-text">{tabData[activeTab].content}</p>
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
