import * as Group from '../models/groupModel.js';

export const listGroups = async () => {
  try {
    const response = await Group.getGroups();
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const getGroup = async (id) => {
  try {
    const response = await Group.getGroup(id);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const joinGroup = async (groupId, userId) => {
  try {
    const response = await Group.joinGroup(groupId, userId);
    return response;
  } catch (error) {
    console.error(error);
  }
}