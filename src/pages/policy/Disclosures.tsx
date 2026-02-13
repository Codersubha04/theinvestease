export default function Disclosures() {
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
              Disclosures
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
            {[
              {
                title: "Registration Details",
                content: (
                  <>
                    <p>
                      The prop. of <b>InvestEase Research</b> is a{" "}
                      <b>SEBI Registered Research Analyst,</b> Ankita Mukherjee.
                      Registration No : INH000020721, valid from June 6, 2025.
                    </p>
                    <p>
                      <b>BSE Enlistment No. 6569</b>
                    </p>
                  </>
                ),
              },
              {
                title: "Business Activities",
                content: (
                  <>
                    <p>
                      InvestEase Research provides research and analysis
                      services related to the Indian securities market,
                      including:
                    </p>

                    <ul
                      style={{
                        listStyle: "none",
                        paddingLeft: 0,
                        marginTop: "12px",
                      }}
                    >
                      {[
                        "Long-term investment research",
                        "Swing trading research",
                      ].map((item, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            gap: "10px",
                            marginBottom: "8px",
                          }}
                        >
                          <span>●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <p style={{ marginTop: "14px" }}>
                      InvestEase Research also conducts training and educational
                      programs, which are{" "}
                      <b>
                        purely educational in nature and do not constitute
                        investment advice or research recommendations.
                      </b>
                    </p>
                  </>
                ),
              },
              {
                title: "Disciplinary History",
                content: (
                  <p>
                    There are <b>no disciplinary actions,</b> regulatory
                    penalties, or directions passed by SEBI or any other
                    regulatory authority against InvestEase Research or its
                    proprietor.
                  </p>
                ),
              },
              {
                title: "Conflict of Interest",
                content: (
                  <>
                    <p>
                      InvestEase Research strives to avoid conflicts of interest
                      in its research activities. However:
                    </p>

                    <ul
                      style={{
                        listStyle: "none",
                        paddingLeft: 0,
                        marginTop: "12px",
                      }}
                    >
                      {[
                        "The Research Analyst or its associates may have positions in securities mentioned in research reports",
                        "Such positions, if any, shall be disclosed appropriately in the respective research communications",
                      ].map((item, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            gap: "10px",
                            marginBottom: "8px",
                          }}
                        >
                          <span>●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p>
                      All research views are independent, unbiased, and are not
                      influenced by any compensation, business relationship, or
                      personal interest.
                    </p>
                  </>
                ),
              },
              {
                title: "Ownership and Compensation Disclosure",
                content: (
                  <>
                    <p>InvestEase Research:</p>
                    <ul
                      style={{
                        listStyle: "none",
                        paddingLeft: 0,
                        marginTop: "12px",
                      }}
                    >
                      {[
                        "Does not receive any compensation, benefits, or consideration from companies whose securities are covered in research reports",
                        "Does not have any material business relationship with the subject companies",
                      ].map((item, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            gap: "10px",
                            marginBottom: "8px",
                          }}
                        >
                          <span>●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ),
              },
              {
                title: "Risk Disclosure",
                content: (
                  <p>
                    Investment in securities markets is subject to market risks.
                    Market conditions may change rapidly, and research views may
                    be impacted accordingly. Users should exercise due caution
                    and independent judgment while acting upon any research
                    recommendations.
                  </p>
                ),
              },
              {
                title: "Disclaimer on Performance",
                content: (
                  <p>
                    Past performance of any security or research recommendation
                    is <b>not indicative of future performance.</b> No assurance
                    or guarantee of returns is given.
                  </p>
                ),
              },
              {
                title: "Communication & Mode of Delivery",
                content: (
                  <>
                    <p>Research recommendations may be communicated through:</p>
                    <ul
                      style={{
                        listStyle: "none",
                        paddingLeft: 0,
                        marginTop: "12px",
                      }}
                    >
                      {[
                        "Website",
                        "Email",
                        "Messaging platforms",
                        "Reports or presentations",
                      ].map((item, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            gap: "10px",
                            marginBottom: "8px",
                          }}
                        >
                          <span>●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ),
              },
              {
                title: "Investor Responsibility",
                content: (
                  <>
                    <p>Investors are advised to:</p>
                    <ul
                      style={{
                        listStyle: "none",
                        paddingLeft: 0,
                        marginTop: "12px",
                      }}
                    >
                      {[
                        "Understand the risks involved",
                        "Consider their financial situation and risk appetite",
                        "Consult with other professionals if required before making any investment decisions",
                      ].map((item, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            gap: "10px",
                            marginBottom: "8px",
                          }}
                        >
                          <span>●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
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

                {index !== 8 && (
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
