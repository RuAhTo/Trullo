import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './components/auth/AuthProvider'

//Pages
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import RegisterUser from './pages/Register'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'

function App() {

  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<RegisterUser/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </AuthProvider>
    </>
  )
}

export default App
