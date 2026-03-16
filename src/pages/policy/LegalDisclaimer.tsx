import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Legal Disclaimer | InvestEase Research Legal Notice",
  description:
    "Review the InvestEase Research legal disclaimer covering website usage, informational limitations, liability boundaries, and investor responsibility.",
};

export default function LegalDisclaimer() {
  const h = {
    color: "#24283E",
    fontWeight: 600,
    marginBottom: "14px",
  };

  const p = {
    marginBottom: "14px",
    lineHeight: "30px",
  };

  const sectionGap = {
    marginBottom: "38px",
  };

  return (
    <>
      <MetaComponent meta={metadata} />
      <div style={{ height: "120px" }} />

      <section className="tf-section">
        <div className="tf-container mb-5">
          {/* Header */}
          <div className="text-center mb-5">
            <h1
              className="fw-bold mb-3"
              style={{ color: "#24283E", fontSize: "50px" }}
            >
              Legal Disclaimer
            </h1>
          </div>

          {/* Card */}
          <div
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "50px",
              boxShadow: "0 15px 50px rgba(0,0,0,0.08)",
            }}
          >
            {/* Intro */}
            <div style={sectionGap}>
              <p style={p}>
                The prop. of <b>InvestEase Research</b> is a{" "}
                <b>SEBI Registered Research Analyst, Ankita Mukherjee.</b>{" "}
                Registration No : INH000020721, provides research and analysis
                services in accordance with the provisions of the Securities and
                Exchange Board of India (Research Analyst) Regulations, 2014.
              </p>
            </div>

            {/* Registered Entity Information */}
            <div style={sectionGap}>
              <h4 style={h}>Registered Entity Information</h4>
              <p style={p}>
                <b>Entity Name :</b> InvestEase Research <br />
                <b>Registered Office :</b> 4/82 seth bagan road, kolkata-30
              </p>
            </div>

            {/* SEBI Registration Details */}
            <div style={sectionGap}>
              <h4 style={h}>SEBI Registration Details</h4>
              <p style={p}>
                <b>Research Analyst :</b> INH000020721 <br />
                <b>BSE Enlistment No :</b> 6569 <br />
                <b>Type :</b> Individual <br />
                <b>Valid From :</b> June 6, 2025
              </p>
            </div>

            {/* Key Personnel */}
            <div style={sectionGap}>
              <h4 style={h}>Key Personnel</h4>
              <p style={p}>
                <b>Principal Officer :</b> Mr. Raghav Kumar
                (raghavgarg4041@gmail.com) <br />
                <b>Compliance Officer :</b> Mrs. Abhilasha Garg
                (rrsco@raghavresearch.com) <br />
                <b>Grievance Officer :</b> Ms. Priyanshi Gola
                (grievance@raghavresearch.com)
              </p>
            </div>

            {/* SEBI Office */}
            <div style={{ marginTop: "30px", lineHeight: "32px" }}>
              <h4
                style={{
                  fontWeight: 700,
                  marginBottom: "18px",
                }}
              >
                SEBI Office Details
              </h4>

              <p style={{ marginBottom: "18px" }}>
                SEBI Bhavan BKC, Bandra-Kurla Complex, Mumbai - 400051,
                Maharashtra, India
              </p>

              <p
                style={{
                  background: "#f5f6f7",
                  padding: "8px 12px",
                  marginBottom: "22px",
                }}
              >
                SEBI SCORES :{" "}
                <a
                  href="https://scores.sebi.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#24283E",  }}
                >
                  <b>Visit Here</b>
                </a>{" "}
                | SMARTODR :{" "}
                <a
                  href="https://smartodr.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#24283E",}}
                >
                  <b>Visit Here</b>
                </a>
              </p>

              <div style={{ paddingLeft: "6px" }}>
                <div style={{ display: "flex", marginBottom: "14px" }}>
                  <span style={{ width: "22px", fontWeight: 600 }}>1.</span>
                  <span>
                    "www.theinvestease.com" is the official website of{" "}
                    <strong>InvestEase Research</strong>
                  </span>
                </div>

                <div style={{ display: "flex", marginBottom: "14px" }}>
                  <span style={{ width: "22px", fontWeight: 600 }}>2.</span>
                  <span>
                    Investments in securities markets are subject to market
                    risks. Read all documents before investing.
                  </span>
                </div>

                <div style={{ display: "flex" }}>
                  <span style={{ width: "22px", fontWeight: 600 }}>3.</span>
                  <span>
                    SEBI registration does not guarantee performance or returns.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
