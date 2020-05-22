import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => (
  <div className="navBar">
    <nav>
      <div className="navLink">
        <Link to="/home/portfolio">PORTFOLIO</Link>
      </div>
      <div className="navLink">
        <Link to="/home/coding">CODING</Link>
      </div>
      <div className="navLink">
        <Link to="/home/resume">RESUME</Link>
      </div>
    </nav>
  </div>
)
