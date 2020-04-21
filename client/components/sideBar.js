import React from 'react'
import {About} from './about'
import {Contact} from './contact'
import {Link, Route} from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div>
      <nav>
        <Link to="/about" className="sidebarLinks">
          about me
        </Link>
        <Link to="/contact" className="sidebarLinks">
          contact
        </Link>
      </nav>
      <hr />
      <div>
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </div>
    </div>
  )
}
