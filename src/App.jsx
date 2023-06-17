import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom"

import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound';
import  Header from './Units/Header'

export default function Router() {
  return (
    <div>
      <Header/>
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/NotFound" element={<NotFound />} />
    </Routes>
    
      </div>
  )
}
