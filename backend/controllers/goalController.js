import * as Goal from '../models/goalModel.js';

export const listGoals = async (req, res) => {
  try {
    const goals = await Goal.getTasks();
    res.json(goals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const addGoal = async (req, res) => {
  try {
    const { title, description, create_date, complete_date, deadline } = req.body;
    const goal = await Goal.createGoal({ title, description, create_date, complete_date, deadline });
    res.json(goal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}