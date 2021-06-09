import React from "react";
import { SignUp } from "../../components";
import useChangeInput from "../../lib/hooks/useChangeInputs";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/modules/user/actions";

const SignUpContainer = () => {
  const dispatch = useDispatch();
  const [registerData, setRegisterData] = useChangeInput({ id: "", password: "" });

  const onSubmitRegister = () => {
    dispatch(registerUser(registerData))
      .then(() => {
        console.log(registerData);
        alert("가입이 정상적으로 완료되었습니다");
      })
      .catch((err) => {
        console.log(err);
        console.log(registerData);
      });
  };

  return (
    <>
      <SignUp setRegisterData={setRegisterData} onSubmitRegister={onSubmitRegister} />
    </>
  );
};

export default SignUpContainer;
