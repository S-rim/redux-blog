import React from "react";
import { Login } from "../../components";
import useChangeInput from "../../lib/hooks/useChangeInputs";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/modules/user/actions";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useChangeInput({ userId: "", password: "" });

  const onSubmitLogin = () => {
    dispatch(loginUser(loginData))
      .then(() => {
        alert("로그인이 정상적으로 완료되었습니다");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Login setLoginData={setLoginData} onSubmitLogin={onSubmitLogin} />
    </>
  );
};

export default LoginContainer;
