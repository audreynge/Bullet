import pool from 'pg';

export const getUserGoals = async (userId) => {
  try {
    const response = await pool.query('SELECT * FROM user_goals WHERE user_id = $1', [userId]);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}