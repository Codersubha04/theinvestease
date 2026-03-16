import { Link } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";
import styles from "./refundPolicy.module.scss";

const metadata = {
  title: "Privacy Policy | InvestEase Research Data Protection",
  description:
    "Read the InvestEase Research Privacy Policy to understand how personal information is collected, used, stored, protected, and handled across our services.",
};

type PolicySection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

const sections: PolicySection[] = [
  {
    title: "Information Collected",
    paragraphs: ["InvestEase Research may collect the following information:"],
    bullets: [
      "Name, contact details (email address, phone number)",
      "Basic demographic and identification information",
      "Payment and transaction details",
      "Website usage data and communication records",
    ],
  },
  {
    title: "Use of Information",
    paragraphs: ["The information collected is used for:"],
    bullets: [
      "Providing research and analysis services",
      "Client onboarding and communication",
      "Regulatory compliance and record-keeping",
      "Improving website functionality and user experience",
    ],
  },
  {
    title: "Confidentiality of Client Information",
    paragraphs: [
      "Client data shall be kept strictly confidential and shall not be shared with any third party, except:",
    ],
    bullets: [
      "Where required by law or regulatory authorities (SEBI, stock exchanges, courts)",
      "With authorized service providers strictly for operational purposes",
    ],
  },
  {
    title: "Data Security",
    paragraphs: [
      "InvestEase Research implements reasonable security practices and procedures to safeguard personal and sensitive data against unauthorized access, misuse, loss, or alteration.",
    ],
  },
  {
    title: "Children's Information",
    paragraphs: [
      "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to monitor their online activity.",
      "InvestEase Research does not knowingly collect any personal identifiable information from children under the age of 13. If you believe such information has been provided on our website, please contact us and we will make reasonable efforts to remove it from our records.",
    ],
  },
  {
    title: "Cookies and Tracking Technologies",
    paragraphs: [
      "The website may use cookies to:",
      "Users may choose to disable cookies through their browser settings.",
    ],
    bullets: ["Analyze website traffic", "Improve user experience"],
  },
  {
    title: "Data Retention",
    paragraphs: [
      "Personal data shall be retained only for the period required to fulfill regulatory, legal, and business obligations, after which it shall be securely deleted or anonymized.",
    ],
  },
  {
    title: "User Rights",
    paragraphs: ["Users have the right to:"],
    bullets: [
      "Access their personal information",
      "Request correction of inaccurate data",
      "Request deletion of data, subject to regulatory requirements",
    ],
  },
  {
    title: "Third-Party Links",
    paragraphs: [
      "The website may contain links to third-party websites. InvestEase Research is not responsible for the privacy practices or content of such external websites.",
    ],
  },
  {
    title: "Changes to Privacy Policy",
    paragraphs: [
      "InvestEase Research reserves the right to modify this Privacy Policy at any time. Changes shall be updated on the website accordingly.",
    ],
  },
  {
    title: "Contact Information",
    paragraphs: [
      "For any questions or concerns regarding this Privacy Policy, users may contact InvestEase Research through the official communication channels mentioned on the website.",
    ],
  },
  {
    title: "Consent",
    paragraphs: [
      "By using our website or services or purchasing any of our products and services, you consent to our Privacy Policy and agree to be bound by our Terms and Conditions.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <section className={`tf-section ${styles.policySection}`}>
        <div className="tf-container">
          <div className={styles.headerBlock}>
            <h1>Privacy Policy</h1>
            <p>
              InvestEase Research is committed to protecting the privacy and
              confidentiality of its clients, users, and website visitors. This
              Privacy Policy outlines how personal information is collected,
              used, stored, and safeguarded.
            </p>
          </div>

          <ol className={styles.policyList}>
            {sections.map((section, index) => (
              <li
                className={styles.policyItem}
                style={{ animationDelay: `${80 + index * 70}ms` }}
                key={section.title}
              >
                <div className={styles.itemTop}>
                  <h4>{section.title}</h4>
                </div>

                {section.paragraphs.map((paragraph, paragraphIndex) => {
                  const isConsentParagraph =
                    section.title === "Consent" &&
                    paragraphIndex === section.paragraphs.length - 1;

                  if (isConsentParagraph) {
                    return (
                      <p key={paragraph}>
                        By using our website or services or purchasing any of our
                        products and services, you consent to our Privacy Policy
                        and agree to be bound by our{" "}
                        <Link
                          to="/terms-conditions"
                          style={{
                            color: "#142236",
                            fontWeight: 700,
                            textDecoration: "none",
                          }}
                        >
                          Terms and Conditions
                        </Link>
                        .
                      </p>
                    );
                  }

                  return <p key={paragraph}>{paragraph}</p>;
                })}

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
