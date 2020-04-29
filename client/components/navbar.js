import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => (
  <div className="navBar">
    <nav>
      <div className="navLink">
        <Link to="/home/portfolio">Projects</Link>
      </div>
      <div className="navLink">
        <Link to="/home/qresume">Quarantine Resume</Link>
      </div>
      <div className="navLink">
        <Link to="/home/resume">Actual Resume</Link>
      </div>
    </nav>
  </div>
)
