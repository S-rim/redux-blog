import React from "react";

const AuthTemplate = ({ children }) => {
  return (
    <section className="auth">
      <div className="auth-box">
        <h1>BLOG</h1>
        {children}
      </div>
    </section>
  );
};

export default AuthTemplate;
