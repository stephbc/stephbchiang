import React from 'react'
import {About, Goals} from './index'
import {Route, Switch} from 'react-router-dom'
import {Portfolio, Coding, Resume, Fun, Navbar, Contact} from './index'

export const Home = () => {
  return (
    <div className="home">
      <div className="sidePanel">
        {/* <Navbar /> */}
        {/* <About /> */}
        <Switch>
          <Route path="/home/portfolio" component={Portfolio} />
          <Route path="/home/coding" component={Coding} />
          <Route path="/home/resume" component={Resume} />
          <Route path="/home/contact" component={Contact} />
          <Route path="/home/fun" component={Fun} />
          <Route exact path="/home" component={About} />
          <Route component={About} />
        </Switch>
      </div>
      <div className="mainBody">
        <Goals />
      </div>
    </div>
  )
}
