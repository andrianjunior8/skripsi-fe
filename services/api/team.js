import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
});

const getAllTeam = async (params) => {
  return await api.get("/team/getallteam", { params });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllTeam,
};
