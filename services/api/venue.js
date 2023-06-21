import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
});

const getVenue = async (params) => {
  return await api.get("/venue/getvenue", { params });
};

const getPopularVenue = async () => {
  return await api.get("/venue/getpopularvenue");
};

const getTotalTipeVenue = async () => {
  return await api.get("/venue/gettotaltipevenue");
};

const getAllVenue = async () => {
  return await api.get("/venue/getallvenue");
};

const createVenueDetail = async (body) => {
  return await api.post(`/venue/createvenuedetail`, body, {
    headers: {},
  });
};

const searchVenue = async (params) => {
  return await api.get("/venue/searchvenue", { params });
};

const deleteTDVenue = async (params) => {
  return await api.get("/venue/deletetdvenue", { params });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllVenue,
  getPopularVenue,
  getVenue,
  createVenueDetail,
  getTotalTipeVenue,
  searchVenue,
  deleteTDVenue,
};
