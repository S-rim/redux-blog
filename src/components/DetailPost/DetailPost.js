import React from "react";
import { PageTemplate } from "../Common";

const DetailPost = ({ postData }) => {
  const { date, title, content } = postData;
  
  return (
    <PageTemplate>
      <section className="write-post">
        <h1>{title}</h1>
        <p className="write-post-date">{date}</p>
        <p className="write-post-content">{content}</p>
      </section>
    </PageTemplate>
  );
};

export default DetailPost;
