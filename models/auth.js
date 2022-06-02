import apiClient from './apiClient';

const url = "/auth";

export const registerUser = async (data) => {
  const response = await apiClient.post(`${url}/register`, data);
  return response.data;
};

export const registerMerchant = async (data) => {
  const response = await apiClient.post(`${url}/registerMerchant`, data);
  return response.data;
}

export const login = async (data) => {
  const response = await apiClient.post(`${url}/login`, data);
  return response.data;
}