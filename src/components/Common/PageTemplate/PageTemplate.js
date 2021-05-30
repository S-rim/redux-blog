import React from "react";
import { Header } from "..";

const PageTemplate = ({ children }) => {
  return (
    <div className="page-container">
      <Header />
      {children}
    </div>
  );
};

export default PageTemplate;
