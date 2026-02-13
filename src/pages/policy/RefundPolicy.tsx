export default function RefundPolicy() {
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
              Refund Policy
            </h1>
            <p className="mx-auto" style={{ maxWidth: "760px" }}>
              This Refund Policy governs the refund of fees paid by clients for
              research and analysis services provided by InvestEase Research.
            </p>
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
            {/* Section */}
            {[
              {
                title: "Fees for Research Services",
                content: (
                  <p>
                    All fees paid towards subscription-based research services,
                    including long-term investment research and swing trading
                    research, are charged in advance and are clearly
                    communicated to the client prior to onboarding.
                  </p>
                ),
              },
              {
                title: "No Guarantee of Refund",
                content: (
                  <>
                    <p>
                      Once a client has subscribed to any research service and
                      payment has been made, fees shall not be refundable,
                      either in full or in part, under any circumstances,
                      including but not limited to:
                    </p>
                    <ul
                      style={{
                        paddingLeft: "0",
                        marginTop: "14px",
                        listStyle: "none",
                      }}
                    >
                      {[
                        "Change in market conditions",
                        "Non-performance of securities",
                        "Client’s decision to discontinue the service",
                        "Dissatisfaction with market outcomes",
                      ].map((item, i) => (
                      <li
                  key={i}
                  style={{ display: "flex", gap: "10px", marginBottom: "8px" }}
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
                title: "No Free Trials",
                content: (
                  <p>
                    We do not provide free trials in general, and all services
                    are strictly paid services.
                  </p>
                ),
              },
              {
                title: "Regulatory Compliance",
                content: (
                  <p>
                    Refunds, if any, shall be governed by SEBI guidelines
                    applicable from time to time. In the absence of any
                    regulatory mandate requiring refund, fees paid shall be
                    treated as non-refundable.
                  </p>
                ),
              },
              {
                title: "Exceptions",
                content: (
                  <p>
                    Any exception to this policy shall be at the sole discretion
                    of InvestEase Research and shall be evaluated on a
                    case-by-case basis. Such exceptions, if granted, do not
                    create a precedent.
                  </p>
                ),
              },
              {
                title: "Mode of Refund (If Applicable)",
                content: (
                  <p>
                    If a refund is approved, the amount shall be credited
                    through the original mode of payment within a reasonable
                    period, subject to applicable deductions and compliance
                    requirements.
                  </p>
                ),
              },
              {
                title: "Training & Educational Programs",
                content: (
                  <p>
                    Fees paid for training, webinars, workshops, or educational
                    programs are strictly non-refundable once enrollment is
                    confirmed.
                  </p>
                ),
              },
              {
                title: "Agreement to Policy",
                content: (
                  <p>
                    By subscribing to any service offered by InvestEase
                    Research, the client acknowledges that they have read,
                    understood, and agreed to this Refund Policy. If you do not
                    agree with these terms, please refrain from using our
                    services.
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
