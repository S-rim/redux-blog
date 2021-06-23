import { ADD_POST } from "./type";

export const addPost = (state = {}, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, Success: action.payload };
    default:
      return state;
  }
};
