import { api } from "../api/axios";

const API_URL = "/auth/login";

//Register user
const register = async (userData: any) => {
  const response = await api.post(API_URL + userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Login user
const login = async (userData: any) => {
  const response = await api.post(API_URL + userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};


//Logout user
const logout = () =>{
  localStorage.removeItem("user");
}

const authService = {
  register,
  logout,
  login
};
export default authService;
