import { Link, useParams } from "react-router-dom";

import Details1 from "@/components/blogs/Details1";
import Breadcumb from "@/components/common/Breadcumb";
import { detailedBlogPosts } from "@/data/blogs";
import MetaComponent from "@/components/common/MetaComponent";
import Newsletter from "@/components/otherPages/Newsletter";
import type { DetailedBlogPost } from "@/types/blogs";

export default function BlogDetailsPage1() {
  const params = useParams();
  const id = params.id;
  const blog: DetailedBlogPost =
    detailedBlogPosts.filter((post) => String(post.id) === String(id))[0] ||
    detailedBlogPosts[0];

  const metadata = {
    title: `${blog.title} | InvestEase Research`,
    description: blog.excerpt,
  };

  return (
    <>
      <MetaComponent meta={metadata} />

      <div className="page-title style-1 bg-img-4 blog-hero-premium">
        <div className="tf-container">
          <div className="page-title-content">
            <Breadcumb pageName={blog.category} />
            <h2 className="title-page-title">{blog.title}</h2>
            <div className="meta">
              <div className="meta-content">
                <div className="icon">
                  <i className="icon-calendarBlank" />
                </div>
                <div className="text body-2">
                  {blog.date.month} {blog.date.day}, {blog.date.year}
                </div>
              </div>
              <div className="meta-content">
                <div className="icon">
                  <i className="icon-user" />
                </div>
                <div className="text body-2">{blog.author}</div>
              </div>
              <div className="meta-content">
                <div className="icon">
                  <i className="icon-timer" />
                </div>
                <div className="text body-2">{blog.readTime}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-content tf-spacing-2 blog-details-main-content">
        <Details1 blog={blog} />
      </div>

      <Newsletter />
    </>
  );
}
