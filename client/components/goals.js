import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Coding, Navbar, Portfolio, Resume} from './index'

export const Goals = () => {
  return (
    <div className="goals">
      <Navbar />
      <hr />
      <Switch>
        <Route path="/home/portfolio" component={Portfolio} />
        <Route path="/home/coding" component={Coding} />
        <Route path="/home/resume" component={Resume} />
        <Route component={Portfolio} />
      </Switch>
    </div>
  )
}
