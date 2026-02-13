import { Link } from "react-router-dom";

export default function Faqs() {
  return (
    <section
      className="section-faqs h-1 tf-spacing-2 section-one-page"
      id="faqs"
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="section-faqs-inner">
              <div className="left">
                <div className="heading-section">
                  <div className="text-anime-wave">
                    <a
                      href="#"
                      className="tag label text-btn-uppercase bg-white"
                    >
                      FAQs
                    </a>
                  </div>
                  <h3 className="title-section mb-12 text-anime-wave">
                    Research That Delivers Real Results
                  </h3>
                  <div className="sub-title body-2 text-anime-wave mb-40">
                    We answer the most common investor questions — what to buy,
                    when to buy, and how to manage risk — using disciplined
                    research and a long-term approach.
                  </div>
                  <div className="text-anime-wave">
                    <Link
                      to={`/contact-us`}
                      className="tf-btn style-1 bg-on-suface-container"
                    >
                      <span>Talk to an Expert</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="wg-according" id="According">
                  <div className="according-item">
                    <h5>
                      <a
                        href="#according-1"
                        data-bs-toggle="collapse"
                        className="title-according collapsed"
                      >
                        Is InvestEase Research SEBI registered?
                        <span />
                      </a>
                    </h5>
                    <div
                      id="according-1"
                      className="collapse"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          Yes. InvestEase Research is a SEBI-registered Research
                          Analyst and operates in accordance with the SEBI
                          (Research Analyst) Regulations, 2014.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="according-item">
                    <h5>
                      <a
                        href="#according-2"
                        data-bs-toggle="collapse"
                        className="title-according"
                      >
                        What kind of services do you provide?
                        <span />
                      </a>
                    </h5>
                    <div
                      id="according-2"
                      className="collapse show"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          We provide equity research and market insights focused
                          on long-term investing, swing opportunities, and
                          investor education. Our services are research-driven
                          and do not involve execution or portfolio management.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="according-item">
                    <h5>
                      <a
                        href="#according-3"
                        data-bs-toggle="collapse"
                        className="title-according collapsed"
                      >
                        Who is a Research Analyst?
                        <span />
                      </a>
                    </h5>
                    <div
                      id="according-3"
                      className="collapse"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          A Research Analyst is a SEBI-registered professional
                          authorized to provide research reports and investment
                          recommendations based on structured analysis, subject
                          to regulatory guidelines.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="according-item">
                    <h5>
                      <a
                        href="#according-4"
                        data-bs-toggle="collapse"
                        className="title-according collapsed"
                      >
                        Are your services suitable for beginners?
                        <span />
                      </a>
                    </h5>
                    <div
                      id="according-4"
                      className="collapse"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          Yes. Our services are suitable for both beginners and
                          experienced investors who are willing to learn,
                          understand risks, and follow a disciplined investment
                          approach.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="according-item">
                    <h5>
                      <a
                        href="#according-5"
                        data-bs-toggle="collapse"
                        className="title-according collapsed"
                      >
                        What is the typical holding period of your research
                        recommendations? <span />
                      </a>
                    </h5>
                    <div
                      id="according-5"
                      className="collapse"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          Holding periods vary depending on the research
                          category. Long-term ideas may range from months to
                          years, while short- to medium-term insights depend on
                          market conditions and strategy.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="according-item">
                    <h5>
                      <a
                        href="#according-6"
                        data-bs-toggle="collapse"
                        className="title-according collapsed"
                      >
                        Where can I get the stock research and analysis?{" "}
                        <span />
                      </a>
                    </h5>
                    <div
                      id="according-6"
                      className="collapse"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          Our research is shared through official communication
                          channels such as our website, email updates, or other
                          authorized platforms mentioned at the time of
                          subscription.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="according-item">
                    <h5>
                      <a
                        href="#according-7"
                        data-bs-toggle="collapse"
                        className="title-according collapsed"
                      >
                        How can I subscribe to your services? <span />
                      </a>
                    </h5>
                    <div
                      id="according-7"
                      className="collapse"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          You can subscribe directly through our official
                          website by selecting a suitable service plan and
                          completing the registration and payment process.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="according-item">
                    <h5>
                      <a
                        href="#according-8"
                        data-bs-toggle="collapse"
                        className="title-according collapsed"
                      >
                        Do you handle client Demat or trading accounts? <span />
                      </a>
                    </h5>
                    <div
                      id="according-8"
                      className="collapse"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          No. We do not handle client Demat or trading accounts.
                          All investment decisions and executions are carried
                          out independently by the investor.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="according-item">
                    <h5>
                      <a
                        href="#according-9"
                        data-bs-toggle="collapse"
                        className="title-according collapsed"
                      >
                        How much profit can I expect from your services?{" "}
                        <span />
                      </a>
                    </h5>
                    <div
                      id="according-9"
                      className="collapse"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          We do not assure or guarantee profits. Returns depend
                          on market conditions, individual risk appetite, and
                          execution by the investor.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="according-item">
                    <h5>
                      <a
                        href="#according-10"
                        data-bs-toggle="collapse"
                        className="title-according collapsed"
                      >
                        Are there any risks associated with stock
                        recommendations? <span />
                      </a>
                    </h5>
                    <div
                      id="according-10"
                      className="collapse"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          Yes. Equity markets involve risk, including potential
                          capital loss. Our research highlights risks, but
                          investors must assess suitability before taking
                          decisions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="according-item">
                    <h5>
                      <a
                        href="#according-11"
                        data-bs-toggle="collapse"
                        className="title-according collapsed"
                      >
                        How frequently is research provided? <span />
                      </a>
                    </h5>
                    <div
                      id="according-11"
                      className="collapse"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          Research frequency varies based on market
                          opportunities and strategy. We prioritize quality and
                          relevance over excessive updates.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="according-item">
                    <h5>
                      <a
                        href="#according-12"
                        data-bs-toggle="collapse"
                        className="title-according collapsed"
                      >
                        How can I contact your support team? <span />
                      </a>
                    </h5>
                    <div
                      id="according-12"
                      className="collapse"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          You can contact us through the official contact
                          details provided on our website, including email or
                          support forms.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="according-item">
                    <h5>
                      <a
                        href="#according-13"
                        data-bs-toggle="collapse"
                        className="title-according collapsed"
                      >
                        Do you provide investment advice or portfolio management
                        services? <span />
                      </a>
                    </h5>
                    <div
                      id="according-13"
                      className="collapse"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          No. We provide research and analysis only. We do not
                          offer personalized investment advice or portfolio
                          management services.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="according-item">
                    <h5>
                      <a
                        href="#according-14"
                        data-bs-toggle="collapse"
                        className="title-according collapsed"
                      >
                        Are there any guarantees of profit? <span />
                      </a>
                    </h5>
                    <div
                      id="according-14"
                      className="collapse"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          No. There are no guarantees or assurances of profit.
                          Equity investing is subject to market risks.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="according-item">
                    <h5>
                      <a
                        href="#according-15"
                        data-bs-toggle="collapse"
                        className="title-according collapsed"
                      >
                        Can I get a refund after payment? <span />
                      </a>
                    </h5>
                    <div
                      id="according-15"
                      className="collapse"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          Refunds, if applicable, are governed by our refund and
                          cancellation policy, available on our website. Please
                          review it carefully before subscribing.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="according-item">
                    <h5>
                      <a
                        href="#according-16"
                        data-bs-toggle="collapse"
                        className="title-according collapsed"
                      >
                        Do I need a trading account to act on your research?{" "}
                        <span />
                      </a>
                    </h5>
                    <div
                      id="according-16"
                      className="collapse"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          Yes. You will need an active trading and Demat account
                          with a registered broker to execute trades
                          independently.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="according-item">
                    <h5>
                      <a
                        href="#according-17"
                        data-bs-toggle="collapse"
                        className="title-according collapsed"
                      >
                        Do you provide trade execution services? <span />
                      </a>
                    </h5>
                    <div
                      id="according-17"
                      className="collapse"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          No. We do not provide execution services. All trades
                          are executed solely at the discretion of the investor.
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
