import { ADD_POST, GET_POST, GET_DETAIL_POST, REMOVE_POST, UPDATE_POST } from "./type";

export const post = (state = {}, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, Success: action.payload };
    case GET_POST:
      return { ...state, Success: action.payload };
    case GET_DETAIL_POST:
      return { ...state, Success: action.payload };
    case REMOVE_POST:
      return { ...state, Success: action.payload };
    case UPDATE_POST:
      return { ...state, Success: action.payload };
    default:
      return state;
  }
};
