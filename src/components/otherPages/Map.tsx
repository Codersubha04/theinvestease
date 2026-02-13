import "./map.scss";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Send,
} from "lucide-react";

import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";

export default function ContactMap() {
  const [office, setOffice] = useState("main");

  const mainMap =
    "https://www.google.com/maps?q=4/82+Seth+Bagan+Road,+Kolkata,+West+Bengal,+India&output=embed";

  const branchMap =
    "https://www.google.com/maps?q=Webel+IT+Park,+Kharagpur,+West+Bengal,+India&output=embed";

  const recaptchaRef = useRef<InstanceType<typeof ReCAPTCHA> | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = recaptchaRef.current?.getValue();

    if (!token) {
      alert("Please verify you are not a robot.");
      return;
    }

    console.log("Captcha Token:", token);

    recaptchaRef.current?.reset();
  };

  return (
    <section className="contact-map-section">
      <div className="container">
        <div className="row g-5 align-items-stretch">
          {/* LEFT SIDE */}
          <div className="col-lg-6">
            <div className="contact-form-box">
              <span className="section-badge">Get In Touch</span>

              <h2>Connect With Our Advisory Team</h2>
              <p>
                Fill out the form below and our research team will respond
                within 24 hours.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="input-field">
                      <input type="text" placeholder="Full Name" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-field">
                      <input type="email" placeholder="Email Address" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-field">
                      <input type="text" placeholder="Phone Number" />
                    </div>
                  </div>

                  <div className="col-md-6 whatsapp-field">
                    <label>Is WhatsApp available on this number?</label>
                    <div className="radio-group">
                      <label>
                        <input type="radio" name="whatsapp" /> Yes
                      </label>
                      <label>
                        <input type="radio" name="whatsapp" /> No
                      </label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="input-field">
                      <input type="text" placeholder="Subject" />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="input-field">
                      <textarea placeholder="Your Message" rows={5}></textarea>
                    </div>
                  </div>

                  <div className="col-12 captcha-submit">
                    <ReCAPTCHA
                      sitekey="6Lf5M2ksAAAAALsneUBgDYpRaIKfAXkJPWf7-XUA"
                      ref={recaptchaRef}
                    />

                    <button type="submit" className="primary-btn">
                      <span>Submit</span>
                      <Send size={18} className="btn-icon" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6">
            <div className="location-box">
              <h3>Our Location</h3>
              <p>Visit our offices for professional financial consultation.</p>

              <div className="office-toggle">
                <button
                  className={office === "main" ? "active" : ""}
                  onClick={() => setOffice("main")}
                >
                  Main Office
                </button>

                <button
                  className={office === "branch" ? "active" : ""}
                  onClick={() => setOffice("branch")}
                >
                  Branch Office
                </button>
              </div>

              <div className="map-wrapper">
                <iframe
                  src={office === "main" ? mainMap : branchMap}
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <div className="social-section">
                <h5>Follow Us</h5>
                <div className="social-icons">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Send size={18} />
                  </a>

                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Instagram size={18} />
                  </a>

                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Facebook size={18} />
                  </a>

                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={18} />
                  </a>

                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Youtube size={18} />
                  </a>

                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
