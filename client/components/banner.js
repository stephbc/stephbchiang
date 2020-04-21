import React from 'react'
import {Link, Route} from 'react-router-dom'
import {Contact} from './contact'
import {BannerGreeting} from './bannerGreeting'

export const Banner = () => {
  return (
    <div className="banner">
      <div className="bannerIntro">
        <h1>hi, i'm stephanie</h1>
      </div>

      <div className="bannerGreeting">
        <Route exact path="/" component={BannerGreeting} />
        <Route path="/contact" component={Contact} />
      </div>
    </div>
  )
}
