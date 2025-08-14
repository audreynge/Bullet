import pool from '../db.js';

export const getUsers = async () => {
  try {
    const response = await pool.query('SELECT * FROM users');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const getUser = async (id) => {
  try {
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}