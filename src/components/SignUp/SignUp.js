import React from "react";
import { Link } from "react-router-dom";
import AuthTemplate from "../Common/AuthTemplate/AuthTemplate";

const SignUp = () => {
  return (
    <AuthTemplate>
      <form>
        <div>
          <p>아이디</p>
          <input type="text" />
        </div>
        <div>
          <p>비밀번호</p>
          <input type="password" />
        </div>
      </form>
      <button type="submit">회원가입</button>

      <Link to="/">
        <p className="link">
          이미 <strong>계정이 있으신가요?</strong>
        </p>
      </Link>
    </AuthTemplate>
  );
};

export default SignUp;
