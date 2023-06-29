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

const updatePaymentFlag = async (params) => {
  return await api.get("/sale/updatepaymentflag", { params });
};

const getTicket = async (params) => {
  return await api.get("/sale/getticket", { params });
};

const getSaleThisMonth = async (params) => {
  return await api.get("/sale/getsalethismonth", { params });
};

export default {
  checkAvail,
  insertSale,
  getHistory,
  updateAccept,
  getTicket,
  getSaleThisMonth,
  updatePaymentFlag,
};
