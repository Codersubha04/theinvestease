import { Link } from "react-router-dom";
const slides = [
  {
    title: "Invest with Ease.<br />Grow with Confidence.",
    subtitle:
      "SEBI-registered equity research simplifying long-term investing for Indian investors.",
    buttonText: "Get Started",
  },
  {
    title: "Make Investing Effortless",
    subtitle:
      "InvestEase removes complexity from equity investing with clear research and structured strategies.",
    buttonText: "Get Started",
  },
  {
    title: "Where Investing Feels<br>Simple Not Stressful",
    subtitle:
      "SEBI-registered equity research helping investors make informed decisions without tips, noise, or false promises.",
    buttonText: "Get Started",
  },
];

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { sanitizeHTML } from "@/utils/sanitize";
export default function Hero() {
  return (
    <div className="page-title-home img-1 style-absolute">
      <Swiper
        dir="ltr"
        className="swiper sw-auto style-absolute"
        modules={[EffectFade, Autoplay, Navigation]}
        autoplay={{
          delay: 2000,
        }}
        speed={1000}
        effect="fade"
        navigation={{
          prevEl: ".snbp3",
          nextEl: ".snbn3",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <div className={`page-title-inner img-h1-${index + 1}`}>
              <div className="tf-container">
                <div className="row">
                  <div className="col-12">
                    <div className="page-title-content">
                      <h1
                        className="tf-fade-top fade-item-1"
                        dangerouslySetInnerHTML={{
                          __html: sanitizeHTML(slide.title),
                        }}
                      />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: sanitizeHTML(slide.subtitle),
                        }}
                        className="sub-title body-2 tf-fade-top fade-item-2"
                      ></div>
                      <Link
                        to="/our-services-1"
                        className="tf-btn style-1 bg-white tf-fade-top fade-item-3"
                      >
                        <span>{slide.buttonText}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div
          role="button"
          className="tf-btn-arrow arrow-left sw-auto-next snbp3"
        >
          <i className="icon-arrow-left" />
        </div>
        <div
          role="button"
          className="tf-btn-arrow arrow-right sw-auto-prev snbn3"
        >
          <i className="icon-arrow-right1" />
        </div>
      </Swiper>
    </div>
  );
}
