import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import {Totem, Qparty, Bottledup} from './index'

export const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* <h3>PREVIOUS WORK & COMPLETED PROJECTS</h3> */}
      <nav className="projectTile">
        <Link to="/home/portfolio/qparty">
          <img src="/assets/Qparty.png" height="100px" />
        </Link>
        <Link to="/home/portfolio/totem">
          <img src="/assets/totem.png" height="100px" />
        </Link>
        <Link to="/home/portfolio/bottledup">
          <img src="/assets/bottledup2.png" height="100px" />
        </Link>
      </nav>
      <br />
      <Switch>
        <Route path="/home/portfolio/totem" component={Totem} />
        <Route path="/home/portfolio/qparty" component={Qparty} />
        <Route path="/home/portfolio/bottledup" component={Bottledup} />
        {/* <Route component={Totem} /> */}
      </Switch>
    </div>
  )
}
