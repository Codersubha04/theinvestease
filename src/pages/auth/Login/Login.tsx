import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import styles from "./Login.module.scss";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Login | InvestEase Research (SEBI RA)",
  description:
    "Log in to your InvestEase Research account to access research insights, updates, and client support.",
};

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [otpMode] = useState(false);
  const [otpSent] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgot, setShowForgot] = useState(false);
  const [isLeavingForRegister, setIsLeavingForRegister] = useState(false);

  const handleRegisterRedirect = () => {
    if (isLeavingForRegister) return;
    setIsLeavingForRegister(true);

    const goToRegister = () => navigate("/register");
    const transitionDoc = document as Document & {
      startViewTransition?: (cb: () => void) => { finished: Promise<void> };
    };

    if (transitionDoc.startViewTransition) {
      transitionDoc.startViewTransition(goToRegister);
      return;
    }

    window.setTimeout(goToRegister, 190);
  };

  return (
    <>
      <MetaComponent meta={metadata} />
      <div
        className={`${styles.loginWrapper} ${isLeavingForRegister ? styles.routeLeaving : ""}`}
      >
        <div className={styles.loginCard}>
          <div className={styles.title}>
            Login <span>Now</span>
          </div>

        <div className={styles.inputGroup}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {!otpMode && (
          <>
            <div className={styles.inputGroup}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className={styles.eyeIcon}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button className={styles.primaryBtn}>
              <span>Login</span>
              <ArrowRight size={16} className={styles.btnIcon} />
            </button>

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

            <button className={styles.primaryBtn}>
              <span>Send Reset Link</span>
              <ArrowRight size={16} className={styles.btnIcon} />
            </button>
          </div>
        </div>

        <div className={styles.divider}>OR LOGIN WITH</div>

        <div className={styles.inputGroup}>
          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className={styles.primaryBtn}>
          <span>{otpSent ? "Verify OTP" : "Send OTP"}</span>
          <ArrowRight size={16} className={styles.btnIcon} />
        </button>

          <div className={styles.registerText}>Don't have an account?</div>

          <button className={styles.outlineBtn} onClick={handleRegisterRedirect}>
            <span>Register Now</span>
            <ArrowRight size={16} className={styles.btnIcon} />
          </button>
        </div>
      </div>
    </>
  );
}
