import apiClient from './apiClient';

const url = "/order";

const ORDER_STATUS = ["Menunggu Konfirmasi", "Dikirim", "Selesai"]

export const getOrderUser = async () => {
  const response = await apiClient.get(`${url}/user`);
  return response.data;
};

export const getOrderMerchant = async () => {
  const response = await apiClient.get(`${url}/merchant`);
  return response.data;
};

// export const nextOrderStatus = async (id, currentStatus) => {
//   const data = {};
//   data.id = id;
//   data.orderStatus = 
//   const response = await apiClient.put(url, data);
//   return response.data;
// };