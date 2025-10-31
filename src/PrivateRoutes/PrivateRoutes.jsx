import React, { Children, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, useLocation } from 'react-router';

function PrivateRoutes({children}) {
    const {user} = useContext(AuthContext);
    const location = useLocation()
    if(user){
        return children
    }
  return <Navigate state={location.pathname} to='/login'></Navigate>
}

export default PrivateRoutes
