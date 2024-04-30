import React, { useState } from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const PrivateRoute = ({ children }) => {
const {user,setUser} = useContext(AuthContext)
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",user)
    // const [isAuth, setIsAuth] = useState(true)
    return user ? (
        <div>{children}</div>
    ) : <Navigate to="/about" />
}

export default PrivateRoute