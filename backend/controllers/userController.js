import * as User from '../models/userModel.js';

export const listUsers = async (req, res) => {
  try {
    const users = await User.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const getUser = async (req, res) => {
  try {
    const user = await User.getUser(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}