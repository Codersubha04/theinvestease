import { projects } from "@/data/caseStudies";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./caseStudies.scss";

export default function CaseStudies() {
  const projectRefs = useRef([]);
  const imageRefs = useRef([]);

  projectRefs.current = [];
  imageRefs.current = [];

  const addToProjectRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  const addToImageRefs = (el) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  const setActiveByIndex = (index: number) => {
    projectRefs.current.forEach((el) => el.classList.remove("active"));
    imageRefs.current.forEach((el) => el.classList.remove("active"));

    projectRefs.current[index]?.classList.add("active");
    imageRefs.current[index]?.classList.add("active");
  };

  useEffect(() => {
    const handleInteraction = (index) => () => {
      setActiveByIndex(index);
    };

    projectRefs.current.forEach((item, index) => {
      const handler = handleInteraction(index);

      item.addEventListener("mouseenter", handler);
      item.addEventListener("click", handler);

      item._handler = handler;
    });

    return () => {
      projectRefs.current.forEach((item) => {
        item.removeEventListener("mouseenter", item._handler);
        item.removeEventListener("click", item._handler);
      });
    };
  }, []);

  return (
    <section
      className="section-project h-1 bg-on-suface-container section-one-page home1-case-premium"
      id="project"
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section style-color-white text-center">
              <div className="text-anime-wave-1">
                <span className="tag label text-btn-uppercase color-white case-chip">
                  InvestEase Results
                </span>
              </div>
              <h3 className="title-section text-anime-wave-1 mb-12">
                Research-Backed <span>Success Stories</span>
              </h3>
              <div className="sub-title body-2 text-anime-wave-1">
                Practical outcomes shaped by disciplined research and long-term
                investing frameworks.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-project-inner">
        <div className="list-case">
          <Swiper
            className="sw-case-studies swiper sw-layout"
            modules={[Autoplay]}
            autoplay={{
              delay: 3200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={projects.length > 1}
            onSwiper={(swiper) => {
              setActiveByIndex(swiper.realIndex ?? 0);
            }}
            onSlideChange={(swiper) => {
              setActiveByIndex(swiper.realIndex ?? 0);
            }}
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
          >
            {projects.map((project, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div
                  className={`project-item case-premium-card${project.active ? " active" : ""}`}
                  ref={addToProjectRefs}
                >
                  <span className="link" aria-hidden="true" />
                  <div className="project-content">
                    <h5>
                      <span className="name">{project.title}</span>
                    </h5>
                    <div className="text text-btn-uppercase label">
                      {project.label}
                    </div>
                    <div className="desc">{project.description}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="list-image-project">
          {projects.map((project, index) => (
            <div
              className={`image-project ${project.active ? "active" : ""}`}
              key={index}
              ref={addToImageRefs}
            >
              <img
                src={project.imgSrc}
                alt={project.title}
                className="lazyload"
                width={1920}
                height={634}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
