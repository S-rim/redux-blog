import React from "react";
import { Link } from "react-router-dom";
import { AuthTemplate } from "../Common";

const Login = ({ setLoginData, onSubmitLogin }) => {
  return (
    <AuthTemplate>
      <form>
        <div>
          <p>아이디</p>
          <input type="text" name="userId" onChange={setLoginData} />
        </div>
        <div>
          <p>비밀번호</p>
          <input type="password" name="password" onChange={setLoginData} />
        </div>
      </form>
      <button onClick={onSubmitLogin}>로그인</button>
      <Link to="/sign-up">
        <p className="link">
          아직 <strong>계정이 없으신가요?</strong>
        </p>
      </Link>
    </AuthTemplate>
  );
};

export default Login;
