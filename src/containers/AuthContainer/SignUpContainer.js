import React from "react";
import { SignUp } from "../../components";
import useChangeInput from "../../lib/hooks/useChangeInputs";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/modules/user/actions";
import { ErrorToast, SuccessToast } from "../../lib/toast";

const SignUpContainer = () => {
  const dispatch = useDispatch();
  const [registerData, setRegisterData] = useChangeInput({ userId: "", password: "" });

  const onSubmitRegister = () => {
    dispatch(registerUser(registerData))
      .then(() => {
        SuccessToast("가입이 정상적으로 완료되었습니다");
      })
      .catch((err) => {
        switch (err.response.status) {
          case 409:
            ErrorToast("이미 있는 계정입니다.");
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
      <SignUp setRegisterData={setRegisterData} onSubmitRegister={onSubmitRegister} />
    </>
  );
};

export default SignUpContainer;
