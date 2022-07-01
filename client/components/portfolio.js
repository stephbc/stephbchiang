import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import {Totem, Qparty, Bottledup} from './index'

export const Portfolio = () => {
  return (
    <div className="portfolio">
      <nav className="projectTile">
        <Link to="/home/portfolio/totem">TOTEM</Link>
        <Link to="/home/portfolio/qparty">Q PARTY</Link>
        <Link to="/home/portfolio/bottledup">BOTTLED UP</Link>
      </nav>
      <br />
      <Switch>
        <Route path="/home/portfolio/totem" component={Totem} />
        <Route path="/home/portfolio/qparty" component={Qparty} />
        <Route path="/home/portfolio/bottledup" component={Bottledup} />
        <Route component={Totem} />
      </Switch>
    </div>
  )
}
