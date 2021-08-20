import { REGISTER_USER, LOGIN_USER } from "./type";

export const user = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, registerSuccess: action.payload };
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    default:
      return state;
  }
};