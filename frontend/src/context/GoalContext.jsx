import { createContext } from 'react';
import { getGoalsByUser, createGoal, updateGoal, deleteGoal } from '../api/goalAPI';

const GoalContext = createContext(undefined);

export const GoalProvider = ({ children }) => {
  return (
    <GoalContext.Provider value={{ getGoalsByUser, createGoal, updateGoal, deleteGoal }}>
      {children}
    </GoalContext.Provider>
  );
};

export default GoalContext;