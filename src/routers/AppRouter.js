import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Footer from '../components/ui/Footer'
import NavBar from '../components/ui/NavBar'
import NeutralRoute from './NeutralRoute'
import NeutralRoutes from './NeutralRoutes'
import PublicRoute from './PublicRoute'
import PublicRoutes from './PublicRoutes'

export default function AppRouter() {
  return (
    <>
    <NavBar />
    <main className='flex-shrink-0 mb-7'>
        <Routes>
            <Route 
                path='/*'
                element={
                    <PublicRoute>
                        <PublicRoutes />
                    </PublicRoute>
                }
            />
            <Route 
                path='public/*'
                element={
                    <NeutralRoute>
                        <NeutralRoutes />
                    </NeutralRoute>
                }
            />
        </Routes>
    </main>
    <Footer />
    </>
  )
}
