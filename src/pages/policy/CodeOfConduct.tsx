import MetaComponent from "@/components/common/MetaComponent";
import styles from "./refundPolicy.module.scss";

const metadata = {
  title: "Code of Conduct of RA | InvestEase Research Compliance",
  description:
    "Review the InvestEase Research Analyst Code of Conduct covering ethical research practices, fair communication, regulatory compliance, and investor-focused standards.",
};

const sections = [
  {
    title: "Honesty and Good Faith",
    content:
      "Research analyst or research entity shall act honestly and in good faith.",
  },
  {
    title: "Diligence",
    content:
      "Research analyst or research entity shall act with due skill, care and diligence and shall ensure that the research report is prepared after thorough analysis.",
  },
  {
    title: "Conflict of Interest",
    content:
      "Research analyst or research entity shall effectively address conflict of interest which may affect the impartiality of its research analysis and research report and shall make appropriate disclosures to address the same.",
  },
  {
    title: "Insider Trading or front running",
    content:
      "Research analyst or research entity or its employees shall not engage in insider trading or front running or front running of its own research report.",
  },
  {
    title: "Confidentiality",
    content:
      "Research analyst or research entity or its employees shall maintain confidentiality of the report till the report is made public.",
  },
  {
    title: "Professional Standard",
    content:
      "Research analyst or research entity or its employees engaged in research analysis shall observe high professional standards while preparing research reports.",
  },
  {
    title: "Compliance",
    content:
      "Research analyst or research entity shall comply with all regulatory requirements applicable to the conduct of its business activities.",
  },
  {
    title: "Responsibility of senior management",
    content:
      "The senior management of a research analyst or research entity shall bear primary responsibility for ensuring the maintenance of appropriate standards of conduct and adherence to proper procedures.",
  },
];

export default function CodeOfConduct() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <section className={`tf-section ${styles.policySection}`}>
        <div className="tf-container">
          <div className={styles.headerBlock}>
            <h1>Code of Conduct</h1>
            <p>
              Ethical and professional standards applicable to InvestEase
              Research in accordance with SEBI Research Analyst Regulations.
            </p>
          </div>

          <ol className={styles.policyList}>
            <li className={styles.policyItem} style={{ animationDelay: "80ms" }}>
              <p>
                The prop. of InvestEase Research is a SEBI Registered Research
                Analyst, <b>Ankita Mukherjee. Registration No : INH000020721,</b>{" "}
                valid from June 6, 2025.
              </p>

              <p>
                In accordance with Regulation 24 (2) of the SEBI (Research
                Analyst) Regulations, 2014, the company shall adhere to the
                following Code of Conduct:
              </p>
            </li>

            {sections.map((section, index) => (
              <li
                className={styles.policyItem}
                style={{ animationDelay: `${150 + index * 70}ms` }}
                key={section.title}
              >
                <div className={styles.itemTop}>
                  <h4>{section.title}</h4>
                </div>
                <p>{section.content}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
