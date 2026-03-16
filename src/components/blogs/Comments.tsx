import type { BlogComment } from "@/types/blogs";

export default function Comments({
  comments,
}: {
  comments?: BlogComment[];
}) {
  const items = comments ?? [];

  if (!items.length) {
    return null;
  }

  return (
    <div className="wg-comment comment-content">
      <h4 className="title-wg-comment">
        {String(items.length).padStart(2, "0")} Comments
      </h4>
      {items.map((comment, index) => (
        <div
          className={`comment-item${comment.isReply ? " reply" : ""}`}
          key={`${comment.name}-${index}`}
        >
          <div className="image">
            <img
              src={comment.avatar}
              alt={comment.name}
              className="lazyload"
              width={90}
              height={90}
            />
          </div>
          <div className="comment-item-content">
            <div className="top">
              <div className="info">
                <a href="#" className="name title">
                  {comment.name}
                </a>
                <div className="time">{comment.time}</div>
              </div>
            </div>
            <div className="desc body-2">{comment.text}</div>
            <a href="#comment-form" className="tf-btn-reply">
              Reply
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
