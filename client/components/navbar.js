import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => (
  <div className="navBar">
    <nav>
      <div id="navLink1">
        {/* <button type="button"></button> */}
        <Link to="/home/portfolio">PORTFOLIO</Link>
      </div>
      <div id="navLink2">
        <Link to="/home/coding">CODING</Link>
      </div>
      <div id="navLink3">
        <Link to="/home/resume">RESUME</Link>
      </div>
      {/* <div id="navLink4">
        <Link to="/home/fun">JUST FOR FUN</Link>
      </div> */}
    </nav>
  </div>
)
