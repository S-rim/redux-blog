import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const history = useHistory();
  console.log(location.pathname);
  return (
    <header className="header">
      <Link
        to="/post"
        style={{
          textDecoration: "none",
        }}
      >
        <h1>BLOG</h1>
      </Link>

      <nav className="nav">
        <Link
          to={location.pathname === "/post" ? "/add-post" : "/post"}
          style={{
            textDecoration: "none",
          }}
        >
          <p>{location.pathname === "/post" ? "글 쓰기" : "글 목록"}</p>
        </Link>
        <button
          className="button"
          onClick={() => {
            localStorage.removeItem("accessToken");
            history.push("/");
          }}
        >
          로그아웃
        </button>
      </nav>
    </header>
  );
};

export default Header;
