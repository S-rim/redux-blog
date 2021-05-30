import React from "react";

const PostItem = () => {
  return (
    <article className="post-item">
      <h1>글 제목어쩌구</h1>
      <p className="post-content">글내용</p>
      <div className="post-info">
        <p className="post-info-date">2020-05-29</p>
        <div className="post-update">
          <p className="post-update-button">수정</p>
          <p>삭제</p>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
