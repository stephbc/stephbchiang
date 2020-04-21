import React from 'react'
import {Link, Route} from 'react-router-dom'
// import {Contact, BannerGreeting} from './contact'

export const BannerGreeting = () => {
  return (
    <div className="bannerGreeting">
      <div className="bannerGreeting">
        <p className="bannerText">see what i've been working on below</p>
        <Link to="/contact">or click here to say hi</Link>
      </div>
    </div>
  )
}
