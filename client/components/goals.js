import React from 'react'
import {Navbar} from './navbar'
// import Routes from '../routes'
import {withRouter, Route, Switch} from 'react-router-dom'

export const Goals = () => {
  return (
    <div className="goals">
      <Navbar />
      {/* <Routes /> */}
      {/* <Route path="/coding" component={Coding} />
        <Route path="/portfolio" component={Portfolio} /> */}
      <hr />
    </div>
  )
}
