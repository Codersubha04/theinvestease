import { Link, useLocation } from "react-router-dom";

import { serviceLinks, moreLinks } from "@/data/menu";

import type { MenuLink } from "@/types/menuLink";

export default function Nav() {
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
    <>
      <li
        className={`menu-item ${pathname === "/" ? "current-menu-item" : ""}`}
      >
        <Link to="/" className="item-link">
          Home
        </Link>
      </li>

      <li
        className={`menu-item ${pathname === "/about-us" ? "current-menu-item" : ""}`}
      >
        <Link to="/about-us" className="item-link">
          About InvestEase
        </Link>
      </li>

      <li
        className={`menu-item menu-item-has-children position-relative ${
          isMenuParentActive(serviceLinks) ? "current-menu-item" : ""
        }`}
      >
        <span className="item-link">Services</span>
        <ul className="sub-menu">
          {serviceLinks.map((item, index) => (
            <li
              key={index}
              className={`sub-menu-item ${
                isMenuActive(item) ? "current-item" : ""
              }`}
            >
              <Link to={item.href} className="item-link-2">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      <li
        className={`menu-item ${
          pathname.startsWith("/blogs") ? "current-menu-item" : ""
        }`}
      >
        <Link to="/" className="item-link">
          Blogs
        </Link>
      </li>

      <li
        className={`menu-item menu-item-has-children position-relative   ${
          isMenuParentActive(moreLinks) ? "current-menu-item" : ""
        } `}
      >
        <span className="item-link">More</span>

        <ul className="sub-menu">
          {moreLinks.map((item, index) => (
            <li
              className={`sub-menu-item  ${
                isMenuActive(item) ? "current-item" : ""
              } `}
              key={index}
            >
              <Link to={item.href} className={`item-link-2`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      <li
        className={`menu-item   ${
          isMenuActive({ href: "/contact-us" }) ? "current-menu-item" : ""
        } `}
      >
        <Link to={`/contact-us`} className={`item-link `}>
          Contact
        </Link>
      </li>
    </>
  );
}
