import React from 'react'
import { Routes, Route } from 'react-router-dom'

import FileDrop from '../components/file-drop/FileDrop'
import Homepage from '../components/homepage/Homepage'
import LandingPage from '../components/landing-page/LandingPage'
import LoginPage from '../components/login-page/LoginPage'
import Signup from '../components/create-user/Signup'

const RouterConfig = () => {
  return (
   <Routes>
    <Route path='/' element={<LandingPage />}/>
    <Route path='home' element={<Homepage />}/>
    <Route path='import-files' element={<FileDrop />} /> 
    <Route path='login' element={<LoginPage />} /> 
    <Route path='signup' element={<Signup />} /> 
   </Routes>
  )
}

export default RouterConfig
