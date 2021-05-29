import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>BLOG</h1>
      <nav className="nav">
        <Link
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
