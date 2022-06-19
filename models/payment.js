import apiClient from "./apiClient";

const url = "/payment";

export const getBalance = async () => {
  const response = await apiClient.get(url);
  return response.data;
}

export const topUpBalance = async (data) => {
  const response = await apiClient.post(url, data);
  return response.data;
}
