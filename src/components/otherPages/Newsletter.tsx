import { Mail, Send } from "lucide-react";
import "./newsletter.scss";

export default function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-box">
          <div className="newsletter-left">
            <div className="icon-wrap">
              <Mail size={28} />
            </div>

            <div>
              <h3 className="newsletter-title">
                Stay Ahead With <span>Market Insights</span>
              </h3>
              <p>
                Get research-backed trading & investment updates directly to
                your inbox.
              </p>
            </div>
          </div>

          <div className="newsletter-right">
            <button type="submit" className="primary-btn ">
              <span>Subscribe Now</span>
              <Send size={18} className="btn-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
