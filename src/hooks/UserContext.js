import PropTypes from 'prop-types';
import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  const putUserData = dataInfo => {
    setUserData(dataInfo);

    localStorage.setItem('hardware:user', JSON.stringify(dataInfo));
  };

  useEffect(() => {
    const getUserStorage = () => {
      const userStorage = localStorage.getItem('hardware:user');
      setUserData(JSON.parse(userStorage));
    };

    getUserStorage();
  }, []);

  const logout = async () => {
    localStorage.removeItem('hardware:user');
  };

  return (
    <UserContext.Provider value={{ putUserData, userData, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used with UserContext');
  }
  return context;
};

UserProvider.propTypes = {
  children: PropTypes.node
};
