import { api } from "./api";
import { User } from "../types";

export const UsersService = {
  fetchUsersList: async (): Promise<User[]> => {
    const { data } = await api.get("/users");
    return data;
  },
  fetchUserInfo: async (id: string): Promise<User> => {
    const { data } = await api.get(`/users/${id}`);
    return data;
  },
};
