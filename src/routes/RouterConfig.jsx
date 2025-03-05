import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from '../components/landing-page/LandingPage'
import FileDrop from '../components/file-drop/FileDrop'

const RouterConfig = () => {
  return (
   <Routes>
    <Route path='/' element={<LandingPage />}/>
    <Route path='import-files' element={<FileDrop />} />
   </Routes>
  )
}

export default RouterConfig
