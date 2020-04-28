import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import {About, Contact} from './index'

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <Link to="/home/contact" className="sidebarLinks">
          contact
        </Link>
        <Link to="/home/about" className="sidebarLinks">
          about me
        </Link>
      </nav>
      <br />
      <div>
        <Switch>
          <Route path="/home/contact" component={Contact} />
          <Route path="/home/about" component={About} />
          <Route component={About} />
        </Switch>
      </div>
    </div>
  )
}
