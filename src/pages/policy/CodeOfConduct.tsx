export default function CodeOfConduct() {
  return (
    <>
      <div style={{ height: "120px" }} />

      <section className="tf-section">
        <div className="tf-container mb-5">
          {/* Header */}
          <div className="text-center mb-5">
            <h1
              className="fw-bold mb-3"
              style={{ color: "#24283E", fontSize: "50px" }}
            >
              Code of Conduct
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
            <p>
              The prop. of InvestEase Research is a SEBI Registered Research
              Analyst, <b>Ankita Mukherjee. Registration No : INH000020721,</b> valid
              from June 6, 2025.
            </p>

            <p style={{ marginBottom: "30px" }}>
              In accordance with Regulation 24 (2) of the SEBI (Research
              Analyst) Regulations, 2014, the company shall adhere to the
              following Code of Conduct:
            </p>

            {[
              {
                title: "Honesty and Good Faith",
                content: (
                  <p>
                    Research analyst or research entity shall act honestly and
                    in good faith.
                  </p>
                ),
              },
              {
                title: "Diligence",
                content: (
                  <p>
                    Research analyst or research entity shall act with due
                    skill, care and diligence and shall ensure that the research
                    report is prepared after thorough analysis.
                  </p>
                ),
              },
              {
                title: "Conflict of Interest",
                content: (
                  <p>
                    Research analyst or research entity shall effectively
                    address conflict of interest which may affect the
                    impartiality of its research analysis and research report
                    and shall make appropriate disclosures to address the same.
                  </p>
                ),
              },
              {
                title: "Insider Trading or front running",
                content: (
                  <p>
                    Research analyst or research entity or its employees shall
                    not engage in insider trading or front running or front
                    running of its own research report.
                  </p>
                ),
              },
              {
                title: "Confidentiality",
                content: (
                  <p>
                    Research analyst or research entity or its employees shall
                    maintain confidentiality of the report till the report is
                    made public.
                  </p>
                ),
              },
              {
                title: "Professional Standard",
                content: (
                  <p>
                    Research analyst or research entity or its employees engaged
                    in research analysis shall observe high professional
                    standards while preparing research reports.
                  </p>
                ),
              },
              {
                title: "Compliance",
                content: (
                  <p>
                    Research analyst or research entity shall comply with all
                    regulatory requirements applicable to the conduct of its
                    business activities.
                  </p>
                ),
              },
              {
                title: "Responsibility of senior management",
                content: (
                  <p>
                    The senior management of a research analyst or research
                    entity shall bear primary responsibility for ensuring the
                    maintenance of appropriate standards of conduct and
                    adherence to proper procedures.
                  </p>
                ),
              },
            ].map((section, index) => (
              <div key={index} style={{ marginBottom: "38px" }}>
                <h4
                  style={{
                    color: "#24283E",
                    fontWeight: 600,
                    marginBottom: "10px",
                  }}
                >
                  {section.title}
                </h4>

                {section.content}

                {index !== 7 && (
                  <div
                    style={{
                      height: "1px",
                      background: "rgba(0,0,0,0.06)",
                      marginTop: "24px",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
