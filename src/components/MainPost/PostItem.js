import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ post, deletePost }) => {
  const { id, title, content } = post;

  return (
    <article className="post-item">
      <h1>{title}</h1>
      <p className="post-content">{content}</p>
      <div className="post-info">
        <p className="post-info-date">2020-05-29</p>
        <div className="post-update">
          <Link
            to={{
              pathname: `/edit/${id}`,
              state: id,
            }}
            style={{
              textDecoration: "none",
            }}
          >
            <p className="post-update-button">수정</p>
          </Link>

          <p
            onClick={() => {
              deletePost(id);
            }}
          >
            삭제
          </p>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
