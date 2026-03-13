import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send } from "lucide-react";
import "./about.scss";

import OdometerComponent from "./OdometerComponent";
import { counters } from "@/data/cta";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [aboutImageSrc, setAboutImageSrc] = useState(
    "/image/page-title/page-title-home-2.jpeg",
  );

  useEffect(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const introTimeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      introTimeline
        .from(".about-chip", {
          y: 18,
          autoAlpha: 0,
          duration: 0.45,
        })
        .from(
          ".about-title",
          {
            y: 28,
            autoAlpha: 0,
            duration: 0.65,
          },
          "-=0.2"
        )
        .from(
          ".about-description",
          {
            y: 22,
            autoAlpha: 0,
            duration: 0.65,
          },
          "-=0.3"
        )
        .from(
          ".about-cta-btn",
          {
            y: 14,
            autoAlpha: 0,
            duration: 0.45,
            immediateRender: false,
          },
          "-=0.25"
        );

      gsap.from(".about-media-card", {
        y: 34,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-media-card",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".about-stat-item", {
        y: 18,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-stats-grid",
          start: "top 88%",
          once: true,
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-about section-about-premium py-5"
      id="about"
    >
      <div className="container py-5">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-6 pe-lg-4">
            <span className="about-chip">WE ARE INVESTEASE</span>

            <h2 className="about-title">
              Welcome to <span>InvestEase Research</span>
            </h2>

            <p className="about-description">
              InvestEase Research is a SEBI-registered Research Analyst firm
              (SEBI Registration No.: INH000020721) and is duly enlisted with
              BSE Limited as a Research Analyst (BSE Enlistment No.: 6568). We
              are committed to delivering independent, data-driven equity
              research and long-term investment insights built on rigorous
              fundamental analysis, structured market research, and economic
              evaluation. Our research framework follows ethical, transparent,
              and compliance-focused practices, ensuring that every insight is
              supported by clear rationale and disciplined methodology. At
              InvestEase Research, we aim to simplify complex market
              information and support investors in making informed,
              responsible, and well-considered investment decisions with a
              long-term perspective, clarity, and confidence.
            </p>

            <Link
              to="/contact-us"
              className="about-cta-btn"
              aria-label="Contact InvestEase"
            >
              <span>Contact Us</span>
              <Send size={18} className="btn-icon" />
            </Link>
          </div>

          <div className="col-lg-6">
            <div className="about-media-card">
              <img
                src={aboutImageSrc}
                alt="InvestEase Research"
                className="about-image"
                loading="eager"
                decoding="async"
                onError={() => setAboutImageSrc("/image/page-title/page-title-home-2.png")}
              />

              <div className="about-stats-grid">
                {counters.map((counter, index) => (
                  <div className="about-stat-item" key={index}>
                    <h4 className="about-stat-value mb-0">
                      <OdometerComponent max={counter.value} />+
                    </h4>
                    <small className="about-stat-label">{counter.label}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
