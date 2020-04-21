import React from 'react'
import {Link, Route} from 'react-router-dom'
import {Contact} from './contact'
import {BannerGreeting} from './bannerGreeting'

export const Banner = () => {
  return (
    <div className="banner">
      <h1 className="bannerIntro">hi, i'm stephanie</h1>
      <div className="bannerGreeting">
        {/* <p className="bannerText">see what i've been working on below</p>
        <Link to="/contact">or click here to say hi</Link> */}
        <div>
          <Route exact path="/" component={BannerGreeting} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
    </div>
  )
}
