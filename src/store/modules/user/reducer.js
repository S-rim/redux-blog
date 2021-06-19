import { REGISTER_USER, LOGIN_USER } from "./type";

export const register = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, registerSuccess: action.payload };
    default:
      return state;
  }
};

export const login = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    default:
      return state;
  }
};
