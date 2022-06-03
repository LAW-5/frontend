import apiClient from './apiClient';

const url = "/cart";

export const getAllCart = async () => {
  const response = await apiClient.get(url);
  return response.data;
};

export const addToCart = async (data) => {
  const response = await apiClient.post(url, data);
  return response.data;
};