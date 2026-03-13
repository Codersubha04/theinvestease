import { Link } from "react-router-dom";

import { caseStudies } from "@/data/caseStudies";
import "./caseStudies.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function CaseStudies() {
  return (
    <section
      className="section-project h-2 bg-surface tf-spacing-8 section-one-page case-studies-premium"
      id="project"
    >
      <div className="tf-container position-relative">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <div className="text-anime-wave-1">
                <span className="tag label text-btn-uppercase bg-white case-chip">
                  InvestEase Results
                </span>
              </div>
              <h3 className="title-section text-anime-wave-1 mb-12">
                Research-Backed Success Stories
              </h3>
              <div className="sub-title body-2 text-anime-wave-1">
                Real outcomes from disciplined equity research, investor
                education, and long-term market strategy.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <Swiper
          dir="ltr"
          className="sw-project-list swiper sw-layout"
          breakpoints={{
            0: { slidesPerView: 1 },
            575: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={10}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spe3",
          }}
        >
          {caseStudies.map((item, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div className="case-studies-item style-bg-content hover-img style-2-content case-premium-card">
                <div className="image">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="lazyload"
                    width={473}
                    height={630}
                  />
                  <Link to="/case-studies-details" className="link" />
                </div>
                <Link to="/case-studies-details" className="btn-arrow-item">
                  <i className="icon-arrowRight" />
                </Link>
                <div className="case-studies-content">
                  <h5>
                    <Link to="/case-studies-details" className="name">
                      {item.title}
                    </Link>
                  </h5>
                  <div className="text text-btn-uppercase label">
                    {item.label}
                  </div>
                  <div className="desc">{item.description}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="sw-pagination-layout flex justify-content-center spe3"></div>
        </Swiper>
      </div>
    </section>
  );
}
