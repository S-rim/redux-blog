import { getClientAccessToken } from "./client";

export const addPost = async (data) => {
  await getClientAccessToken.post("/posts", data);
};

export const getPost = async (page) => {
  return await getClientAccessToken.get(`/posts?page=${page}`);
};

export const deletePost = async (postId) => {
  return await getClientAccessToken.delete(`/posts/${postId}`);
};

export const detailPost = async (postId) => {
  return await getClientAccessToken.get(`/posts/${postId}`);
};

export const editPost = async (postId, data) => {
  return await getClientAccessToken.put(`/posts/${postId}`, data);
};
