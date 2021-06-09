import { REGISTER_USER } from "./type";

export const register = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, registerSuccess: action.payload };
    default:
      return state;
  }
};
