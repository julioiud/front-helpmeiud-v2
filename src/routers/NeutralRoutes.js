import React from 'react'
import About from '../components/About'
import { Route, Routes } from 'react-router-dom'

export default function NeutralRoutes() {
  return (
    <Routes>
        <Route path='/about' element={<About />} />
    </Routes>
  )
}
