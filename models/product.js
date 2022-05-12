import apiClient from './apiClient';

const url = "/products";

export const getAllProducts = async () => {
  const response = await apiClient.get(url);
  console.log(response.data);
  return response.data;
};
