import { REGISTER_USER } from "./type";
import { register } from "../../../lib/api/user";

export const registerUser = async (data) => {
  const userData = register(data);
  return {
    type: REGISTER_USER,
    payload: userData,
  };
};
