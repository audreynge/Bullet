import pool from '../db.js';

/**
 * Gets all goals.
 * @returns a list of goals
 */
export const getGoals = async () => {
    try {
        const response = await pool.query('SELECT * FROM goals');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

/**
 * Creates a goal in the goals table and the user_goals table.
 * @param {object} goal the goal to be created
 * @param {number} userId the id of the user who created the goal
 */
export const createGoal = async (goal, userId) => {
    const { title, description, create_date, complete_date, deadline } = goal;
    try {
        const goalData = await pool.query('INSERT INTO goals (title, description, create_date, complete_date, deadline, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id', [title, description, create_date, complete_date, deadline, userId]);
        const goalId = goalData.rows[0].id;
        await pool.post('INSERT INTO user_goals (user_id, goal_id) VALUES ($1, $2)', [userId, goalId]);

        console.log(`Goal "${title}" created succesfully`)
    } catch (error) {
        console.error('Error creating goal: ', error.message);
    }
}