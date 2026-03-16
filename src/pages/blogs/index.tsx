import Blogs1 from "@/components/blogs/Blogs1";
import Breadcumb from "@/components/common/Breadcumb";
import MetaComponent from "@/components/common/MetaComponent";
import Newsletter from "@/components/otherPages/Newsletter";

const metadata = {
  title: "Blog Articles | InvestEase Research Insights & Investor Education",
  description:
    "Explore InvestEase Research blog articles covering investor education, market insights, research quality, income planning, and disciplined long-term investing.",
};


export default function BlogPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-title style-1 bg-img-4 blog-hero-premium">
        <div className="tf-container">
          <div className="page-title-content">
            <Breadcumb pageName="Blog" />
            <h2 className="title-page-title">Blog Articles</h2>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="blog-details-main-content">
          <Blogs1 />
        </div>
        <Newsletter />
      </div>
    </>
  );
}
