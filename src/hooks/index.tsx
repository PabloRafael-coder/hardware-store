import { CartProvider } from './CartContext'
import { UserProvider } from './UserContext'
import type { ReactNode } from 'react'

interface AppProviderProps {
  children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => (
  <UserProvider>
    <CartProvider>{children}</CartProvider>
  </UserProvider>
)

export default AppProvider
