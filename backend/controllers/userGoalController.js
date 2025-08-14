import * as UserGoal from '../model/userGoalModel.js';

export const listUserGoals = async (req, res) => {
  try {
    const userGoals = await UserGoal.getUserGoals(req.params.id);
    res.json(userGoals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}