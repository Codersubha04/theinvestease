// import Benefits from "@/components/common/Benefits";
import About from "@/components/common/About";
import History from "@/components/otherPages/History";
import Features from "@/components/common/Features2";
// import Testimonials from "@/components/otherPages/Testimonials";
// import Cta from "@/components/common/Cta2";
import Awards from "@/components/common/Awards";
import Breadcumb from "@/components/common/Breadcumb";
import MetaComponent from "@/components/common/MetaComponent";
import Mentor from "@/components/common/Mentor";
import GoogleReviews from "@/components/otherPages/GoogleReviews";
import Newsletter from "@/components/otherPages/Newsletter";
import WhyChooseUs from "@/components/otherPages/whyChooseUs";

const metadata = {
  title: "About InvestEase Research (SEBI RA) | Our Mission & Approach",
  description:
    "Learn about InvestEase Research, a SEBI-registered Research Analyst firm focused on transparent, research-driven equity insights and long-term investor education.",
};
export default function AboutUsPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-title style-1 bg-img-4">
        <div className="tf-container">
          <div className="page-title-content">
            <Breadcumb pageName="About Us" />
            <h2 className="title-page-title">About Us</h2>
            {/* <div className="sub-title body-2">
              Discover our mission to empower clients with expert solutions for
              confident,
              <br />
              sustainable growth and success.
            </div> */}
          </div>
        </div>
      </div>
      <div className="main-content">
        {/* <Benefits /> */}
        <About />
        <History />
        <Mentor />
        <WhyChooseUs />
        <Features hasBorder parentClass="section-why-choose h-2 page-about" />

        {/* <Testimonials /> */}
        {/* <Cta /> */}
        <Awards />
        <GoogleReviews />
        <Newsletter />
      </div>
    </>
  );
}
