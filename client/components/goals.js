import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Navbar, Portfolio, Qresume, Resume} from './index'

export const Goals = () => {
  return (
    <div className="goals">
      <Navbar />
      <hr />
      <Switch>
        <Route path="/home/portfolio" component={Portfolio} />
        <Route path="/home/qresume" component={Qresume} />
        <Route path="/home/resume" component={Resume} />
        <Route component={Portfolio} />
      </Switch>
    </div>
  )
}
