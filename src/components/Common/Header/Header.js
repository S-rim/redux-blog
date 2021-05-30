import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link
        to="post"
        style={{
          textDecoration: "none",
        }}
      >
        <h1>BLOG</h1>
      </Link>

      <nav className="nav">
        <Link
          to="/post"
          style={{
            textDecoration: "none",
          }}
        >
          <p>글 목록</p>
        </Link>
        <button className="button">로그아웃</button>
      </nav>
    </header>
  );
};

export default Header;
