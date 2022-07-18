import "./NavStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="header">
        <Link to={"/"}>
          <h1>Portfolio</h1>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </Link>
        
    </div>
  )
}

export default Navbar