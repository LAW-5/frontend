import apiClient from './apiClient';

const url = "/promo";

export const getAllPromo = async (merchantId) => {
  const response = await apiClient.get(`${url}/${merchantId}`);
  return response.data;
};

export const createPromo = async (data) => {
  const response = await apiClient.post(url, data);
  return response.data;
};

export const usePromo = async (id) => {
  const response = await apiClient.post(`${url}/use`, { id });
  return response.data;
};

export const deletePromo = async (id) => {
  const response = await apiClient.delete(url, {data: { id }});
  return response.data;
};