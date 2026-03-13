import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Send,
  Youtube,
} from "lucide-react";
import "./topbar1.scss";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61587700070114",
    icon: Facebook,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@InvestEaseSchool",
    icon: Youtube,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/investease_research/",
    icon: Instagram,
  },
  {
    label: "Telegram",
    href: "https://t.me/InvestEase_Official",
    icon: Send,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/investease-research/",
    icon: Linkedin,
  },
  {
    label: "Twitter/X",
    href: "https://x.com/the_investease",
    icon: Twitter,
  },
];

export default function Topbar1() {
  return (
    <div className="top-bar top-bar-premium">
      <div className="tf-container w-1870">
        <div className="row">
          <div className="col-12">
            <div className="top-bar-inner">
              <div className="tf-tb-left">
                <div className="top-bar-content">
                  <i className="icon-MapPin" />
                  <p className="caption-1">
                    4/82 Seth Bagan Road, Kolkata, West Bengal, India
                  </p>
                </div>
                <div className="top-bar-content">
                  <i className="icon-Envelope" />
                  <a href="mailto:support@investease.in" className="caption-1 color-white">
                    support@investease.in
                  </a>
                </div>
              </div>
              <div className="tf-tb-right">
                <div className="top-bar-content tf-phone-topbar">
                  <div className="icon">
                    <i className="icon-PhoneCall" />
                  </div>
                  <a href="tel:+917980561156" className="text-btn">+91-7980561156</a>
                </div>
                <div className="tf-tb-social">
                  <ul className="tf-social">
                    {socialLinks.map(({ label, href, icon: Icon }) => (
                      <li className="item" key={label}>
                        <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
                          <div className="icon">
                            <Icon size={16} strokeWidth={2.1} />
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
