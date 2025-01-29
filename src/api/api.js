import axios from "axios";

const API_URL = "http://localhost:4000/api/transactions";

export const fetchTransactions = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addTransaction = async (transaction) => {
  const res = await axios.post(API_URL, transaction);
  return res.data;
};
