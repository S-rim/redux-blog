import { client } from "./client";

export const register = async (data) => {
  await client.post("/users", data);
};
