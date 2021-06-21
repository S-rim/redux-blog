import React from "react";
import { Login } from "../../components";
import useChangeInput from "../../lib/hooks/useChangeInputs";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/modules/user/actions";
import { SuccessToast, ErrorToast } from "../../lib/toast";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useChangeInput({ userId: "", password: "" });

  const onSubmitLogin = () => {
    dispatch(loginUser(loginData))
      .then(() => {
        SuccessToast("로그인이 정상적으로 완료되었습니다.");
      })
      .catch((err) => {
        switch (err.response.status) {
          case 401:
            ErrorToast("비밀번호가 틀렸습니다.");
            break;
          case 404:
            ErrorToast("없는 계정입니다. 회원가입을 해주세요.");
            break;
          case 500:
            ErrorToast("서버 에러입니다.");
            break;
          default:
            ErrorToast("에러가 발생했습니다. 다시 시도하세요.");
            break;
        }
      });
  };
  return (
    <>
      <Login setLoginData={setLoginData} onSubmitLogin={onSubmitLogin} />
    </>
  );
};

export default LoginContainer;
