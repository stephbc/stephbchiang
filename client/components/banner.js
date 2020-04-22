import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {BannerGreeting, Contact} from './index'

export class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <div className="bannerIntro">
          <h1>hi, i'm stephanie</h1>
        </div>

        <div className="bannerGreeting">
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/" component={BannerGreeting} />
            <Route component={BannerGreeting} />
          </Switch>
        </div>
      </div>
    )
  }
}
