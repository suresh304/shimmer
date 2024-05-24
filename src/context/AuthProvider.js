import { createContext, useState } from "react";

import React from 'react'
export const AuthContext = createContext({
})

const AuthProvider = ({ children }) => {
  const [user,setUser] = useState()
  return (
    <AuthContext.Provider value={{ user: user, setUser: setUser }}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider