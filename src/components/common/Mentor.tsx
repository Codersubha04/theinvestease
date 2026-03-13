import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./mentor.scss";

gsap.registerPlugin(ScrollTrigger);

const mentors = [
  {
    name: "Ankita Mukherjee",
    role: "Founder & SEBI-Registered Research Analyst",
    exp: "7+ Years of Experience in stock market",
    img: "/images/team1.jpg",
  },
  {
    name: "Indranil Mukherjee",
    role: "Strategy & Market Specialist | Senior Research Analyst | CS Finalist, CFA IFP certified, and NISM-Certified Research Analyst.",
    exp: "10+ Years of Experience in stock market",
    img: "/images/team2.jpg",
  },
  {
    name: "Krisnendu Das",
    role: "Technical Analyst",
    exp: "3+ Years of Experience in stock market",
    img: "/images/team3.jpg",
  },
];

export default function Mentor() {
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
        .from(".mentor-badge", { y: 16, autoAlpha: 0, duration: 0.4 })
        .from(
          ".mentor-title",
          { y: 24, autoAlpha: 0, duration: 0.6 },
          "-=0.2",
        )
        .from(
          ".mentor-subtitle",
          { y: 18, autoAlpha: 0, duration: 0.55 },
          "-=0.3",
        );

      gsap.from(".mentor-card", {
        y: 32,
        autoAlpha: 0,
        duration: 0.55,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".mentor-grid",
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="mentor-section mentor-section-premium">
      <div className="container">
        <div className="mentor-header">
          <span className="mentor-badge">Our Mentors</span>
          <h2 className="mentor-title">
            Meet Our <span>Professional Team</span>
          </h2>
          <p className="mentor-subtitle">
            Our teachers and mentors are our biggest strengths. They are
            relentlessly working to provide the best financial guidance and
            strategic market insights.
          </p>
        </div>

        <div className="row g-4 g-xl-5 mentor-grid">
          {mentors.map((item, index) => (
            <div className="col-lg-4 col-12" key={index}>
              <article className="mentor-card">
                <div className="mentor-image">
                  <img src={item.img} alt={item.name} />
                </div>

                <div className="mentor-content">
                  <h4 className="mentor-name">{item.name}</h4>
                  <p className="mentor-role">{item.role}</p>
                  <span className="mentor-exp">{item.exp}</span>
                </div>

                <div className="dot-pattern"></div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
