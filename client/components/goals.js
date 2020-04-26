import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Coding, Navbar, Portfolio, Ukulele, Bicycle} from './index'

export const Goals = () => {
  return (
    <div>
      {/* <p>here's what i've been learning and creating</p> */}
      <Navbar />
      <hr />

      <Switch>
        <Route path="/home/portfolio" component={Portfolio} />
        <Route path="/home/coding" component={Coding} />
        <Route path="/home/ukulele" component={Ukulele} />
        <Route path="/home/bicycle" component={Bicycle} />
        <Route component={Portfolio} />
      </Switch>
    </div>
  )
}
