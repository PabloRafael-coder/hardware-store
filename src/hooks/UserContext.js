import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const user = {
    name: 'Pablo Rafael',
    age: 23
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used with UserContext');
  }
};

UserProvider.propTypes = {
  children: PropTypes.node
};
