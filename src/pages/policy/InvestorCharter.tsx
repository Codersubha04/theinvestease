import MetaComponent from "@/components/common/MetaComponent";
import styles from "./refundPolicy.module.scss";

const metadata = {
  title: "Investor Charter | InvestEase Research Investor Rights",
  description:
    "Read the InvestEase Research Investor Charter outlining investor rights, research service commitments, grievance access, and transparency responsibilities.",
};

export default function InvestorCharter() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <section className={`tf-section ${styles.policySection}`}>
        <div className="tf-container">
          <div className={styles.headerBlock}>
            <h1>Investor Charter</h1>
            <p>
              Investor rights, grievance access, service standards, and
              responsibilities applicable to clients engaging with InvestEase
              Research.
            </p>
          </div>

          <div className={styles.policyList}>
            <div
              className={styles.policyItem}
              style={{ animationDelay: "80ms", opacity: 1, transform: "none" }}
            >
            {/* A */}
            <h4
              style={{
                color: "#142236",
                fontWeight: 700,
                fontFamily: '"Rethink Sans", sans-serif',
                fontSize: "clamp(1.62rem, 2.05vw, 2rem)",
              }}
            >
              A. Vision & Mission Statements for investors
            </h4>

            <p style={{ color: "#50677f", lineHeight: "1.82", fontSize: "17px" }}>
              <strong>Vision:</strong>
              <br />
              Invest with knowledge and safety.
            </p>

            <p style={{ color: "#50677f", lineHeight: "1.82", fontSize: "17px" }}>
              <strong>Mission:</strong>
              <br />
              Every investor should be empowered to invest in suitable
              investment products tailored to their needs, manage and monitor
              their investments to achieve their goals, access comprehensive
              reports, and attain financial wellness.
            </p>

            {/* B */}
            <h4
              style={{
                color: "#142236",
                fontWeight: 700,
                marginTop: "30px",
                fontFamily: '"Rethink Sans", sans-serif',
                fontSize: "clamp(1.62rem, 2.05vw, 2rem)",
              }}
            >
              B. Details of business transacted by the Research Analyst with
              respect to the investors
            </h4>

            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              {[
                "To publish research report based on the research activities of the RA",
                "To provide an independent unbiased view on securities.",
                "To offer unbiased recommendation, disclosing the financial interests in recommended securities.",
                "To provide research recommendations, based on analysis of publicly available information and known observations.",
                "To conduct audit annually",
                "To ensure that all advertisements are in adherence to the provisions of the Advertisement Code for Research Analysts.",
                "To maintain records of interactions, with all clients including prospective clients (prior to onboarding), where any conversation related to the research services has taken place.",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{ display: "flex", gap: "10px", marginBottom: "8px" }}
                >
                  <span className={styles.charterMainBullet}>●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* C */}
            <h4
              style={{
                color: "#142236",
                fontWeight: 700,
                marginTop: "30px",
                fontFamily: '"Rethink Sans", sans-serif',
                fontSize: "clamp(1.62rem, 2.05vw, 2rem)",
              }}
            >
              C. Details of services provided to investors (No Indicative
              Timelines)
            </h4>

            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li style={{ display: "flex", gap: "10px" }}>
                <span className={styles.charterMainBullet}>●</span>
                <span>
                  <strong>Onboarding of Clients:</strong>
                </span>
              </li>

              <ul style={{ listStyle: "none", paddingLeft: "30px" }}>
                {[
                  "Sharing of terms and conditions of research services",
                  "Completing KYC of fee paying clients",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: "6px",
                    }}
                  >
                    <span className={styles.charterSubBullet}>○</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <li style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <span className={styles.charterMainBullet}>●</span>
                <span>
                  <strong>Disclosure to Clients:</strong>
                </span>
              </li>

              <ul style={{ listStyle: "none", paddingLeft: "30px" }}>
                {[
                  "To disclose, information that is material for the client to make an informed decision, including details of its business activity, disciplinary history, the terms and conditions of research services, details of associates, risks and conflicts of interest, if any",

                  "To disclose the extent of use of Artificial Intelligence tools in providing research services",
                  "To disclose, while distributing a third party research report, any material conflict of interest of such third party research provider or provide web address that directs a recipient to the relevant disclosures",
                  "To disclose any conflict of interest of the activities of providing research services with other activities of the research analyst.",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: "6px",
                    }}
                  >
                    <span className={styles.charterSubBullet}>○</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ul>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              {[
                "To distribute research reports and recommendations to the clients without discrimination.",
                "To maintain confidentiality w.r.t publication of the research report until made available in the public domain.",
                "To respect data privacy rights of clients and take measures to protect unauthorized use of their confidential information",
                "To disclose the timelines for the services provided by the research analyst to clients and ensure adherence to the said timelines",
                "To provide clear guidance and adequate caution notice to clients when providing recommendations for dealing in complex and high-risk financial products/services",
                "To treat all clients with honesty and integrity",
                "To ensure confidentiality of information shared by clients unless such information is required to be provided in furtherance of discharging legal obligations or a client has provided specific consent to share such information",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{ display: "flex", gap: "10px", marginBottom: "8px" }}
                >
                  <span className={styles.charterMainBullet}>●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* D */}
            <h4
              style={{
                color: "#142236",
                fontWeight: 700,
                marginTop: "30px",
                fontFamily: '"Rethink Sans", sans-serif',
                fontSize: "clamp(1.62rem, 2.05vw, 2rem)",
              }}
            >
              D. Details of grievance redressal mechanism and how to access it
            </h4>

            <p style={{ marginTop: "14px" }}>
              1. Investor can lodge complaint/grievance against Research Analyst
              in the following ways:
            </p>

            <p style={{ fontWeight: 600, marginTop: "18px" }}>
              <strong>
                {" "}
                Mode of filing the complaint with research analyst
              </strong>
            </p>

            <p style={{ marginTop: "8px" }}>
              In case of any grievance / complaint, an investor may approach the
              concerned Research Analyst who shall strive to redress the
              grievance immediately, but not later than 21 days of the receipt
              of the grievance.
            </p>

            <p style={{ fontWeight: 600, marginTop: "22px" }}>
              <strong>
                {" "}
                Mode of filing the complaint on SCORES or with Research Analyst
                Administration and Supervisory Body (RAASB)
              </strong>
            </p>

            <ul
              style={{ listStyle: "none", paddingLeft: 0, marginTop: "14px" }}
            >
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  marginBottom: "10px",
                }}
              >
                <span className={styles.charterMainBullet}>●</span>
                <span>
                  SCORES 2.0 (a web based centralized grievance redressal system
                  of SEBI for facilitating effective grievance redressal in
                  time-bound manner)
                </span>
              </li>
            </ul>

            <p style={{ marginLeft: "26px", marginBottom: "12px" }}>
              <a
                href="https://scores.sebi.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#24283E",
                  fontWeight: 500,
                }}
              >
                (https://scores.sebi.gov.in)
              </a>
            </p>

            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  marginBottom: "10px",
                }}
              >
                <span className={styles.charterMainBullet}>●</span>
                <span>
                  Two level review for complaint/grievance against Research
                  Analyst:
                </span>
              </li>
            </ul>

            <ul
              style={{
                listStyle: "none",
                paddingLeft: "34px",
                marginBottom: "12px",
              }}
            >
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  marginBottom: "6px",
                }}
              >
                <span className={styles.charterSubBullet}>○</span>
                <span>First review done by designated body (RAASB)</span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                <span className={styles.charterSubBullet}>○</span>
                <span>Second review done by SEBI</span>
              </li>
            </ul>

            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                <span className={styles.charterMainBullet}>●</span>
                <span>Email to designated email ID of RAASB</span>
              </li>
            </ul>

            <p style={{ marginTop: "18px" }}>
              2. If the Investor is not satisfied with the resolution provided
              by the Market Participants, then the Investor has the option to
              file the complaint/ grievance on SMARTODR platform for its
              resolution through online conciliation or arbitration.
            </p>

            <p style={{ marginTop: "18px" }}>
              With regard to physical complaints, investors may send their
              complaints to:
            </p>

            <p style={{ fontWeight: 600, marginTop: "10px" }}>
              Office of Investor Assistance and Education, Securities and
              Exchange Board of India, SEBI Bhavan, Plot No. C4-A, ‘G’ Block,
              Bandra-Kurla Complex, Bandra (E), Mumbai – 400 051
            </p>

            <h4
              style={{
                color: "#142236",
                fontWeight: 700,
                marginTop: "30px",
                fontFamily: '"Rethink Sans", sans-serif',
                fontSize: "clamp(1.62rem, 2.05vw, 2rem)",
              }}
            >
              E. Rights of investors
            </h4>

            <ul
              style={{ listStyle: "none", paddingLeft: 0, marginTop: "10px" }}
            >
              {[
                "Right to Privacy and Confidentiality",
                "Right to Transparent Practices",
                "Right to fair and Equitable Treatment",
                "Right to Adequate Information",
                "Right to Initial and Continuing Disclosure",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{ display: "flex", gap: "10px", marginBottom: "8px" }}
                >
                  <span className={styles.charterMainBullet}>●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Sub bullet for Initial Disclosure */}
            <ul
              style={{
                listStyle: "none",
                paddingLeft: "34px",
                marginBottom: "8px",
              }}
            >
              <li style={{ display: "flex", gap: "10px" }}>
                <span className={styles.charterSubBullet}>○</span>
                <span>
                  Right to receive information about all the statutory and
                  regulatory disclosures
                </span>
              </li>
            </ul>

            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              {[
                "Right to Fair & True Advertisement",
                "Right to Awareness about Service Parameters and Turnaround Times",
                "Right to be informed of the timelines for each service",
                "Right to be Heard and Satisfactory Grievance Redressal",
                "Right to have timely redressal",
                "Right to Exit from Financial product or service in accordance with the terms and conditions agreed with the research analyst",
                "Right to receive clear guidance and caution notice when dealing in Complex and High-Risk Financial Products and Services",
                "Additional Rights to vulnerable consumers",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{ display: "flex", gap: "10px", marginBottom: "8px" }}
                >
                  <span className={styles.charterMainBullet}>●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Sub bullet for vulnerable consumers */}
            <ul
              style={{
                listStyle: "none",
                paddingLeft: "34px",
                marginBottom: "8px",
              }}
            >
              <li style={{ display: "flex", gap: "10px" }}>
                <span className={styles.charterSubBullet}>○</span>
                <span>
                  Right to get access to services in a suitable manner even if
                  differently abled
                </span>
              </li>
            </ul>

            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              {[
                "Right to provide feedback on the financial products and services used",
                "Right against coercive, unfair, and one-sided clauses in financial agreements",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{ display: "flex", gap: "10px", marginBottom: "8px" }}
                >
                  <span className={styles.charterMainBullet}>●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* F */}
            <h4
              style={{
                color: "#142236",
                fontWeight: 700,
                marginTop: "30px",
                fontFamily: '"Rethink Sans", sans-serif',
                fontSize: "clamp(1.62rem, 2.05vw, 2rem)",
              }}
            >
              F. Expectations from the investors (Responsibilities of investors)
            </h4>

            <p>
              <strong>Do’s</strong>
            </p>

            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              {[
                "Always deal with SEBI registered Research Analysts.",
                "Ensure that the Research Analyst has a valid registration certificate.",
                "Check for SEBI registration number.",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{ display: "flex", gap: "10px", marginBottom: "8px" }}
                >
                  <span className={styles.charterMainBullet}>●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p style={{ marginLeft: "26px", marginBottom: "12px" }}>
              Please refer to the list of all SEBI registered Research Analyst
              which is available on SEBI website in the following link:
            </p>

            <p style={{ marginLeft: "26px", marginBottom: "18px" }}>
              <a
                href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#24283E",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14
              </a>
            </p>

            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              {[
                "Always pay attention towards disclosures made in the research reports before investing.",
                "Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the details of your payments. You may make payment of fees through Centralized Fee Collection Mechanism (CeFCoM) of RAASB if research analyst has opted for the mechanism. (Applicable for fee paying clients only)",
                "Before buying/ selling securities or applying in public offer, check for the research recommendation provided by your Research Analyst.",
                "Ask all relevant questions and clear your doubts with your Research Analyst before acting on recommendation.",
                "Seek clarifications and guidance on research recommendations from your Research Analyst, especially if it involves complex and high risk financial products and services.",
                "Always be aware that you have the right to stop availing the service of a Research Analyst as per the terms of service agreed between you and your Research Analyst.",
                "Always be aware that you have the right to provide feedback to your Research Analyst in respect of the services received.",
                "Always be aware that you will not be bound by any clause, prescribed by the research analyst, which is contravening any regulatory provisions.",
                "Inform SEBI about Research Analyst offering assured or guaranteed returns",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{ display: "flex", gap: "10px", marginBottom: "8px" }}
                >
                  <span className={styles.charterMainBullet}>●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p style={{ marginTop: "18px" }}>
              <strong>Don’ts</strong>
            </p>

            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              {[
                "Do not provide funds for investment to the Research Analyst.",
                "Don’t fall prey to luring advertisements or market rumors.",
                "Do not get attracted to limited period discounts or other incentives, gifts, etc. offered by Research Analysts.",
                "Do not share login credentials and passwords of your trading, demat or bank accounts with the Research Analyst.",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{ display: "flex", gap: "10px", marginBottom: "8px" }}
                >
                  <span className={styles.charterMainBullet}>●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
