import apiClient from "./apiClient";

const url = "/product";

export const getAllProducts = async () => {
  const response = await apiClient.get(url);
  console.log(response.data);
  return response.data;
};

export const getProductDetail = async (id) => {
  const response = await apiClient.get(`${url}/${id}`);
  console.log(response.data);
  return response.data;
};

export const searchProduct = async (name) => {
  const response = await apiClient.post(`${url}/search`, { name });
  console.log(response.data);
  return response.data;
};

export const getAllMerchantProducts = async () => {
  const response = await apiClient.get(`${url}/merchant`);
  console.log(response.data);
  return response.data;
}

export const deleteProduct = async (id) => {
  const response = await apiClient.delete(`${url}/${id}`, {data: { id }});
  return response.data;
};

export const addProduct = async (data) => {
  const response = await apiClient.post(url, data);
  return response.data;
};

export const editProduct = async (id, data) => {
  const response = await apiClient.put(`${url}/${id}`, data);
  return response.data;
};