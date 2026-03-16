import MetaComponent from "@/components/common/MetaComponent";
import styles from "./refundPolicy.module.scss";

const metadata = {
  title: "Disclaimer | InvestEase Research Market Information Notice",
  description:
    "Read the InvestEase Research disclaimer for important information on market risk, research limitations, non-guaranteed outcomes, and investor responsibility.",
};

const sections = [
  {
    title: "Research Analyst Registration",
    paragraphs: [
      "The proprietor of InvestEase Research is a SEBI-registered Research Analyst, Ankita Mukherjee. Registration No: INH000020721.",
    ],
  },
  {
    title: "Purpose of Information",
    paragraphs: [
      "The information provided on this website is intended solely for educational and informational purposes and should not be construed as an offer, solicitation, or recommendation to buy, sell, or hold any securities or financial instruments, unless specifically stated as research advice under the Research Analyst Regulations.",
    ],
  },
  {
    title: "Source and Reliability",
    paragraphs: [
      "All research reports, stock views, market insights, and recommendations issued by InvestEase Research are based on publicly available information, analysis of historical data, and other sources believed to be reliable. However, InvestEase Research does not guarantee the accuracy, completeness, or reliability of such information.",
    ],
  },
  {
    title: "Market Risk",
    paragraphs: [
      "Investments in securities markets are subject to market risks. Past performance is not indicative of future results. The value of investments may fluctuate, and investors may not realize the full amount invested.",
    ],
  },
  {
    title: "No Assurance of Returns",
    paragraphs: [
      "InvestEase Research does not provide any assurance or guarantee of returns, accuracy, or profit. Clients and users are advised to exercise independent judgment and seek professional advice before making any investment decisions.",
    ],
  },
  {
    title: "Educational Programs",
    paragraphs: [
      "The training, webinars, workshops, and educational content provided by InvestEase Research are purely educational in nature and do not constitute investment advice, research recommendations, or personalized advisory services.",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "InvestEase Research, its proprietor, employees, associates, or affiliates shall not be liable for any direct, indirect, incidental, consequential, or other losses arising from the use of information, research, or educational content available on this website.",
    ],
  },
  {
    title: "Investor Safety",
    paragraphs: [
      "Do not share your DEMAT account details like user ID and password with any person, as it may lead to financial fraud.",
      "Be cautious of scammers using our name on social media platforms such as Instagram, WhatsApp, Telegram, and Facebook.",
    ],
  },
  {
    title: "Acceptance of Disclaimer",
    paragraphs: [
      "By accessing and using this website, the user acknowledges and agrees to this disclaimer in full.",
    ],
  },
];

export default function Disclaimer() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <section className={`tf-section ${styles.policySection}`}>
        <div className="tf-container">
          <div className={styles.headerBlock}>
            <h1>Disclaimer</h1>
            <p>
              Important information on market risk, research limitations, and
              investor responsibility while using InvestEase Research content,
              reports, and educational material.
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

                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
