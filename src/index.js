import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import { UserProvider } from './hooks/UserContext';
import Routes from './router/router';
import GlobalStyles from './styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <UserProvider>
      <Routes />
    </UserProvider>
    <GlobalStyles />
    <ToastContainer autoClose={2000} />
  </>
);
