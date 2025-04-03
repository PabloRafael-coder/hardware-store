import { Toaster } from 'sonner'
import { ThemeProvider } from 'styled-components'

import AppProvider from './hooks'
import Routes from './routes/routes'
import GlobalStyles from './styles/globalStyles'
import { defaultThemes } from './styles/themes/default'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultThemes}>
        <Toaster />
        <AppProvider>
          <Routes />
        </AppProvider>
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}

export default App
