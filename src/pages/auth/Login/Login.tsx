import { useState } from "react";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom"; 


export default function Login() {
    const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [otpMode, setOtpMode] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showForgot, setShowForgot] = useState(false);

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginCard}>
        <div className={styles.title}>Login</div>

        {/* Email */}
        <div className={styles.inputGroup}>
          <input
            type="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        {!otpMode && (
          <>
            <div className={styles.inputGroup}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className={styles.eyeIcon}
                onClick={() => setShowPassword(!showPassword)}
              >
                👁
              </span>
            </div>

            <button className={styles.primaryBtn}>Login</button>

            <div className={styles.optionsRow}>
              <label>
                <input type="checkbox" /> Keep me logged
              </label>
              <span
                className={styles.link}
                onClick={() => setShowForgot(!showForgot)}
              >
                Forget Password?
              </span>
            </div>
          </>
        )}

        <div
          className={`${styles.forgotSection} ${showForgot ? styles.open : ""}`}
        >
          <div className={styles.forgotInner}>
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Enter your email" />
            </div>

            <button className={styles.primaryBtn}>Send Reset Link</button>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider}>OR LOGIN WITH</div>

        {/* OTP */}
        <div className={styles.inputGroup}>
          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className={styles.primaryBtn}>
          {otpSent ? "Verify OTP" : "Send OTP"}
        </button>

        <div className={styles.registerText}>Don't have an account?</div>

        <button
          className={styles.outlineBtn}
          onClick={() => navigate("/register")}
        >
          Register Now
        </button>
      </div>
    </div>
  );
}
