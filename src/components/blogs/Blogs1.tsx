import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { detailedBlogPosts } from "@/data/blogs";

export default function Blogs1() {
  const postsPerPage = 9;
  const totalPages = Math.ceil(detailedBlogPosts.length / postsPerPage);
  const [activePage, setActivePage] = useState(0);

  const visiblePosts = useMemo(() => {
    const startIndex = activePage * postsPerPage;
    return detailedBlogPosts.slice(startIndex, startIndex + postsPerPage);
  }, [activePage]);

  useEffect(() => {
    setActivePage(0);
  }, []);

  return (
    <section className="section-new h-1 tf-spacing-12 section-one-page blogs-premium">
      <div className="tf-container">
        <div className="row rg-24">
          {visiblePosts.map((post, index) => (
            <div className="col-md-6 col-xl-4" key={post.id}>
              <div
                className="blog-card-new wow fadeInUp"
                data-wow-delay={`${index * 0.08}s`}
              >
                <Link className="blog-img-wrap" to={`/blog-details-1/${post.id}`}>
                  <img
                    src={post.imgSrc}
                    alt={post.title}
                    className="lazyload"
                    width={post.imgWidth}
                    height={post.imgHeight}
                  />
                </Link>
                <div className="blog-card-content">
                  <div className="blog-date-pill">
                    {post.date.month} {post.date.day}, {post.date.year}
                  </div>
                  <h4 className="blog-title-new">
                    <Link to={`/blog-details-1/${post.id}`}>{post.title}</Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        {totalPages > 1 ? (
          <div className="blog-listing-pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                type="button"
                key={index}
                className={`blog-listing-page-btn${index === activePage ? " active" : ""}`}
                onClick={() => setActivePage(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
