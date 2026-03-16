import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";
import styles from "./comingSoon.module.scss";

const metadata = {
  title: "Coming Soon | InvestEase Research",
  description:
    "This page is being prepared by InvestEase Research and will be available soon. Explore other sections or contact us for assistance.",
};

const launchDate = new Date("2026-04-30T00:00:00+05:30").getTime();

function getTimeLeft() {
  const difference = Math.max(launchDate - Date.now(), 0);

  return {
    days: String(Math.floor(difference / 86400000)).padStart(2, "0"),
    hours: String(Math.floor((difference % 86400000) / 3600000)).padStart(2, "0"),
    minutes: String(Math.floor((difference % 3600000) / 60000)).padStart(2, "0"),
    seconds: String(Math.floor((difference % 60000) / 1000)).padStart(2, "0"),
  };
}

export default function CommingSoonPage() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <MetaComponent meta={metadata} />

      <main className={styles.pageShell}>
        <div className={styles.starsLayer} aria-hidden="true" />
        <div className={styles.starsLayerSoft} aria-hidden="true" />
        <div className={styles.orbGlowTop} aria-hidden="true" />
        <div className={styles.orbGlowBottom} aria-hidden="true" />

        <section className={`tf-section ${styles.comingSoonSection}`}>
          <div className="tf-container">
            <div className={styles.page}>
              <div className={styles.eyebrow}>InvestEase Research</div>
              <h1 className={styles.title}>
                We Launch
                <br />
                Soon
              </h1>
              <div className={styles.divider} />
              <p className={styles.copy}>
                A sharper InvestEase experience is on the way. We are preparing
                this section with the same research-first clarity, premium
                design, and disciplined structure used across the platform.
              </p>

              <div className={styles.countdown} aria-label="Countdown timer">
                <div className={styles.unit}>
                  <span className={styles.num}>{timeLeft.days}</span>
                  <span className={styles.label}>Days</span>
                </div>
                <span className={styles.sep}>:</span>
                <div className={styles.unit}>
                  <span className={styles.num}>{timeLeft.hours}</span>
                  <span className={styles.label}>Hours</span>
                </div>
                <span className={styles.sep}>:</span>
                <div className={styles.unit}>
                  <span className={styles.num}>{timeLeft.minutes}</span>
                  <span className={styles.label}>Mins</span>
                </div>
                <span className={styles.sep}>:</span>
                <div className={styles.unit}>
                  <span className={styles.num}>{timeLeft.seconds}</span>
                  <span className={styles.label}>Secs</span>
                </div>
              </div>

              <div className={styles.actions}>
                <Link to="/" className={styles.primaryAction}>
                  <span>Back To Home</span>
                  <ArrowRight className={styles.actionIcon} size={17} strokeWidth={2.1} />
                </Link>

                <Link to="/contact-us" className={styles.secondaryAction}>
                  <span>Contact Us</span>
                  <ArrowRight className={styles.actionIcon} size={17} strokeWidth={2.1} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
