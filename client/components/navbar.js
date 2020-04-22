import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => (
  <div className="navBar">
    <nav>
      {/* <Link to="/home">home</Link> */}
      <Link to="/portfolio">portfolio</Link>
      <Link to="/coding">learning to code</Link>
      {/* <Link to="/ukulele">ukulele</Link> */}
      <Link to="/bicycle">like riding a bike</Link>
      {/* <Link to="/reading">reading list</Link> */}
    </nav>
  </div>
)
