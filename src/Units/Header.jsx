import React from 'react'
import { Route, Routes, Link } from "react-router-dom"


export default function Header() {
  return (
    <div> 
        <nav>
        <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link to="/" className="nav-link" aria-current="page">Home</Link>
  </li>
  <li className="nav-item">
    <Link to="/About" className="nav-link">About</Link>
  </li>
  <li className="nav-item">
    <Link to="/Contact" className="nav-link">Contact</Link>
  </li>
 
</ul>
     </nav>
     </div>
  )
}
