import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./whyChooseUs.scss";
import {
  ShieldCheck,
  Target,
  Headphones,
  Users,
  BarChart3,
  Award,
  Briefcase,
  HeartHandshake,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const headerTimeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      headerTimeline
        .from(".why-chip", { y: 16, autoAlpha: 0, duration: 0.4 })
        .from(".why-title", { y: 24, autoAlpha: 0, duration: 0.6 }, "-=0.2");

      gsap.from(".why-card", {
        y: 26,
        autoAlpha: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".why-grid",
          start: "top 86%",
          once: true,
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const features = [
    {
      icon: <ShieldCheck size={30} />,
      text: "SEBI Registered Company - INH000020721",
    },
    {
      icon: <Target size={30} />,
      text: "High Accuracy up to 90%",
    },
    {
      icon: <Headphones size={30} />,
      text: "100% Genuine Customer Support",
    },
    {
      icon: <Users size={30} />,
      text: "Free Consultation by Our Experts",
    },
    {
      icon: <BarChart3 size={30} />,
      text: "Client-Centric Market Approach",
    },
    {
      icon: <Award size={30} />,
      text: "Proven Research Methodology",
    },
    {
      icon: <Briefcase size={30} />,
      text: "7+ Years Combined Market Experience",
    },
    {
      icon: <HeartHandshake size={30} />,
      text: "Dedicated Relationship Manager",
    },
  ];

  return (
    <section ref={sectionRef} className="why-section why-section-premium">
      <div className="container">
        <div className="why-header">
          <span className="why-chip">Why Choose InvestEase</span>
          <h2 className="why-title">
            Why InvestEase Is The <span>Best Choice</span>
          </h2>
        </div>

        <div className="row g-4 why-grid">
          {features.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <article className="why-card">
                <div className="icon-box">{item.icon}</div>
                <p>{item.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
