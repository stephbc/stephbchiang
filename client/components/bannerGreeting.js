import React from 'react'
import {Link} from 'react-router-dom'

export const BannerGreeting = () => {
  return (
    <div>
      <p id="bannerG1">
        <Link to="/home">see what i'm working on</Link>
      </p>
      <p id="bannerG2">
        <Link to="/contact">or say hello</Link>
      </p>
    </div>
  )
}
