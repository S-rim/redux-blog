import { REGISTER_USER, LOGIN_USER } from "./type";
import { register, login } from "../../../lib/api/user";

export const registerUser = async (data) => {
  const userData = register(data);
  return {
    type: REGISTER_USER,
    payload: userData,
  };
};

export const loginUser = async (data) => {
  const userData = login(data);
  return {
    type: LOGIN_USER,
    payload: userData,
  };
};
