import React from "react";
import { Header } from "..";
import "./PageTemplate.scss";

const PageTemplate = ({ children }) => {
  return (
    <div className="page-container">
      <Header />
      {children}
    </div>
  );
};

export default PageTemplate;
