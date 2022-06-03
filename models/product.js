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
