import React from 'react'
import { Route, Routes } from "react-router-dom"
//import all pages we have

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Notfount from './pages/Notfount'
import Header from './units/Header'

export default function App() {
  return (
    <>
   <Header/> 
 <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="*" element={<Notfount />} />
  </Routes>
  </>

  )
}
