import Blogs1 from "@/components/blogs/Blogs1";
import Breadcumb from "@/components/common/Breadcumb";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Market Insights | InvestEase Research",
  description:
    "Read InvestEase Research insights on market structure, investor discipline, research services, and long-term investing.",
};

export default function BlogRightSidebarPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-title style-1 bg-img-4 blog-hero-premium">
        <div className="tf-container">
          <div className="page-title-content">
            <Breadcumb pageName="Insights" />
            <h2 className="title-page-title">Market Insights & Research Notes</h2>
            <div className="sub-title body-2">
              Process-driven articles from InvestEase Research on market behavior,
              investor discipline, and better decision-making.
            </div>
          </div>
        </div>
      </div>
      <div className="main-content tf-spacing-2 blog-details-main-content">
        <Blogs1 />
      </div>
    </>
  );
}
