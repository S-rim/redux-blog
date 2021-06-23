import { ADD_POST } from "./type";
import { addPost } from "../../../lib/api/post";

export const writePost = async (data) => {
  const postData = addPost(data)
  return {
    type: ADD_POST,
    payload: postData,
  };
};
