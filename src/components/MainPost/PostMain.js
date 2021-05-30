import React from "react";
import { PageTemplate } from "../Common";
import PostItem from "./PostItem";

const PostMain = () => {
  return (
    <PageTemplate>
      <section className="post-section">
        <PostItem />
        <PostItem />
        <PostItem />
      </section>
      <section className="page">
        <div className="page-wrapper">
          <div className="page-item">{"<"}</div>
          <div className="page-item color">1</div>
          <div className="page-item">{">"}</div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default PostMain;
