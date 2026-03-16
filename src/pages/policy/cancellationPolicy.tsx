import styles from "./cancellationPolicy.module.scss";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Cancellation Policy | InvestEase Research Service Terms",
  description:
    "Read the InvestEase Research Cancellation Policy to understand how research service discontinuation, billing treatment, and subscription cancellations are handled.",
};

export default function CancellationPolicy() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <section className={`tf-section ${styles.policySection}`}>
        <div className="tf-container">
          <div className={styles.headerBlock}>
            <h1>Cancellation Policy</h1>
            <p>
              This Cancellation Policy outlines the terms under which a client
              may discontinue research services offered by InvestEase Research.
            </p>
          </div>

          <ol className={styles.policyList}>
            <li className={styles.policyItem} style={{ animationDelay: "80ms" }}>
              <div className={styles.itemTop}>
                <h4>Service Cancellation by Client</h4>
              </div>
              <p>
                Clients may request cancellation of their subscribed research
                service at any time by submitting a written request through the
                official communication channels of InvestEase Research. Your
                subscription is personal to you, and you should not transfer or
                share your subscription with any other person.
              </p>
            </li>

            <li className={styles.policyItem} style={{ animationDelay: "150ms" }}>
              <div className={styles.itemTop}>
                <h4>Effect of Cancellation</h4>
              </div>
              <p>Upon cancellation:</p>
              <ul className={styles.subList}>
                {[
                  "Access to research reports, updates, and recommendations shall cease immediately or at the end of the current subscription period",
                  "No refund shall be provided for any unused or remaining subscription period",
                ].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </li>

            <li className={styles.policyItem} style={{ animationDelay: "220ms" }}>
              <div className={styles.itemTop}>
                <h4>Non-Refundable Fees</h4>
              </div>
              <p>
                All fees paid for research services are non-refundable upon
                cancellation, irrespective of the reason for such cancellation.
              </p>
            </li>

            <li className={styles.policyItem} style={{ animationDelay: "290ms" }}>
              <div className={styles.itemTop}>
                <h4>Cancellation of Training Programs</h4>
              </div>
              <p>
                Enrollment in training, workshops, webinars, or educational
                programs is non-cancellable once confirmed, and the fees paid
                for such programs are non-refundable.
              </p>
            </li>

            <li className={styles.policyItem} style={{ animationDelay: "360ms" }}>
              <div className={styles.itemTop}>
                <h4>Cancellation by InvestEase Research</h4>
              </div>
              <p>
                InvestEase Research reserves the right to cancel or suspend
                services if:
              </p>
              <ul className={styles.subList}>
                {[
                  "The client violates applicable laws or SEBI regulations",
                  "The client misuses research material",
                  "The client engages in misconduct or unethical behavior",
                ].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p>In such cases, no refund shall be applicable.</p>
            </li>

            <li className={styles.policyItem} style={{ animationDelay: "430ms" }}>
              <div className={styles.itemTop}>
                <h4>Regulatory Compliance</h4>
              </div>
              <p>
                All cancellations shall be handled in compliance with SEBI
                (Research Analyst) Regulations, 2014 and related guidelines.
              </p>
            </li>

            <li className={styles.policyItem} style={{ animationDelay: "500ms" }}>
              <div className={styles.itemTop}>
                <h4>Policy Updates</h4>
              </div>
              <p>
                We may update this cancellation policy from time to time. Any
                changes to this policy will be reflected on our website. We
                encourage you to review this policy periodically to stay
                informed about our refund procedures.
              </p>
            </li>

            <li className={styles.policyItem} style={{ animationDelay: "570ms" }}>
              <div className={styles.itemTop}>
                <h4>Agreement</h4>
              </div>
              <p>
                By availing any service from InvestEase Research, the client
                confirms acceptance of this Cancellation Policy. We believe that
                you have read and agreed to the conditions mentioned in the
                agreement of InvestEase Research RA services.
              </p>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
