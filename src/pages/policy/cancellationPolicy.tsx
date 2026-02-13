import { Link } from "react-router-dom";

export default function CancellationPolicy() {
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
              Cancellation Policy
            </h1>
            <p className="mx-auto" style={{ maxWidth: "760px" }}>
              This Cancellation Policy outlines the terms under which a client
              may discontinue research services offered by InvestEase Research.
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
            {[
              {
                title: "Service Cancellation by Client",
                content: (
                  <p>
                    Clients may request cancellation of their subscribed
                    research service at any time by submitting a written request
                    through the official communication channels of InvestEase
                    Research. Your subscription is personal to you, and you
                    should not transfer or share your subscription with any
                    other person.
                  </p>
                ),
              },
              {
                title: "Effect of Cancellation",
                content: (
                  <>
                    <p>Upon cancellation:</p>
                    <ul
                      style={{
                        paddingLeft: "0",
                        listStyle: "none",
                        marginTop: "14px",
                      }}
                    >
                      {[
                        "Access to research reports, updates, and recommendations shall cease immediately or at the end of the current subscription period",
                        "No refund shall be provided for any unused or remaining subscription period",
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
                title: "Non-Refundable Fees",
                content: (
                  <p>
                    All fees paid for research services are non-refundable upon
                    cancellation, irrespective of the reason for such
                    cancellation.
                  </p>
                ),
              },
              {
                title: "Cancellation of Training Programs",
                content: (
                  <p>
                    Enrollment in training, workshops, webinars, or educational
                    programs is non-cancellable once confirmed, and the fees
                    paid for such programs are non-refundable.
                  </p>
                ),
              },
              {
                title: "Cancellation by InvestEase Research",
                content: (
                  <>
                    <p>
                      InvestEase Research reserves the right to cancel or
                      suspend services if:
                    </p>
                    <ul
                      style={{
                        paddingLeft: "0",
                        listStyle: "none",
                        marginTop: "14px",
                      }}
                    >
                      {[
                        "The client violates applicable laws or SEBI regulations",
                        "The client misuses research material",
                        "The client engages in misconduct or unethical behavior",
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
                    <p>In such cases, no refund shall be applicable.</p>
                  </>
                ),
              },
              {
                title: "Regulatory Compliance",
                content: (
                  <p>
                    All cancellations shall be handled in compliance with SEBI
                    (Research Analyst) Regulations, 2014 and related guidelines.
                  </p>
                ),
              },
              {
                title: "Policy Updates",
                content: (
                  <p>
                    We may update this cancellation policy from time to time.
                    Any changes to this policy will be reflected on our website.
                    We encourage you to review this policy periodically to stay
                    informed about our refund procedures.
                  </p>
                ),
              },
              {
                title: "Agreement",
                content: (
                  <p>
                    By availing any service from InvestEase Research, the client
                    confirms acceptance of this Cancellation Policy. We believe
                    that you have read and agreed to the conditions mentioned in
                    the agreement of InvestEase Research RA services.
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
