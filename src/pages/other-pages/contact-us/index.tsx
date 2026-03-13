import Contact from "@/components/otherPages/Contact";
import NewsLetterForm from "@/components/otherPages/Newsletter";
import Map from "@/components/otherPages/Map";

import Breadcumb from "@/components/common/Breadcumb";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Contact InvestEase Research (SEBI RA) | Get In Touch",
  description:
    "Contact InvestEase Research for equity research queries, advisory support, and investor education. Reach our team for transparent, compliance-focused communication.",
};
export default function ContactPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-title style-1 bg-img-13">
        <div className="tf-container position-relative">
          <div className="page-title-content">
            <Breadcumb pageName="Contact Us" />
            <h2 className="title-page-title">Contact Us</h2>
          </div>
        </div>
      </div>
      <div className="main-content">
        <Contact />
        <Map />
        <NewsLetterForm />
        {/* <Locations /> */}
      </div>
    </>
  );
}
