import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
});

const getLogin = async (params) => {
  return await api.get("/core/getlogin", { params });
};

const createAccountUser = async (body) => {
  return await api.post(`/core/createuser`, body, {
    headers: {},
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getLogin,
  createAccountUser,
};
