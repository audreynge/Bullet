import axios from 'axios';

const BACKEND_URL = 'http://localhost:5000';

export const getUsers = async () => {
  const response = await axios.get(`${BACKEND_URL}/users`);
  return response.data;
};

export const getUser = async (id) => {
  const response = await axios.get(`${BACKEND_URL}/users/${id}`);
  return response.data;
};