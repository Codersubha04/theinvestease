import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Most Important Terms & Conditions | InvestEase Research",
  description:
    "Read the most important terms and conditions for InvestEase Research services, including service scope, investor responsibilities, and key policy terms.",
};

export default function TermsConditions() {
  const ul = {
    listStyle: "none",
    paddingLeft: "0",
    marginTop: "10px",
    lineHeight: "30px",
  };

  const liMain = {
    display: "flex",
    gap: "10px",
    marginBottom: "8px",
    alignItems: "flex-start",
  };

  const bulletMain = {
    color: "#24283E",
    fontSize: "18px",
    lineHeight: "28px",
  };

  const bulletSub = {
    color: "#24283E",
    fontSize: "16px",
    lineHeight: "28px",
  };

  return (
    <>
      <MetaComponent meta={metadata} />
      <div style={{ height: "120px" }} />

      <section className="tf-section">
        <div className="tf-container mb-5">
          <div className="text-center mb-5">
            <h1
              className="fw-bold mb-3"
              style={{ color: "#24283E", fontSize: "50px" }}
            >
              Most Important Terms & Conditions
            </h1>
          </div>

          <div
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "50px",
              boxShadow: "0 15px 50px rgba(0,0,0,0.08)",
            }}
          >
            {/* Helper style */}
            {(() => {
              const p = { marginBottom: "18px", lineHeight: "28px" };
              const sectionGap = { marginBottom: "42px" };
              const ul = {
                paddingLeft: "22px",
                marginTop: "10px",
                marginBottom: "18px",
              };

              return (
                <>
                  {/* 1 */}
                  <div style={sectionGap}>
                    <h4 style={{ fontWeight: 600, marginBottom: "14px" }}>
                      Availing the research services
                    </h4>
                    <p style={p}>
                      By accepting delivery of the research service, the client
                      confirms that he/she has elected to subscribe to the
                      research service of the RA at his/her sole discretion. RA
                      confirms that research services shall be rendered in
                      accordance with the applicable provisions of the RA
                      Regulations.
                    </p>
                  </div>

                  {/* 2 */}
                  <div style={sectionGap}>
                    <h4 style={{ fontWeight: 600, marginBottom: "14px" }}>
                      Obligations on RA
                    </h4>
                    <p style={p}>
                      RA and client shall be bound by SEBI Act and all the
                      applicable rules and regulations of SEBI, including the RA
                      Regulations and relevant notifications of Government, as
                      may be in force, from time to time.
                    </p>
                  </div>

                  {/* 3 */}
                  <div style={sectionGap}>
                    <h4 style={{ fontWeight: 600, marginBottom: "14px" }}>
                      Client Information and KYC
                    </h4>
                    <p style={p}>
                      The client shall furnish all such details in full as may
                      be required by the RA in its standard form with supporting
                      details, if required, as may be made mandatory by
                      RAASB/SEBI from time to time. RA shall collect, store,
                      upload and check KYC records of the clients with KYC
                      Registration Agency (KRA) as specified by SEBI from time
                      to time.
                    </p>
                  </div>

                  {/* 4 */}
                  <div style={sectionGap}>
                    <h4 style={{ fontWeight: 600, marginBottom: "14px" }}>
                      Standard Terms of Service
                    </h4>

                    <p style={p}>
                      The consent of client shall be taken on the following
                      understanding:
                    </p>
                    <div style={{ paddingLeft: "22px" }}>
                      <p style={p}>
                        “I/We have read and understood the terms and conditions
                        applicable to a research analyst as defined under
                        regulation 2(1)(u) of the SEBI (Research Analyst)
                        Regulations, 2014, including the fee structure. <br />{" "}
                        <br />
                        I/We are subscribing to the research services for our
                        own benefits and consumption, and any reliance placed on
                        the research report provided by the research analyst
                        shall be as per our own judgement and assessment of the
                        conclusions contained in the research report. ”
                      </p>

                      <p style={{ ...p, fontWeight: 600 }}>
                        I/We understand that –
                      </p>

                      <ul style={ul}>
                        <li style={liMain}>
                          <span style={bulletMain}>●</span>
                          <span>
                            Any investment made based on the recommendations in
                            the research reports are subject to market risk.
                          </span>
                        </li>

                        <li style={liMain}>
                          <span style={bulletMain}>●</span>
                          <span>
                            Recommendations in the research report do not
                            provide any assurance of returns.
                          </span>
                        </li>

                        <li style={liMain}>
                          <span style={bulletMain}>●</span>
                          <span>
                            There is no recourse to claim any losses incurred on
                            the investments made based on the recommendations in
                            the research report.
                          </span>
                        </li>
                      </ul>

                      <p style={{ ...p, fontWeight: 600, marginTop: "14px" }}>
                        Declaration of the RA that:
                      </p>

                      <ul style={ul}>
                        <li style={liMain}>
                          <span style={bulletMain}>●</span>
                          <span>
                            I am duly registered with SEBI as an RA pursuant to
                            the SEBI (Research Analysts) Regulations, 2014 and
                            its registration details are: (registration number,
                            registration date)
                          </span>
                        </li>

                        <li style={liMain}>
                          <span style={bulletMain}>●</span>
                          <span>
                            I have registration and qualifications required to
                            render the services contemplated under the RA
                            Regulations, and the same are valid and subsisting
                          </span>
                        </li>
                        <li style={liMain}>
                          <span style={bulletMain}>●</span>
                          <span>
                            Research analyst services provided by me do not
                            conflict with or violate any provision of law, rule
                            or regulation, contract, or other instrument to
                            which it is a party or to which any of its property
                            is or may be subject
                          </span>
                        </li>
                        <li style={liMain}>
                          <span style={bulletMain}>●</span>
                          <span>
                            The maximum fee that may be charged by RA is ₹1.51
                            lakhs per annum per family of client.
                          </span>
                        </li>
                        <li style={liMain}>
                          <span style={bulletMain}>●</span>
                          <span>
                            The recommendations provided by the RA do not
                            provide any assurance of returns.
                          </span>
                        </li>
                      </ul>

                      <p style={{ marginTop: "12px" }}>
                        Additionally, as RA is an individual, he declares that:
                      </p>

                      <ul style={ul}>
                        <li style={liMain}>
                          <span style={bulletSub}>○</span>
                          <span>
                            I am not engaged in any additional professional or
                            business activities, on a whole-time basis or in an
                            executive capacity, which interfere with/influence
                            or have the potential to interfere with/influence
                            the independence of research report and/or
                            recommendations contained therein.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* 5 */}
                  <div style={sectionGap}>
                    <h4 style={{ fontWeight: 600, marginBottom: "14px" }}>
                      Consideration and mode of payment
                    </h4>
                    <p style={p}>
                      The client shall duly pay to RA, the agreed fees for the
                      services that RA renders to the client and statutory
                      charges, as applicable. Such fees and statutory charges
                      shall be payable through the specified manner and mode(s)/
                      mechanism(s).
                    </p>
                  </div>

                  {/* 6 */}
                  <div style={sectionGap}>
                    <h4 style={{ fontWeight: 600, marginBottom: "14px" }}>
                      Risk factors
                    </h4>
                    <p style={p}>
                      Any investment made based on recommendations in research
                      reports are subject to market risks, and recommendations
                      do not provide any assurance of returns. There is no
                      recourse to claim any losses incurred on the investments
                      made based on the recommendations in the research report.
                      Any reliance placed on the research report provided by the
                      RA shall be as per the client’s own judgement and
                      assessment of the conclusions contained in the research
                      report.
                    </p>
                  </div>

                  {/* 7 */}
                  <div style={sectionGap}>
                    <h4 style={{ fontWeight: 600, marginBottom: "14px" }}>
                      Conflict of interest
                    </h4>
                    <p style={p}>
                      Research Analyst or his relative or its Associate may have
                      beneficial ownership of less than 1% in the recommended
                      stock at the end of the month immediately preceding the
                      date of publication of the Research Report. Further
                      Research Analyst or his relative or its associate does
                      have/does not have any material conflict of interest.
                    </p>
                  </div>

                  {/* 8 */}
                  <div style={sectionGap}>
                    <h4 style={{ fontWeight: 600, marginBottom: "14px" }}>
                      Termination of service and refund of fees
                    </h4>
                    <p style={p}>
                      The RA may suspend or terminate rendering of research
                      services to clients on account of suspension/ cancellation
                      of registration of RA by SEBI and shall refund the
                      residual amount to the client. <br />
                      In case of suspension of certificate of registration of
                      the RA for more than 60 (sixty) days or cancellation of
                      the RA registration, RA shall refund the fees, on a pro
                      rata basis for the period from the effective date of
                      cancellation/ suspension to end of the subscription
                      period.
                    </p>
                  </div>

                  {/* 9 */}
                  <div style={sectionGap}>
                    <h4 style={{ fontWeight: 600, marginBottom: "14px" }}>
                      Grievance redressal and dispute resolution
                    </h4>

                    <p style={p}>Any grievance related to:</p>

                    <ul
                      style={{
                        listStyle: "none",
                        paddingLeft: 0,
                        marginTop: "10px",
                      }}
                    >
                      {[
                        "Non-receipt of research report",
                        "Missing pages or inability to download the entire report",
                        "Any other deficiency in the research services provided by RA",
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

                    <p style={p}>
                      Shall be escalated promptly by the client to the
                      person/employee designated by RA, in this behalf.
                    </p>

                    <p style={p}>
                      The RA shall be responsible to resolve grievances within 7
                      (seven) business working days or such timelines as may be
                      specified by SEBI under the RA Regulations.
                    </p>

                    <p style={p}>
                      RA shall redress grievances of the client in a timely and
                      transparent manner.
                    </p>

                    <p style={p}>
                      Any dispute between the RA and his client may be resolved
                      through arbitration or through any other modes or
                      mechanism as specified by SEBI from time to time.
                    </p>
                  </div>

                  {/* 11. MITC */}
                  <div style={{ marginTop: "40px" }}>
                    <h4 style={{ fontWeight: 600, marginBottom: "14px" }}>
                      Most Important Terms and Conditions (MITC)
                    </h4>

                    <p style={{ marginBottom: "18px" }}>
                      RA discloses MITC as specified below to the clients. (MITC
                      has been standardized by Industry Standards Forum (ISF) in
                      consultation with SEBI and RAASB).
                    </p>

                    <ul
                      style={{
                        listStyle: "none",
                        paddingLeft: 0,
                        lineHeight: "30px",
                      }}
                    >
                      {/* 1 */}
                      <li style={{ marginBottom: "16px" }}>
                        <b>1.</b> These terms and conditions, and consent
                        thereon are for the research services provided by the
                        Research Analyst (RA) and RA cannot execute/carry out
                        any trade (purchase/sell transaction) on behalf of the
                        client. Thus, the clients are advised not to permit RA
                        to execute any trade on their behalf.
                      </li>

                      {/* 2 */}
                      <li style={{ marginBottom: "16px" }}>
                        <b>2.</b> The fee charged by RA to the client will be
                        subject to the maximum amount prescribed by SEBI/
                        Research Analyst Administration and Supervisory Body
                        (RAASB) from time to time (applicable only for
                        Individual and HUF Clients).
                        <div style={{ paddingLeft: "28px", marginTop: "10px" }}>
                          <div>
                            <b>2.1.</b> The current fee limit is Rs 1,51,000/-
                            per annum per family of client for all research
                            services of the RA.
                          </div>
                          <div>
                            <b>2.2.</b> The fee limit does not include statutory
                            charges.
                          </div>
                          <div>
                            <b>2.3.</b> The fee limits do not apply to a
                            non-individual client / accredited investor.
                          </div>
                        </div>
                      </li>

                      {/* 3 */}
                      <li style={{ marginBottom: "16px" }}>
                        <b>3.</b> RA may charge fees in advance if agreed by the
                        client. Such fee shall not exceed the period stipulated
                        by SEBI; as on date of agreement, it is one quarter. In
                        case of pre-mature termination of the RA services by
                        either the client or the RA, the client shall be
                        entitled to seek refund of proportionate fees only for
                        an unexpired period.
                      </li>

                      {/* 4 */}
                      <li style={{ marginBottom: "16px" }}>
                        <b>4.</b> Fees to RA may be paid by the client through
                        any of the specified modes like cheque, online bank
                        transfer, UPI, etc. Cash payment is not allowed.
                        Optionally the client can make payments through
                        Centralized Fee Collection Mechanism (CeFCoM) managed by
                        BSE Limited (i.e. currently recognized RAASB).
                      </li>

                      {/* 5 */}
                      <li style={{ marginBottom: "16px" }}>
                        <b>5.</b> The RA is required to abide by the applicable
                        regulations/ circulars/ directions specified by SEBI and
                        RAASB from time to time in relation to disclosure and
                        mitigation of any actual or potential conflict of
                        interest. The RA will endeavour to promptly inform the
                        client of any conflict of interest that may affect the
                        services being rendered to the client.
                      </li>

                      {/* 6 */}
                      <li style={{ marginBottom: "16px" }}>
                        <b>6.</b> Any assured/guaranteed/fixed returns schemes
                        or any other schemes of similar nature are prohibited by
                        law. No scheme of this nature shall be offered to the
                        client by the RA.
                      </li>

                      {/* 7 */}
                      <li style={{ marginBottom: "16px" }}>
                        <b>7.</b> The RA cannot guarantee returns, profits,
                        accuracy, or risk-free investments from the use of the
                        RA’s research services. All opinions, projections,
                        estimates of the RA are based on the analysis of
                        available data under certain assumptions as of the date
                        of preparation/publication of the research report.
                      </li>

                      {/* 8 */}
                      <li style={{ marginBottom: "16px" }}>
                        <b>8.</b> Any investment made based on recommendations
                        in research reports are subject to market risks, and
                        recommendaƟons do not provide any assurance of returns.
                        There is no recourse to claim any losses incurred on the
                        investments made based on the recommendaƟons in the
                        research report. Any reliance placed on the research
                        report provided by the RA shall be as per the client’s
                        own judgement and assessment of the conclusions
                        contained in the research report.
                      </li>

                      {/* 9 */}
                      <li style={{ marginBottom: "16px" }}>
                        <b>9.</b> The SEBI registration, Enlistment with RAASB,
                        and NISM certification do not guarantee the performance
                        of the RA or assure any returns to the client.
                      </li>

                      {/* 10 */}
                      <li style={{ marginBottom: "16px" }}>
                        <b>10.</b> For any grievances,
                        <div style={{ paddingLeft: "28px", marginTop: "10px" }}>
                          <div>
                            <b>Step 1:</b>The client should first contact the RA
                            using the details on its website or following
                            contact details.
                          </div>
                          <div>
                            <b>Step 2:</b> If the resolution is unsatisfactory,
                            the client can also lodge grievances through SEBI’s
                            SCORES plaƞorm at www.scores.sebi.gov.in
                          </div>
                          <div>
                            <b>Step 3:</b> The client may also consider the
                            Online Dispute Resolution (ODR) through the Smart
                            ODR portal at https://smartodr.in
                          </div>
                        </div>
                      </li>

                      {/* 11 */}
                      <li style={{ marginBottom: "16px" }}>
                        <b>11.</b> Clients are required to keep contact details,
                        including email id and mobile number/s updated with the
                        RA at all times.
                      </li>

                      {/* 12 */}
                      <li>
                        <b>12.</b>The RA shall never ask for the client’s login
                        credentials and OTPs for the client’s Trading Account
                        Demat Account and Bank Account. Never share such
                        information with anyone including RA.
                      </li>
                    </ul>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>
    </>
  );
}
