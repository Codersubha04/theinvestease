import MetaComponent from "@/components/common/MetaComponent";
import styles from "./refundPolicy.module.scss";

const metadata = {
  title: "Refund Policy | InvestEase Research Fee & Service Terms",
  description:
    "Review the InvestEase Research Refund Policy for research service fees, refund eligibility, and important terms related to paid subscriptions and onboarding.",
};

const refundSections = [
  {
    title: "Fees for Research Services",
    content: [
      "All fees paid towards subscription-based research services, including long-term investment research and swing trading research, are charged in advance and are clearly communicated to the client prior to onboarding.",
    ],
  },
  {
    title: "No Guarantee of Refund",
    content: [
      "Once a client has subscribed to any research service and payment has been made, fees shall not be refundable, either in full or in part, under any circumstances, including but not limited to:",
    ],
    bullets: [
      "Change in market conditions",
      "Non-performance of securities",
      "Client's decision to discontinue the service",
      "Dissatisfaction with market outcomes",
    ],
  },
  {
    title: "No Free Trials",
    content: [
      "We do not provide free trials in general, and all services are strictly paid services.",
    ],
  },
  {
    title: "Regulatory Compliance",
    content: [
      "Refunds, if any, shall be governed by SEBI guidelines applicable from time to time. In the absence of any regulatory mandate requiring refund, fees paid shall be treated as non-refundable.",
    ],
  },
  {
    title: "Exceptions",
    content: [
      "Any exception to this policy shall be at the sole discretion of InvestEase Research and shall be evaluated on a case-by-case basis. Such exceptions, if granted, do not create a precedent.",
    ],
  },
  {
    title: "Mode of Refund (If Applicable)",
    content: [
      "If a refund is approved, the amount shall be credited through the original mode of payment within a reasonable period, subject to applicable deductions and compliance requirements.",
    ],
  },
  {
    title: "Training & Educational Programs",
    content: [
      "Fees paid for training, webinars, workshops, or educational programs are strictly non-refundable once enrollment is confirmed.",
    ],
  },
  {
    title: "Agreement to Policy",
    content: [
      "By subscribing to any service offered by InvestEase Research, the client acknowledges that they have read, understood, and agreed to this Refund Policy. If you do not agree with these terms, please refrain from using our services.",
    ],
  },
];

export default function RefundPolicy() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <section className={`tf-section ${styles.policySection}`}>
        <div className="tf-container">
          <div className={styles.headerBlock}>
            <h1>Refund Policy</h1>
            <p>
              This Refund Policy governs the refund of fees paid by clients for
              research and analysis services provided by InvestEase Research.
            </p>
          </div>

          <ol className={styles.policyList}>
            {refundSections.map((section, index) => (
              <li
                className={styles.policyItem}
                style={{ animationDelay: `${80 + index * 70}ms` }}
                key={section.title}
              >
                <div className={styles.itemTop}>
                  <h4>{section.title}</h4>
                </div>

                {section.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {section.bullets?.length ? (
                  <ul className={styles.subList}>
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
