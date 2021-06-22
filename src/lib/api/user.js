import { client } from "./client";

export const register = async (data) => {
  return await client.post("/users", data);
};

export const login = async (data) => {
  return await client.post("/auth", data);
};
