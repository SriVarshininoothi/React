import { createContext } from 'react';

// 1. Declare context 
export const UserContext = createContext();

// 2. Export Provider component 
export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{}}>
      {children}
    </UserContext.Provider>
  );
};