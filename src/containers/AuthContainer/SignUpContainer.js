import React from "react";
import { SignUp } from "../../components";
import useChangeInput from "../../lib/hooks/useChangeInputs";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/modules/user/actions";

const SignUpContainer = () => {
  const dispatch = useDispatch();
  const [registerData, setRegisterData] = useChangeInput({ userId: "", password: "" });

  const onSubmitRegister = () => {
    dispatch(registerUser(registerData))
      .then(() => {
        alert("가입이 정상적으로 완료되었습니다");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <SignUp setRegisterData={setRegisterData} onSubmitRegister={onSubmitRegister} />
    </>
  );
};

export default SignUpContainer;
