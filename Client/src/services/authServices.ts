import api from "./apiConfig";
import { SignUpPayload, LoginPayload } from "../types/userTypes";

export const signUp = async (signUpData: SignUpPayload) => {
  try {
    const response = await api.post("/auth/register", signUpData);
    return response.data.data.user;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

export const login = async (LoginData: LoginPayload) => {
  try {
    const response = await api.post("/auth/login", LoginData);
    return response.data.data.user;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await api.post("/auth/logout");
    return response.data.status;
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
};
