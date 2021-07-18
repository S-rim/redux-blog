import React from "react";
import { PageTemplate } from "../Common";
import PostItem from "./PostItem";

const PostMain = ({ prevPage, nextPage, page, posts, deletePost }) => {
  return (
    <PageTemplate>
      <section className="post-section">
        {posts && !(typeof post == "string") ? (
          <>
            {posts.map((post) => {
              return <PostItem key={post.id} post={post} deletePost={deletePost} />;
            })}
          </>
        ) : (
          <h1>추천 목록을 불러오는 데에 실패했습니다. 다시 시도하세요.</h1>
        )}
      </section>
      <section className="page">
        <div className="page-wrapper">
          <div className="page-item" onClick={prevPage}>
            {"<"}
          </div>
          <div className="page-item color">{page + 1}</div>
          <div className="page-item" onClick={nextPage}>
            {">"}
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default PostMain;
