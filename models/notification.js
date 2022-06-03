import apiClient from './apiClient';

const url = "/notification";

export const getAllNotification = async () => {
  const response = await apiClient.get(`${url}/list`);
  return response.data;
}
