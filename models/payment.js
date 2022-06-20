import apiClient from "./apiClient";

const url = "/payment";

export const getBalance = async () => {
  const response = await apiClient.get(url);
  return response.data;
};

export const topUpBalance = async (data) => {
  const response = await apiClient.post(`${url}/top-up`, data);
  return response.data;
};

export const decreaseBalance = async (data) => {
  const response = await apiClient.post(`${url}/decrease-balance`, data);
  return response.data;
};
