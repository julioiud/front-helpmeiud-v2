import React from 'react'
import About from '../components/About'
import { Route, Routes } from 'react-router-dom'
import MapView from '../components/maps/MapView'
import NotFound from '../components/ui/NotFound'

export default function NeutralRoutes() {
  return (
    <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/map' element={<MapView />} />
        <Route path="*" element={<NotFound />}/>
    </Routes>
  )
}
