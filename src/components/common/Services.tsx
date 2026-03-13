import { Send } from "lucide-react";

import { servicesData } from "@/data/services";

export default function Services() {
  const serviceTitles = [
    "Stock Basket",
    "Active Swing Trading Advisory",
    "InvestEase School",
  ];

  const serviceItems = servicesData.slice(0, 3).map((item, index) => ({
    ...item,
    title: serviceTitles[index] ?? item.title,
  }));

  return (
    <section
      className="section-services h-1 tf-spacing-31 bg-surface section-one-page home1-services-premium"
      id="services"
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section style-2">
              <div className="left">
                <div className="text-anime-wave">
                  <span className="tag label text-btn-uppercase bg-white services-chip">
                    Our Services
                  </span>
                </div>
                <h3 className="title-section text-anime-wave services-title">
                  Research-Led Services For <span>Smarter Decisions</span>
                </h3>
              </div>
              <div className="text-anime-wave-2">
                <span className="services-view-btn">
                  <span>View All Services</span>
                  <Send size={18} className="btn-icon" />
                </span>
              </div>
            </div>

            <div className="section-services-content services-shell">
              <div className="flat-animate-tab">
                <div className="wg-tab services-tabs">
                  <ul className="tab-product min-w-757" role="tablist">
                    {serviceItems.map(({ id, title, isActive }) => (
                      <li className="nav-tab-item" role="presentation" key={id}>
                        <h5>
                          <a
                            href={`#${id}`}
                            data-bs-toggle="tab"
                            role="tab"
                            className={`services-tab-link ${isActive ? "active" : ""}`}
                          >
                            {title}
                          </a>
                        </h5>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="tab-content">
                  {serviceItems.map(
                    ({
                      id,
                      imgSrc,
                      imgWidth,
                      imgHeight,
                      title,
                      description,
                      benefits,
                      linkText,
                      isActive,
                    }) => (
                      <div
                        key={id}
                        className={`tab-pane${isActive ? " active show" : ""}`}
                        id={id}
                        role="tabpanel"
                      >
                        <div className="section-services-item">
                          <div className="image tf-animate-1">
                            <span className="link" aria-hidden="true" />
                            <img
                              src={imgSrc}
                              alt={title}
                              className="lazyload"
                              width={imgWidth}
                              height={imgHeight}
                            />
                          </div>
                          <div className="services-content">
                            <div className="heading">
                              <h3>
                                <span className="name-services wow fadeInUp">
                                  {title}
                                </span>
                              </h3>
                              <div className="sub-name body-2 wow fadeInUp">
                                {description}
                              </div>
                            </div>
                            <div className="benefit-lists">
                              {benefits.map((benefit, i) => (
                                <div className="benefit-items" key={i}>
                                  <div className="icon wow fadeInUp">
                                    <i className="icon-checkbox" />
                                  </div>
                                  <div
                                    className="title wow fadeInUp"
                                    data-wow-delay=".1s"
                                  >
                                    {benefit}
                                  </div>
                                </div>
                              ))}
                            </div>
                            <span className="service-cta-btn wow fadeInUp">
                              <span>{linkText}</span>
                              <Send size={18} className="btn-icon" />
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
