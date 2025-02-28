import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

interface UserProfile {
  email: string
  name: string
  admin: boolean
  token: string
}

interface UserContextProvider {
  putUserData: (dataInfo: UserProfile) => void
  userData: UserProfile
  logout: () => void
}

const UserContext = createContext({} as UserContextProvider)

interface UserContextProviderProps {
  children: ReactNode
}

export function UserProvider({ children }: UserContextProviderProps) {
  const [userData, setUserData] = useState({} as UserProfile)

  function putUserData(profileData: UserProfile) {
    localStorage.setItem('hardware:user', JSON.stringify(profileData))
    setUserData(profileData)
  }

  useEffect(() => {
    const userStorage = localStorage.getItem('hardware:user')

    if (userStorage) {
      setUserData(JSON.parse(userStorage))
    }
  }, [])

  async function logout() {
    localStorage.removeItem('hardware:user')
  }

  return (
    <UserContext.Provider value={{ putUserData, userData, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used with UserContext')
  }
  return context
}
