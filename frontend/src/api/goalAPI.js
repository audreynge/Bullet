import axios from 'axios';

const BACKEND_URL = 'http://localhost:5000';

export const getGoalsByUser = async (userId) => {
  const response = await axios.get(`${BACKEND_URL}/goals/${userId}`);
  return response.data;
}

export const createGoal = async (task) => {
  const response = await axios.post(`${BACKEND_URL}/goals`, task);
  return response.data;
}

export const updateGoal = async (taskId, task) => {
  const response = await axios.put(`${BACKEND_URL}/goals/${taskId}`, task);
  return response.data;
}

export const deleteGoal = async (taskId) => {
  const response = await axios.delete(`${BACKEND_URL}/goals/${taskId}`);
  return response.data;
}