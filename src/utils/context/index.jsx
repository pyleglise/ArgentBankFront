import { useState, createContext } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const login = (email, password) => {
    // console.log("Demarrage fonction login avec : "+name);
    setUser((user) => ({
      email: email,
      password: password,
      auth: true,
    }))
  }
  const logout = () => {
    setUser((user) => ({
      email: '',
      password: '',
      auth: false,
    }))
  }
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}
