import { Link } from "react-router-dom";

export default function Features() {
  return (
    <section className="section-why-choose h-4 tf-spacing-2">
      <div className="tf-container position-relative">
        <div className="row rg-60 align-items-center">
          <div className="col-lg-6">
            <div className="section-content">
              <div className="heading-section">
                <div className="text-anime-wave">
                  <a href="#" className="tag label text-btn-uppercase">
                    Why Choose us?
                  </a>
                </div>
                <h3 className="text-anime-wave mb-12">
                 Why Choose InvestEase <br />
                  
                </h3>
                {/* <div className="sub-title body-2 text-anime-wave">
                  We offer unparalleled expertise and tailored solutions to
                  navigate your digital journey. Our team combines deep industry
                  knowledge with cutting-edge technology to drive transformative
                  results. Partner with us to experience innovation, efficiency,
                  and sustainable growth.
                </div> */}
              </div>
              <div className="benefit-lists">
                <div className="benefit-items text-anime-wave">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    SEBI Registered Company - INH000020721
                  </div>
                </div>
                <div className="benefit-items text-anime-wave">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    Client Centric Point of View
                  </div>
                </div>
                <div className="benefit-items text-anime-wave">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    High Accuracy up to – 90%
                  </div>
                </div>
                <div className="benefit-items text-anime-wave">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    Proven Research Methodology
                  </div>
                </div>
                <div className="benefit-items text-anime-wave">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    100% Genuine Customer Support
                  </div>
                </div>
                <div className="benefit-items text-anime-wave">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    7+ Years Experience in Market
                  </div>
                </div>
                <div className="benefit-items text-anime-wave">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    Free Consultation by Our Experts
                  </div>
                </div>
                <div className="benefit-items text-anime-wave">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    Dedicated Relationship Manager
                  </div>
                </div>
              </div>
              <div className="text-anime-wave">
                <Link
                  to={`/contact-us`}
                  className="tf-btn style-1 bg-on-suface-container"
                >
                  <span> Schedule A Consultation</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image tf-animate-4">
              <img
                src="/image/section/img-section-why-choose-h2.jpg"
                alt=""
                className="lazyload"
                width={615}
                height={615}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
