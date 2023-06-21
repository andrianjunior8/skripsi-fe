import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
});

const checkAvail = async (params) => {
  return await api.get("/sale/checkavail", { params });
};

const insertSale = async (body) => {
  return await api.post(`/sale/insertsale`, body, {
    headers: {},
  });
};

const getHistory = async (params) => {
  return await api.get("/sale/gethistory", { params });
};

const updateAccept = async (params) => {
  return await api.get("/sale/updateaccept", { params });
};

export default {
  checkAvail,
  insertSale,
  getHistory,
  updateAccept,
};
