import React from "react";
import Card from "react-bootstrap/Card";

const PostCard = ({ post }) => {
  return (
    <>
      <div className="card border-secondary mb-3" style={{ width: "18rem" }}>
        <div className="card-header">{post.user?.name}</div>
        <div className="card-body text-secondary d-flex align-items-center justify-content-between">
          <h5 className="card-title">{post.title}</h5>
          <a href={`posts/${post.id}`} style={{ textDecoration: "none" }}>
            View
          </a>
        </div>
      </div>
    </>
  );
};

export default PostCard;
