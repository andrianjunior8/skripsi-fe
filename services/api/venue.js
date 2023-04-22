import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
});

const getVenue = async (params) => {
  return await api.get("/venue/getvenue", { params });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getVenue,
};
