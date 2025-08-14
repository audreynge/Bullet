import pool from 'pg';

export const getGroups = async () => {
  try {
    const response = await pool.query('SELECT * FROM groups');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const getGroup = async (id) => {
  try {
    const response = await pool.query('SELECT * FROM groups WHERE id = $1', [id]);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const joinGroup = async (groupId, userId) => {
  try {
    const response = await pool.query('INSERT INTO group_members (group_id, user_id) VALUES ($1, $2)', [groupId, userId]);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}