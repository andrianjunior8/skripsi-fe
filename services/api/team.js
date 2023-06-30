import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
});

const getAllTeam = async (params) => {
  return await api.get("/team/getallteam", { params });
};

const getMyTeam = async (params) => {
  return await api.get("team/getmyteam ", { params });
};

const insertTeam = async (body) => {
  return await api.post(`/team/insertteam`, body, {
    headers: {},
  });
};

const insertMember = async (body) => {
  return await api.post(`/team/insertmember`, body, {
    headers: {},
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllTeam,
  insertTeam,
  insertMember,
};
