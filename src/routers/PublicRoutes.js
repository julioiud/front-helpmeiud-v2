import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import LoginApp from '../components/login/LoginApp'
import Register from '../components/login/Register'
import NotFound from '../components/ui/NotFound'

export default function PublicRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Navigate to="/login" replace/>}/>
        <Route path='/login' element={<LoginApp />}/>
        <Route path='/register' element={<Register />}/>
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
