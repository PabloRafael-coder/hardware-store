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
    const responseStorage = localStorage.getItem('hardware:user');

    console.log(JSON.parse(responseStorage));
  }, []);

  return (
    <UserContext.Provider value={{ putUserData, userData }}>
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
