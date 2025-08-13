import { createContext } from 'react';
import { getUsers, getUser } from '../api/userAPI';

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ getUsers, getUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;