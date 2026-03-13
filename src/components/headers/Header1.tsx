import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Send } from "lucide-react";

import Nav from "./Nav";
import NavOnepage from "./NavOnepage";
// import CartLength from "../common/CartLength";
// import SearchButton from "./SearchButton";
import { debounce } from "@/utils/debounce";
import "./header1.scss";

export default function Header1({ onepage = false }) {
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 56) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    const debouncedScroll = debounce(handleScroll, 50); // tweak as needed

    handleScroll(); // initial
    window.addEventListener("scroll", debouncedScroll);

    return () => {
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, []);

  return (
    <header
      className={`header style-1 style-absolute header-fixed header-premium ${
        isFixed ? "is-fixed" : ""
      } `}
      id="header"
    >
      <div className="tf-container w-1870">
        <div className="row">
          <div className="col-12">
            <div className="header-content">
              <div className="header-left">
                <div className="logo">
                  <Link to={`/`}>
                    <img
                      alt=""
                      src="/image/logo/InvestEase-White.png"
                      width={169}
                      height={40}
                    />
                  </Link>
                </div>
                <nav className="main-menu">
                  <ul
                    className={` menu-primary-menu ${
                      onepage ? "navigation" : ""
                    } `}
                  >
                    {onepage ? <NavOnepage /> : <Nav />}
                  </ul>
                </nav>
              </div>
              <div className="header-right">
                <div className="nav-btn">
                  <Link
                    to={`/login`}
                    className="header-premium-btn header-premium-btn-secondary"
                  >
                    <span>Login</span>
                  </Link>
                </div>
                <div className="nav-btn">
                  <Link
                    to={`/contact-us`}
                    className="header-premium-btn"
                  >
                    <span>Get Started</span>
                    <Send size={16} className="btn-icon" />
                  </Link>
                </div>
                <div className="nav-icon">
                  <div className="mobile-button">
                    <a href="#canvasMobile" data-bs-toggle="offcanvas">
                      <span />
                      <span />
                      <span />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
