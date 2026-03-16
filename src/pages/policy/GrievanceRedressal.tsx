import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Grievance Redressal Mechanism | InvestEase Research Support",
  description:
    "Understand the InvestEase Research grievance redressal mechanism, complaint escalation process, and investor support channels for service-related concerns.",
};

export default function GrievanceRedressalMechanism() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div style={{ height: "120px" }} />

      <section className="tf-section">
        <div className="tf-container mb-5">
          <div className="text-center mb-5">
            <h1
              className="fw-bold"
              style={{ color: "#24283E", fontSize: "50px" }}
            >
              Grievance Redressal Mechanism (GRM)
            </h1>
          </div>

          <div
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "60px",
              boxShadow: "0 15px 50px rgba(0,0,0,0.08)",
              lineHeight: "32px",
              fontSize: "16px",
            }}
          >
            {/* Intro */}
            <p style={{ marginBottom: "20px" }}>
              <strong>InvestEase Research</strong>
              <br />
              (SEBI Registered Research Analyst – Reg. No. INH000020721)
            </p>

            <p style={{ marginBottom: "40px" }}>
              InvestEase Research has established a structured Grievance
              Redressal Mechanism to address investor complaints promptly and
              efficiently, in compliance with SEBI regulations.
            </p>

            {/* 1 */}
            <h4
              style={{
                color: "#24283E",
                fontWeight: 600,
                marginBottom: "10px",
              }}
            >
              1. Objective
            </h4>
            <p style={{ marginBottom: "35px" }}>
              To ensure timely and transparent resolution of grievances received
              from investors and clients.
            </p>

            {/* 2 */}
            <h4
              style={{
                color: "#24283E",
                fontWeight: 600,
                marginBottom: "10px",
              }}
            >
              2. Grievance Lodging Process
            </h4>

            <p style={{ marginBottom: "16px" }}>
              Investors may lodge complaints through:
            </p>

            <ul
              style={{
                listStyle: "none",
                paddingLeft: 0,
                marginBottom: "35px",
              }}
            >
              <li
                style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
              >
                <span>●</span>
                <span>Email: Official email ID mentioned on the website</span>
              </li>
              <li style={{ display: "flex", gap: "10px" }}>
                <span>●</span>
                <span>
                  Contact number: Official contact number mentioned on the
                  website
                </span>
              </li>
            </ul>

            {/* 3 */}
            <h4
              style={{
                color: "#24283E",
                fontWeight: 600,
                marginBottom: "10px",
              }}
            >
              3. Resolution Timeline
            </h4>

            <ul
              style={{
                listStyle: "none",
                paddingLeft: 0,
                marginBottom: "35px",
              }}
            >
              <li
                style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
              >
                <span>●</span>
                <span>
                  All grievances shall be acknowledged within 48 working hours
                </span>
              </li>
              <li style={{ display: "flex", gap: "10px" }}>
                <span>●</span>
                <span>
                  Resolution shall be attempted within 30 days from the date of
                  receipt
                </span>
              </li>
            </ul>

            {/* 4 */}
            <h4
              style={{
                color: "#24283E",
                fontWeight: 600,
                marginBottom: "10px",
              }}
            >
              4. Escalation Mechanism
            </h4>

            <p style={{ marginBottom: "16px" }}>
              If the grievance is not resolved satisfactorily, the investor may
              escalate the complaint through:
            </p>

            <p style={{ marginBottom: "35px" }}>
              <strong>SEBI SCORES (SEBI Complaint Redress System)</strong>
              <br />
              Website:{" "}
              <a
                href="https://scores.sebi.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#24283E", textDecoration: "none" }}
              >
                https://scores.sebi.gov.in
              </a>
            </p>

            {/* 5 */}
            <h4
              style={{
                color: "#24283E",
                fontWeight: 600,
                marginBottom: "10px",
              }}
            >
              5. Record Maintenance
            </h4>

            <p style={{ marginBottom: "40px" }}>
              All grievances received and their resolution status shall be
              recorded and maintained as per SEBI requirements.
            </p>

            {/* Compliance Table */}
            <h4
              style={{
                color: "#24283E",
                fontWeight: 600,
                marginBottom: "10px",
              }}
            >
              COMPLIANCE DATA (GRM STATUS)
            </h4>

            <p style={{ marginBottom: "20px" }}>
              (To be updated monthly / quarterly on the website)
            </p>

            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "15px",
                }}
              >
                <thead>
                  <tr style={{ background: "#f7f8fa" }}>
                    <th style={{ padding: "14px", border: "1px solid #eee" }}>
                      Particulars
                    </th>
                    <th style={{ padding: "14px", border: "1px solid #eee" }}>
                      Data
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Number of investor complaints received", "Nil"],
                    ["Number of complaints resolved", "Nil"],
                    ["Number of complaints pending", "Nil"],
                    ["Average resolution time", "Not Applicable"],
                  ].map((row, i) => (
                    <tr key={i}>
                      <td style={{ padding: "14px", border: "1px solid #eee" }}>
                        {row[0]}
                      </td>
                      <td style={{ padding: "14px", border: "1px solid #eee" }}>
                        {row[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ marginTop: "20px", fontWeight: 600 }}>
              Note: The above data shall be updated periodically as per SEBI
              guidelines.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
