import { Link, useLocation } from "react-router-dom";

import { serviceLinks, moreLinks } from "@/data/menu";

import type { MenuLink } from "@/types/menuLink";

export default function MobileMenu() {
  const { pathname } = useLocation();
  const isMenuActive = (link: MenuLink) => {
    const currentPath = pathname?.split("/")[1];
    const hrefPath = link.href?.split("/")[1];
    const onePagePath = link.onePage?.split("/")[1];

    return hrefPath === currentPath || onePagePath === currentPath;
  };
  const isMenuParentActive = (menu: MenuLink[]) => {
    return menu.some((elm) => isMenuActive(elm));
  };
  return (
    <div
      className="offcanvas offcanvas-start mobile-nav-wrap"
      id="canvasMobile"
    >
      <div className="inner-mobile-nav">
        <div className="top-header-mobi">
          <div className="logo-mobile">
            <Link to={`/`}>
              <img
                alt=""
                src="/image/logo/InvestEase.png"
                width={169}
                height={40}
              />
            </Link>
          </div>
          <button
            className="mobile-nav-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="black"
              x="0px"
              y="0px"
              width="20px"
              height="20px"
              viewBox="0 0 122.878 122.88"
              enableBackground="new 0 0 122.878 122.88"
              xmlSpace="preserve"
            >
              <g>
                <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" />
              </g>
            </svg>
          </button>
        </div>
        <nav className="mobile-main-nav">
          <ul id="menu-mobile" className="menu">
            {/* Home */}
            <li
              className={`menu-item ${pathname === "/" ? "current-menu-mobile-item" : ""}`}
            >
              <Link to="/">Home</Link>
            </li>
            {/* About */}
            <li
              className={`menu-item ${pathname === "/about-us" ? "current-menu-mobile-item" : ""}`}
            >
              <Link to="/about-us">About InvestEase</Link>
            </li>
            {/* Services */}
            <li
              className={`menu-item menu-item-has-children-mobile ${
                isMenuParentActive(serviceLinks)
                  ? "current-menu-mobile-item"
                  : ""
              }`}
            >
              <a
                href="#m-services"
                data-bs-toggle="collapse"
                className="collapsed"
              >
                Services
              </a>

              <div
                id="m-services"
                className="collapse"
                data-bs-parent="#menu-mobile"
              >
                <ul className="sub-menu-mobile">
                  {serviceLinks.map((item, i) => (
                    <li
                      key={i}
                      className={
                        isMenuActive(item) ? "current-menu-mobile-item" : ""
                      }
                    >
                      <Link to={item.href}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {/* Blogs */}
            <li
              className={`menu-item ${
                pathname.startsWith("/blogs") ? "current-menu-mobile-item" : ""
              }`}
            >
              <Link to="/blogs">Blogs</Link>
            </li>
            {/* More */}
            <li
              className={`menu-item menu-item-has-children-mobile ${
                isMenuParentActive(moreLinks) ? "current-menu-mobile-item" : ""
              }`}
            >
              <a href="#m-more" data-bs-toggle="collapse" className="collapsed">
                More
              </a>

              <div
                id="m-more"
                className="collapse"
                data-bs-parent="#menu-mobile"
              >
                <ul className="sub-menu-mobile">
                  {moreLinks.map((item, i) => (
                    <li
                      key={i}
                      className={
                        isMenuActive(item) ? "current-menu-mobile-item" : ""
                      }
                    >
                      <Link to={item.href}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {/* Contact */}
            <li
              className={`menu-item ${
                isMenuActive({ href: "/contact-us" })
                  ? "current-menu-mobile-item"
                  : ""
              }`}
            >
              <Link to="/contact-us">Contact</Link>
            </li>
          </ul>
          <div className="contact-mobile">
            <h6 className="title-contact-mobile">Contact Info</h6>
            <div className="content-contact-moblile">
              <a href="#">
                <i className="icon-MapPin" /> 4/82 Seth Bagan Road, Kolkata, West Bengal, India
              </a>
            </div>
            <div className="content-contact-moblile">
              <a href="#">
                <i className="icon-Envelope" /> support@investease.in
              </a>
            </div>
            <div className="content-contact-moblile">
              <a href="#">
                <i className="icon-PhoneCall" /> +91-7980561156
              </a>
            </div>
            <div className="content-contact-moblile">
              <ul className="tf-social style-border radius-50 g-8 style-2 color-on-suface-container">
                <li className="item">
                  <a href="#">
                    <div className="icon">
                      <i className="icon-messenger" />
                    </div>
                  </a>
                </li>
                <li className="item">
                  <a href="#">
                    <div className="icon">
                      <i className="icon-x" />
                    </div>
                  </a>
                </li>
                <li className="item">
                  <a href="#">
                    <div className="icon">
                      <i className="icon-ig1" />
                    </div>
                  </a>
                </li>
                <li className="item">
                  <a href="#">
                    <div className="icon">
                      <i className="icon-skype" />
                    </div>
                  </a>
                </li>
                <li className="item">
                  <a href="#">
                    <div className="icon">
                      <i className="icon-telegram" />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
