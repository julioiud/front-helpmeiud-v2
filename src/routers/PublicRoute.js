import React from 'react'
import { Navigate } from 'react-router-dom'

export default function PublicRoute({ children }) {
  
 const logged = false;
  
 return (!logged)
 ? children
 : <Navigate to='/private/profile'/>
}
