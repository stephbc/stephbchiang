import React from 'react'
import {About, Navbar, Portfolio, Coding, Resume, Fun} from './index'
import {Route, Switch} from 'react-router-dom'

export const Home = () => {
  return (
    <div className="home">
      <div className="sidePanel">
        <Switch>
          <Route path="/home/coding" component={Coding} />
          <Route path="/home/portfolio" component={Portfolio} />
          <Route path="/home/resume" component={Resume} />
          {/* <Route path="/home/fun" component={Fun} /> */}
          <Route exact path="/home" component={About} />
          <Route component={About} />
        </Switch>
      </div>
      <div className="mainBody">
        <Navbar />
      </div>
    </div>
  )
}
