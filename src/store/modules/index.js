import { combineReducers } from "redux";
import { register } from "./user/reducer";

export const rootReducer = combineReducers({
  register,
});
