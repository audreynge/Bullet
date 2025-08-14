import pool from '../db.js';

export const getUserGoals = async (userId) => {
  try {
    const response = await pool.query('SELECT * FROM user_goals WHERE user_id = $1', [userId]);
    return response.rows;
  } catch (error) {
    console.error(error);
  }
}