import React from "react";
import { PageTemplate } from "../Common";

const AddPost = ({ setPostData, onAddPost }) => {
  return (
    <PageTemplate>
      <section className="write-post">
        <h2 className="write-post-title">글 작성</h2>
        <input type="text" placeholder="제목" name="title" onChange={setPostData} />
        <textarea placeholder="내용" name="content" onChange={setPostData} />
        <button className="button" onClick={onAddPost}>
          등록하기
        </button>
      </section>
    </PageTemplate>
  );
};

export default AddPost;
