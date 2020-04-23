import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import {About, Contact} from './index'

export const Sidebar = () => {
  return (
    <div>
      <nav>
        <Link to="/contact" className="sidebarLinks">
          contact
        </Link>
        <Link to="/about" className="sidebarLinks">
          about me
        </Link>
      </nav>
      <br />
      <div>
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route component={Contact} />
        </Switch>
      </div>
    </div>
  )
}
