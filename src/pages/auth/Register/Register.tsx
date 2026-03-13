import styles from "./Register.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Country, State } from "country-state-city";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Register | InvestEase Research (SEBI RA)",
  description:
    "Create your InvestEase Research account to get access to research-driven market insights and investor services.",
};

export default function Register() {
  const navigate = useNavigate();
  const [phoneCode, setPhoneCode] = useState("+91");

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    password: "",
    state: "",
    address: "",
    pan: "",
    whatsapp: "",
    day: "",
    month: "",
    year: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("REGISTER DATA:", form);
  };
  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [states, setStates] = useState(State.getStatesOfCountry("IN"));

  const countries = Country.getAllCountries();

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const iso = e.target.value;

    const country = countries.find((c) => c.isoCode === iso);

    setSelectedCountry(iso);
    setStates(State.getStatesOfCountry(iso));
    setPhoneCode(`+${country?.phonecode}`);
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 80 }, (_, i) => currentYear - i);

  return (
    <>
      <MetaComponent meta={metadata} />
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.title}>
            Register <span>Now</span>
          </div>

        <div className={styles.grid}>
          <input
            className={styles.input}
            placeholder="Full Name"
            name="name"
            onChange={handleChange}
          />
          {/* Country */}
          <select
            className={styles.input}
            onChange={handleCountryChange}
            value={selectedCountry}
          >
            {countries.map((c) => (
              <option key={c.isoCode} value={c.isoCode}>
                {c.name}
              </option>
            ))}
          </select>

          <input
            className={styles.input}
            placeholder="Company Name (Optional)"
            name="company"
            onChange={handleChange}
          />
          {/* State */}
          <select className={styles.input} name="state" onChange={handleChange}>
            <option value="">Select State</option>
            {states.map((s) => (
              <option key={s.isoCode} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>

          <input
            className={styles.input}
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
          />
          <input
            className={styles.input}
            placeholder="Address"
            name="address"
            onChange={handleChange}
          />

          <input
            className={styles.input}
            placeholder="Create a new password"
            name="password"
            onChange={handleChange}
          />
          <input
            className={styles.input}
            placeholder="PAN No."
            name="pan"
            onChange={handleChange}
          />

          <div className={styles.whatsappBlock}>
            <div className={styles.whatsappLabel}>Receive stock alerts on WhatsApp</div>
            <div className={styles.phoneWrap}>
              <div className={styles.countryCode}>
                {phoneCode}
              </div>

              <input
                className={`${styles.input} ${styles.whatsappInput}`}
                placeholder="Whatsapp Number"
                name="whatsapp"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.dobBlock}>
            <div className={styles.dobLabel}>Date of Birth (as per PAN)</div>
            <div className={styles.dobRow}>
              {/* Day */}
              <select
                className={styles.input}
                name="day"
                value={form.day}
                onChange={handleChange}
              >
                <option value="">Day</option>
                {days.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>

              {/* Month */}
              <select
                className={styles.input}
                name="month"
                value={form.month}
                onChange={handleChange}
              >
                <option value="">Month</option>
                {months.map((m, i) => (
                  <option key={i} value={m}>
                    {m}
                  </option>
                ))}
              </select>

              {/* Year */}
              <select
                className={styles.input}
                name="year"
                value={form.year}
                onChange={handleChange}
              >
                <option value="">Year</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button className={styles.primaryBtn} onClick={handleSubmit}>
            Create Account
          </button>
        </div>

          <div className={styles.bottomDivider}></div>

          <div className={styles.bottomText}>Already have an account?</div>

          <button className={styles.outlineBtn} onClick={() => navigate("/login")}>
            Login Here
          </button>
        </div>
      </div>
    </>
  );
}
