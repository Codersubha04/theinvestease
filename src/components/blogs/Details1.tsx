import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Send,
  Twitter,
} from "lucide-react";

import { detailedBlogPosts } from "@/data/blogs";
import type { DetailedBlogPost } from "@/types/blogs";
import CommentForm from "./CommentForm";
import Comments from "./Comments";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61587700070114",
    icon: Facebook,
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
    label: "Twitter/X",
    href: "https://x.com/the_investease",
    icon: Twitter,
  },
];

export default function Details1({ blog }: { blog: DetailedBlogPost }) {
  const recommendedPosts = useMemo(
    () =>
      detailedBlogPosts.filter((item) => blog.recommendedIds.includes(item.id)),
    [blog.recommendedIds],
  );

  const sidebarPosts = useMemo(() => {
    const remainingPosts = detailedBlogPosts.filter(
      (item) =>
        item.id !== blog.id && !recommendedPosts.some((post) => post.id === item.id),
    );

    return [...recommendedPosts, ...remainingPosts];
  }, [blog.id, recommendedPosts]);

  const sidebarGroups = useMemo(() => {
    const groups: DetailedBlogPost[][] = [];

    for (let index = 0; index < sidebarPosts.length; index += 2) {
      groups.push(sidebarPosts.slice(index, index + 2));
    }

    if (groups.length > 1 && groups[groups.length - 1].length === 1) {
      const lastGroup = groups.pop();
      if (lastGroup?.length) {
        groups[groups.length - 1] = [...groups[groups.length - 1], ...lastGroup];
      }
    }

    return groups;
  }, [sidebarPosts]);

  const [activeSidebarPage, setActiveSidebarPage] = useState(0);

  useEffect(() => {
    setActiveSidebarPage(0);
  }, [blog.id]);

  const activeSidebarPosts = sidebarGroups[activeSidebarPage] ?? sidebarGroups[0] ?? [];

  return (
    <div className="tf-container tf-spacing-3">
      <div className="row rg-60">
        <div className="col-xl-9">
          <div className="blog-content blog-details-content mr-50">
            <div className="image-blog">
              <img
                src={blog.imgSrc}
                alt={blog.title}
                className="lazyload"
                width={910}
                height={512}
              />
            </div>
            <div className="desc-blog">
              {blog.intro.map((paragraph, index) => (
                <p className="body-2" key={index}>
                  {paragraph}
                </p>
              ))}
            </div>

            {blog.keyTakeaways?.length ? (
              <div className="desc-blog">
                <h5 className="title-desc">Key Takeaways</h5>
                <ul className="list-disc body-2">
                  {blog.keyTakeaways.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="list-desc">
              {blog.sections.map((section, index) => (
                <div className="desc-blog" key={index}>
                  <h5 className="title-desc">{section.heading}</h5>
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p className="body-2" key={paragraphIndex}>
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets?.length ? (
                    <ul className="list-disc body-2">
                      {section.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.subSections?.length
                    ? section.subSections.map((subSection) => (
                        <div className="blog-subsection" key={subSection.title}>
                          <h6 className="title-sub-desc">{subSection.title}</h6>
                          {subSection.paragraphs?.map((paragraph, paragraphIndex) => (
                            <p className="body-2" key={`${subSection.title}-${paragraphIndex}`}>
                              {paragraph}
                            </p>
                          ))}
                          {subSection.bullets?.length ? (
                            <ul className="list-disc body-2">
                              {subSection.bullets.map((bullet, bulletIndex) => (
                                <li key={`${subSection.title}-${bulletIndex}`}>{bullet}</li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      ))
                    : null}
                </div>
              ))}
            </div>

            <div className="tab-list">
              <div className="left tab-item">
                <div className="text">Tag:</div>
                <div className="tabs-list g-12">
                  {blog.tags.map((tag) => (
                    <span className="tabs-item caption-1" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="right tab-item">
                <div className="text">Share this post:</div>
                <ul className="tf-social radius-50 style-border g-12 color-on-suface-container">
                  {socialLinks.map(({ label, href, icon: Icon, iconClass }) => (
                    <li className="item" key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        title={label}
                      >
                        <div className="icon">
                          {iconClass ? (
                            <i className={iconClass} style={{ fontSize: "15px", lineHeight: 1 }} />
                          ) : Icon ? (
                            <Icon size={16} strokeWidth={2.1} />
                          ) : null}
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="desc-blog blog-faq-section">
              <h5 className="title-desc">Frequently Asked Questions (FAQs)</h5>
              <div className="accordion blog-faq-accordion" id="blogFaqAccordion">
                {blog.faqs.map((faq, index) => (
                  <div className="accordion-item" key={faq.question}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button${index === 0 ? "" : " collapsed"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#blog-faq-${index}`}
                        aria-expanded={index === 0}
                        aria-controls={`blog-faq-${index}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`blog-faq-${index}`}
                      className={`accordion-collapse collapse${index === 0 ? " show" : ""}`}
                      data-bs-parent="#blogFaqAccordion"
                    >
                      <div className="accordion-body body-2">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Comments comments={blog.comments} />
            <CommentForm />
          </div>
        </div>

        <div className="col-xl-3">
          <div className="tf-sidebar">
            <div className="sidebar-item sidebar-content sidebar-recent-posts">
              <h6 className="title-content">Recommended Articles</h6>
              <div className="blog-sidebar-page-group">
                {activeSidebarPosts.map((post, index) => (
                  <div
                    className="blog-card-new blog-card-sidebar wow fadeInUp"
                    data-wow-delay={`${index * 0.08}s`}
                    style={{ animationDelay: `${index * 0.08}s` }}
                    key={post.id}
                  >
                    <Link
                      className="blog-img-wrap blog-img-wrap-sidebar"
                      to={`/blog-details-1/${post.id}`}
                    >
                      <img
                        src={post.imgSrc}
                        alt={post.title}
                        className="lazyload"
                        width={post.imgWidth}
                        height={post.imgHeight}
                      />
                    </Link>
                    <div className="blog-card-content blog-card-content-sidebar">
                      <div className="blog-date-pill">
                        {post.date.month} {post.date.day}, {post.date.year}
                      </div>
                      <h6 className="blog-title-new blog-title-sidebar">
                        <Link to={`/blog-details-1/${post.id}`}>{post.title}</Link>
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
              {sidebarGroups.length > 1 ? (
                <div className="blog-sidebar-pagination">
                  {sidebarGroups.map((_, index) => (
                    <button
                      type="button"
                      className={`blog-sidebar-page${index === activeSidebarPage ? " active" : ""}`}
                      key={index}
                      onClick={() => setActiveSidebarPage(index)}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="sidebar-item sidebar-content sidebar-tags">
              <h6 className="title-content">Tags</h6>
              <div className="tabs-list">
                {blog.tags.map((tag) => (
                  <span className="tabs-item caption-1" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
