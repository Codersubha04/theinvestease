import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="mx-auto" style={{ maxWidth: "760px" }}>
              InvestEase Research is committed to protecting the privacy and
              confidentiality of its clients, users, and website visitors. This
              Privacy Policy outlines how personal information is collected,
              used, stored, and safeguarded.
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
                title: "Information Collected",
                content: (
                  <>
                    <p>
                      InvestEase Research may collect the following information:
                    </p>
                    <ul
                      style={{
                        paddingLeft: "0",
                        listStyle: "none",
                        marginTop: "14px",
                      }}
                    >
                      {[
                        "Name, contact details (email address, phone number)",
                        "Basic demographic and identification information",
                        "Payment and transaction details",
                        "Website usage data and communication records",
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
                title: "Use of Information",
                content: (
                  <>
                    <p>The information collected is used for:</p>
                    <ul
                      style={{
                        paddingLeft: "0",
                        listStyle: "none",
                        marginTop: "14px",
                      }}
                    >
                      {[
                        "Providing research and analysis services",
                        "Client onboarding and communication",
                        "Regulatory compliance and record-keeping",
                        "Improving website functionality and user experience",
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
                title: "Confidentiality of Client Information",
                content: (
                  <>
                    <p>
                      Client data shall be kept strictly confidential and shall
                      not be shared with any third party, except:
                    </p>
                    <ul
                      style={{
                        paddingLeft: "0",
                        listStyle: "none",
                        marginTop: "14px",
                      }}
                    >
                      {[
                        "Where required by law or regulatory authorities (SEBI, stock exchanges, courts)",
                        "With authorized service providers strictly for operational purposes",
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
                title: "Data Security",
                content: (
                  <p>
                    InvestEase Research implements reasonable security practices
                    and procedures to safeguard personal and sensitive data
                    against unauthorized access, misuse, loss, or alteration.
                  </p>
                ),
              },
              {
                title: "Children's Information",
                content: (
                  <p>
                    Another part of our priority is adding protection for
                    children while using the internet. We encourage parents and
                    guardians to monitor their online activity. InvestEase
                    Research does not knowingly collect any Personal
                    Identifiable Information from children under the age of 13.
                    If you think that your child provided this kind of
                    information on our website, we strongly encourage you to
                    contact us immediately and we will do our best efforts to
                    promptly remove such information from our records.
                  </p>
                ),
              },
              {
                title: "Cookies and Tracking Technologies",
                content: (
                  <>
                    <p>The website may use cookies to:</p>
                    <ul
                      style={{
                        paddingLeft: "0",
                        listStyle: "none",
                        marginTop: "14px",
                      }}
                    >
                      {[
                        "Analyze website traffic",
                        "Improve user experience",
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
                      Users may choose to disable cookies through their browser
                      settings.
                    </p>
                  </>
                ),
              },
              {
                title: "Data Retention",
                content: (
                  <p>
                    Personal data shall be retained only for the period required
                    to fulfill regulatory, legal, and business obligations,
                    after which it shall be securely deleted or anonymized.
                  </p>
                ),
              },
              {
                title: "User Rights",
                content: (
                  <>
                    <p>Users have the right to:</p>
                    <ul
                      style={{
                        paddingLeft: "0",
                        listStyle: "none",
                        marginTop: "14px",
                      }}
                    >
                      {[
                        "Access their personal information",
                        "Request correction of inaccurate data",
                        "Request deletion of data, subject to regulatory requirements",
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
                title: "Third-Party Links",
                content: (
                  <p>
                    The website may contain links to third-party websites.
                    InvestEase Research is not responsible for the privacy
                    practices or content of such external websites.
                  </p>
                ),
              },
              {
                title: "Changes to Privacy Policy",
                content: (
                  <p>
                    InvestEase Research reserves the right to modify this
                    Privacy Policy at any time. Changes shall be updated on the
                    website accordingly.
                  </p>
                ),
              },
              {
                title: "Contact Information",
                content: (
                  <p>
                    For any questions or concerns regarding this Privacy Policy,
                    users may contact InvestEase Research through the official
                    communication channels mentioned on the website.
                  </p>
                ),
              },
              {
                title: "Consent",
                content: (
                  <p>
                    By using our website or services or purchasing any of our
                    products/services, you hereby consent to our Privacy Policy
                    and agree to be bound by its{" "}
                    <Link
                      to="/terms-conditions"
                      style={{
                        color: "#24283E",
                        fontWeight: 700,
                        textDecoration: "none",
                      }}
                    >
                      Terms and Conditions
                    </Link>
                    .
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
                {index !== 11 && (
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
