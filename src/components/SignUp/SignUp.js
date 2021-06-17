import React from "react";
import { Link } from "react-router-dom";
import { AuthTemplate } from "../Common";

const SignUp = ({ setRegisterData, onSubmitRegister }) => {
  return (
    <AuthTemplate>
      <form>
        <div>
          <p>아이디</p>
          <input type="text" name="userId" onChange={setRegisterData} />
        </div>
        <div>
          <p>비밀번호</p>
          <input type="password" name="password" onChange={setRegisterData} autoComplete="current-password" />
        </div>
      </form>
      <button onClick={onSubmitRegister}>회원가입</button>

      <Link to="/">
        <p className="link">
          이미 <strong>계정이 있으신가요?</strong>
        </p>
      </Link>
    </AuthTemplate>
  );
};

export default SignUp;
