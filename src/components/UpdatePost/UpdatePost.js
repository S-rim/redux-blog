import React from "react";
import { PageTemplate } from "../Common";

const UpdatePost = () => {
  return (
    <PageTemplate>
      <section className="write-post">
        <h2 className="write-post-title">글 수정</h2>
        <input type="text" placeholder="제목" />
        <textarea placeholder="내용" />
        <button className="button">등록하기</button>
      </section>
    </PageTemplate>
  );
};

export default UpdatePost;
