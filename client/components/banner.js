import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import {BannerGreeting, Contact, Home} from './index'

export class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <div className="bannerIntro">
          {/* <h1>hi, i'm stephanie</h1> */}
          <Link to="/home" className="bannerIntroLink">
            <h1>hi, i'm stephanie</h1>
          </Link>
        </div>

        <div className="bannerGreeting">
          <Switch>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/" component={BannerGreeting} />
            <Route component={BannerGreeting} />
          </Switch>
        </div>
      </div>
    )
  }
}
