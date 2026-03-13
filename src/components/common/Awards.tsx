import "./awards.scss";

const complianceLogos = [
  {
    name: "SEBI",
    src: "/image/section/awards-img-1.png",
    alt: "SEBI",
  },
  {
    name: "NISM",
    src: "/image/section/awards-img-2.png",
    alt: "NISM",
  },
  {
    name: "Trade License",
    src: "/image/section/awards-img-3.png",
    alt: "Trade License",
  },
  {
    name: "MSME",
    src: "/image/section/awards-img-4.png",
    alt: "MSME",
  },
];

export default function Awards({
  parentClass = "section-awards h-1 tf-spacing-3 section-one-page",
}) {
  return (
    <section className={`${parentClass} section-awards-premium`} id="awards">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <div className="text-anime-wave-1">
                <span className="tag label text-btn-uppercase awards-chip">
                  Certifications & Compliance
                </span>
              </div>
              <h3 className="title-section mb-12 text-anime-wave-1 awards-title">
                Awards &amp; <span> Recognition</span>
              </h3>
            </div>

            <div className="awards-list awards-grid">
              {complianceLogos.map((item, index) => (
                <article
                  className="image-awards awards-card wow fadeInUp"
                  data-wow-delay={`${index * 0.1}s`}
                  key={item.name}
                >
                  <div className="awards-logo-wrap">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="lazyload"
                      width={150}
                      height={95}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
