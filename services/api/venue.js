import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
});

const getVenue = async (params) => {
  return await api.get("/venue/getvenue", { params });
};

const getAllVenue = async () => {
  return await api.get("/venue/getallvenue");
};

const createVenueDetail = async (body) => {
  return await api.post(`/venue/createvenuedetail`, body, {
    headers: {},
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllVenue,
  getVenue,
  createVenueDetail,
};
