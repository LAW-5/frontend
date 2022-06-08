import apiClient from './apiClient';

const url = "/order";

export const getOrderUser = async () => {
  const response = await apiClient.get(`${url}/user`);
  return response.data;
};

export const getOrderMerchant = async () => {
  const response = await apiClient.get(`${url}/merchant`);
  return response.data;
};

export const editOrderStatus = async (id, status) => {
  const data = {};
  data.id = id;
  data.orderStatus = status;
  const response = await apiClient.put(url, data);
  return response.data;
};