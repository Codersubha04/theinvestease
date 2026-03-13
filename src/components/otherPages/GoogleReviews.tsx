import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Star } from "lucide-react";
import "./googleReviews.scss";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Arijit Sen",
    date: "February 19, 2026",
    text: "InvestEase gave me clear equity research with practical entry and risk guidance. Their communication is timely and very transparent.",
    initials: "AS",
  },
  {
    name: "Neha Roy",
    date: "February 12, 2026",
    text: "I really liked InvestEase's disciplined approach. The team explained market scenarios in simple language and helped me plan confidently.",
    initials: "NR",
  },
  {
    name: "Rahul Dey",
    date: "February 03, 2026",
    text: "InvestEase research notes are detailed, compliance-focused, and easy to act on. Support quality has been consistently professional.",
    initials: "RD",
  },
  {
    name: "Priyanka Das",
    date: "January 25, 2026",
    text: "My consultation with InvestEase was excellent. They focused on long-term wealth building and explained both upside and downside clearly.",
    initials: "PD",
  },
  {
    name: "Sourav Ghosh",
    date: "January 16, 2026",
    text: "InvestEase has a strong client-first mindset. Their market insights, follow-up, and risk management perspective are very reliable.",
    initials: "SG",
  },
];

function GoogleWordmark() {
  return (
    <span className="google-wordmark" aria-label="Google">
      <span className="c1">G</span>
      <span className="c2">o</span>
      <span className="c3">o</span>
      <span className="c1">g</span>
      <span className="c4">l</span>
      <span className="c2">e</span>
    </span>
  );
}

function FiveStars() {
  return (
    <span className="stars" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, idx) => (
        <Star key={idx} size={14} fill="currentColor" strokeWidth={1.8} />
      ))}
    </span>
  );
}

function GoogleGIcon() {
  return (
    <img
      src="https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png"
      alt="Google"
      className="google-g-icon-img"
      loading="lazy"
      referrerPolicy="no-referrer"
    />
  );
}

export default function GoogleReviews() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const headerTimeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          once: true,
        },
      });

      headerTimeline
        .from(".google-reviews-chip", { y: 16, autoAlpha: 0, duration: 0.4 })
        .from(".google-reviews-title", { y: 22, autoAlpha: 0, duration: 0.55 }, "-=0.2")
        .from(".google-reviews-subtitle", { y: 14, autoAlpha: 0, duration: 0.45 }, "-=0.25");

      gsap.from(".google-reviews-summary", {
        y: 18,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".google-reviews-summary",
          start: "top 90%",
          once: true,
        },
      });

      gsap.from(".google-review-card", {
        y: 24,
        autoAlpha: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".google-reviews-grid",
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
    <section ref={sectionRef} className="google-reviews-section">
      <div className="tf-container">
        <div className="google-reviews-header text-center">
          <span className="tag label text-btn-uppercase google-reviews-chip">
            Trusted by 100+ Traders
          </span>
          <h3 className="title-section mb-12 google-reviews-title">
            The Trust We've <span>Earned</span>
          </h3>
          <p className="google-reviews-subtitle">Google Reviews</p>
        </div>

        <div className="google-reviews-summary">
          <div className="rating-block">
            <div className="rating-title">
              <GoogleWordmark />
              <span className="text">Rating</span>
            </div>
            <div className="rating-meta">
              <strong>5.0</strong>
              <FiveStars />
              <span className="count">86 reviews</span>
            </div>
          </div>
          <a href="#" className="review-cta" aria-label="Write a review">
            Write a Review <ExternalLink size={16} />
          </a>
        </div>

        <div className="google-reviews-grid">
          {reviews.map((item) => (
            <article className="google-review-card" key={`${item.name}-${item.date}`}>
              <div className="review-top">
                <div className="avatar">{item.initials}</div>
                <div className="review-meta">
                  <h5>{item.name}</h5>
                  <FiveStars />
                  <span>{item.date}</span>
                </div>
              </div>
              <p className="review-text">{item.text}</p>
              <div className="posted-on">
                <GoogleGIcon />
                <div className="posted-copy">
                  <span className="posted-label">Posted on</span>
                  <span className="posted-brand">Google</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
