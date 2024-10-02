import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './components/auth/AuthProvider'

//Pages
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </AuthProvider>
    </>
  )
}

export default App
