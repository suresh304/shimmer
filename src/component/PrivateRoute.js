import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const PrivateRoute = ({ children }) => {
const {user} = useContext(AuthContext)
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",user)
    return user?.user ? (
        <div>{children}</div>
    ) : <Navigate to="/home" />
}

export default PrivateRoute