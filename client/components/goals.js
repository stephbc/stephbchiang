import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Portfolio, Coding, Resume, Fun} from './index'

export const Goals = () => {
  return (
    <div className="goals">
      <Switch>
        <Route path="/home/portfolio" component={Portfolio} />
        <Route path="/home/coding" component={Coding} />
        <Route path="/home/resume" component={Resume} />
        <Route path="/home/fun" component={Fun} />
        <Route component={Portfolio} />
      </Switch>
    </div>
  )
}
