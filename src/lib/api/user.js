import { client } from "./client";

export const register = async (data) => {
  await client.post("/users", data);
};

export const login = async (data) => {
  await client.post("/auth", data);
};
