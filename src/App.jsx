import { ToastContainer } from 'react-toastify';

import AppProvider from './hooks';
import Routes from './routes/routes';
import GlobalStyles from './styles/globalStyles';


function App() {
  return(
    <>
    <AppProvider>
      <Routes />
    </AppProvider>
    <GlobalStyles />
    <ToastContainer autoClose={2000} />
  </>
  )
}

export default App


