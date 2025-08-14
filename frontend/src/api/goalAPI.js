import axios from 'axios';

const BACKEND_URL = 'http://localhost:5000';

export const getGoalsByUser = async (userId) => {
  const response = await axios.get(`${BACKEND_URL}/goals/${userId}`);
  return response.data;
}

export const createGoal = async (goal) => {
  const response = await axios.post(`${BACKEND_URL}/goals`, goal);
  return response.data;
}

export const updateGoal = async (goalId, goal) => {
  const response = await axios.put(`${BACKEND_URL}/goals/${goalId}`, goal);
  return response.data;
}

export const deleteGoal = async (goalId) => {
  const response = await axios.delete(`${BACKEND_URL}/goals/${goalId}`);
  return response.data;
}