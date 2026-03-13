import "./blogs.scss";

import { posts } from "@/data/blogs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function Blogs() {
  return (
    <section
      className="section-new h-1 tf-spacing-12 section-one-page blogs-premium"
      id="new"
    >
      <div className="tf-container">
        <div className="col-12">
          <div className="heading-section text-center">
            <div className="text-anime-wave-1 wow fadeInUp">
              <span className="tag label text-btn-uppercase blogs-chip">
                READ OUR BLOG
              </span>
            </div>
            <h3 className="title-section text-anime-wave-1 mb-12 blogs-title wow fadeInUp" data-wow-delay=".05s">
              Insights &amp; <span>Ideas</span>
            </h3>
            <div className="sub-title body-2 text-anime-wave-1"></div>
          </div>
        </div>
      </div>
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <Swiper
              dir="ltr"
              className="swiper sw-new sw-layout"
              speed={700}
              loop={posts.length > 1}
              grabCursor
              autoplay={{
                delay: 3200,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
              modules={[Pagination, Autoplay]}
              pagination={{
                clickable: true,
                el: ".spe1",
              }}
            >
              {posts.map((post, index) => (
                <SwiperSlide key={index}>
                  <div className="blog-card-new wow fadeInUp" data-wow-delay={`${index * 0.08}s`}>
                    {/* Image */}
                    <span className="blog-img-wrap">
                      <img src={post.imgSrc} alt="" />
                    </span>

                    {/* Content */}
                    <div className="blog-card-content">
                      <div className="blog-date-pill">
                        {post.date.month} {post.date.day}, {post.date.year}
                      </div>

                      <h4 className="blog-title-new">
                        <span>{post.title}</span>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="sw-pagination-layout flex justify-content-center spe1"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
