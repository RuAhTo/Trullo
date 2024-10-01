import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import './style/style.scss'

import { AuthProvider } from './components/auth/AuthProvider'

function App() {

  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path='/'/>
        <Route path='/login'/>
        <Route path='/register'/>
        <Route path='/dashboard'/>
      </Routes>
    </AuthProvider>
    </>
  )
}

export default App
