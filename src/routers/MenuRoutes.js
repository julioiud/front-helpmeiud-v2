import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../components/About'
import LoginApp from '../components/login/LoginApp'
import Register from '../components/login/Register'

export default function MenuRoutes() {
  return (
    <Routes>
        <Route path='/login' element={<LoginApp />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/public/about' element={<About/>} />
    </Routes>
  )
}
