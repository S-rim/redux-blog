import { ADD_POST, GET_POST, GET_DETAIL_POST, REMOVE_POST, UPDATE_POST } from "./type";
import { addPost, getPost, detailPost, deletePost, editPost } from "../../../lib/api/post";

export const writePost = async (data) => {
  const postData = addPost(data);
  return {
    type: ADD_POST,
    payload: postData,
  };
};

export const getPostList = async (page) => {
  const postData = getPost(page);
  return {
    type: GET_POST,
    payload: postData,
  };
};

export const getDetailPost = async (postId) => {
  const postData = detailPost(postId);
  return {
    type: GET_DETAIL_POST,
    payload: postData,
  };
};

export const removePost = async (postId) => {
  const data = deletePost(postId);
  return {
    type: REMOVE_POST,
    payload: data,
  };
};

export const updatePost = async (postId, data) => {
  const postData = editPost(postId, data);
  return {
    type: UPDATE_POST,
    payload: postData,
  };
};
