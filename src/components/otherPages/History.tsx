import { timelineItems } from "@/data/timeline";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./history.scss";

export default function History() {
  const [hoveredItems, setHoveredItems] = useState<number[]>([]);
  const [isResponsiveStack, setIsResponsiveStack] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1199.98px)");
    const applyLayout = (matches: boolean) => setIsResponsiveStack(matches);

    applyLayout(media.matches);

    const onChange = (event: MediaQueryListEvent) => applyLayout(event.matches);
    media.addEventListener("change", onChange);

    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <section className="section-history section-history-premium section-about bg-on-suface-container tf-spacing-2 hover-active-step">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center style-color-white mb-60">
              <div className="text-anime-wave-1">
                <a
                  href="#"
                  className="tag label text-btn-uppercase color-white history-chip"
                >
                  Our Journey
                </a>
              </div>
              <h3 className="title-section mb-12 text-anime-wave-1">
                Our Purpose &amp; <span>Principles</span>
              </h3>
              <div className="sub-title body-2 text-anime-wave-1">
                Explore the milestones that have shaped our growth and
                commitment to excellence.
              </div>
            </div>
            <div className="wg-time-line">
              <div className="sw-layout-1 swiper-time-line">
                {isResponsiveStack ? (
                  <div className="timeline-mobile-stack">
                    {timelineItems.map((item, index) => (
                      <div
                        className={`time-line-item step-hover d-flex ${
                          hoveredItems.includes(index) ? "active" : ""
                        }`}
                        key={index}
                        onMouseOver={() =>
                          setHoveredItems((pre) => [...pre, index])
                        }
                      >
                        <div className="time-line-content d-flex flex-column h-100">
                          <div className="heading">
                            {/* <div className="label">{item.year}</div> */}
                            <h5 className="title-content">{item.title}</h5>
                          </div>
                          <div className=" desc mt-3 overflow-hidden">{item.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <div className="tf-btn-arrow style-3 arrow-left nav-prev-layout-1 snbp8">
                      <i className="icon-arrow-left" />
                    </div>
                    <Swiper
                      breakpoints={{
                        0: { slidesPerView: 1 },
                        575: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1200: {
                          slidesPerView: 4,
                        },
                      }}
                      dir="ltr"
                      className="swiper sw-layout1"
                      modules={[Navigation]}
                      navigation={{
                        prevEl: ".snbp8",
                        nextEl: ".snbn8",
                      }}
                    >
                      {timelineItems.map((item, index) => (
                        <SwiperSlide className="swiper-slide d-flex" key={index}>
                          <div
                            className={`time-line-item step-hover h-100 d-flex  ${
                              hoveredItems.includes(index) ? "active" : ""
                            } `}
                            onMouseOver={() =>
                              setHoveredItems((pre) => [...pre, index])
                            }
                          >
                            <div className="time-line-content d-flex flex-column h-100">
                              <div className="heading">
                                {/* <div className="label">{item.year}</div> */}
                                <h5 className="title-content">{item.title}</h5>
                              </div>
                              <div className=" desc mt-3 overflow-hidden">{item.description}</div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="tf-btn-arrow style-3 arrow-right nav-next-layout-1 snbn8">
                      <i className="icon-arrow-right1" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
