import { Link } from "react-router-dom";
import { useState } from "react";

import OdometerComponent from "@/components/common/OdometerComponent";

export default function About() {
  type TabKey = "research" | "responsibility" | "reliability";

  const [activeTab, setActiveTab] = useState<TabKey>("research");

  const tabData: Record<TabKey, { count: number; content: string }> = {
    research: {
      count: 7,
      content:
        "We treat research as a process of judgment, not prediction — combining analysis, context, and discipline to support long-term investment thinking.",
    },
    responsibility: {
      count: 5,
      content:
        "We recognise the responsibility that comes with influencing financial decisions. Every insight is delivered with transparency, regulatory awareness, and respect for investor trust.",
    },
    reliability: {
      count: 7,
      content:
        "In an environment of constant change, our reliability lies in stability of approach — measured, repeatable, and free from short-term bias.",
    },
  };
  return (
    <section
      className="section-about h-1 tf-spacing-2 section-one-page"
      id="about"
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-8">
            <div className="heading-section about-content-left">
              <div className="text-anime-wave">
                <a href="#" className="tag label text-btn-uppercase">
                  WE ARE InvestEase
                </a>
              </div>
              <h3 className="text-color-change mb-40">
                At InvestEase, we aim to make investing <br />
                investing easier without compromising
                <br />
                on discipline or integrity. Our focus <br />
                remains and solutions for your financial <br />
                success on clarity over complexity and <br />
                sustainability over speculation,enabling <br />
                investors to take informed decisions <br />
                aligned with their financial goals.
              </h3>
              <Link
                to={`/about-us`}
                className="tf-btn style-1 bg-on-suface-container"
              >
                <span> About Us </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about-content-right">
              <div className="counter-item">
                <div className="counter">
                  <div className="number-counter mb--3">
                    <h2 className="number odometer color-primary mb-2">
                      <OdometerComponent max={tabData[activeTab].count} />
                    </h2>
                    <h2 className="plus color-primary">+</h2>
                  </div>
                  <p className="text text-btn-uppercase label">
                    YEARS OF EXPERTISE
                  </p>
                </div>
              </div>
              <div className="flat-animate-tab">
                <div className="wg-tab style-small">
                  <ul className="tab-product min-w-366" role="tablist">
                    <li className="nav-tab-item">
                      <h6>
                        <a
                          href="#"
                          className={activeTab === "research" ? "active" : ""}
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
                          className={
                            activeTab === "responsibility" ? "active" : ""
                          }
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
                          className={
                            activeTab === "reliability" ? "active" : ""
                          }
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
                <div className="tab-content">
                  <div>
                    <p className="text">{tabData[activeTab].content}</p>
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
