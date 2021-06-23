import { getClientAccessToken } from "./client";

export const addPost = async (data) => {
  await getClientAccessToken.post("/posts", data);
};
