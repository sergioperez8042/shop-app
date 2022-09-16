import { AxiosResponse } from "axios";
import { api } from "../api/axios";

const API_URL = "/auth/login";

interface ILoginResponse {
  token: string;
}

//Register user
const register = async (userData: any): Promise<AxiosResponse<ILoginResponse>> => {
  // console.log(userData)
  const response = await api.post(`${API_URL}`, {username:userData.name,password:userData.password});
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Login user
const login = async (userData: any) => {
  console.log(userData)
  const response = await api.post(`${API_URL}`, {username:userData.username,password:userData.password});
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};
export default authService;
