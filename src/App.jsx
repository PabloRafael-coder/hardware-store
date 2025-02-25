import AppProvider from './hooks'
import Routes from './routes/routes'
import GlobalStyles from './styles/globalStyles'
import { Toaster } from 'sonner'

function App() {
  return (
    <>
      <Toaster autoClose={2000} />
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyles />
    </>
  )
}

export default App
