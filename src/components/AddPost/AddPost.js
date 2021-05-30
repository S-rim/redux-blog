import React from "react";
import { PageTemplate } from "../Common";

const AddPost = () => {
  return (
    <PageTemplate>
      <section className="write-post">
        <h2 className="write-post-title">글 작성</h2>
        <input type="text" placeholder="제목" />
        <textarea placeholder="내용" />
        <button className="button">등록하기</button>
      </section>
    </PageTemplate>
  );
};

export default AddPost;
