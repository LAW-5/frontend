import apiClient from "./apiClient";

const url = "/cart";

export const getAllCart = async () => {
  const response = await apiClient.get(url);
  return response.data;
};

export const addToCart = async (data) => {
  const response = await apiClient.post(url, data);
  return response.data;
};

export const deleteFromCart = async (id) => {
  const response = await apiClient.delete(url, {data: { id }});
  return response.data;
};
