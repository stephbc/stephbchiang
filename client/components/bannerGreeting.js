import React from 'react'
import {Link} from 'react-router-dom'

export const BannerGreeting = () => {
  return (
    <div>
      <p id="bannerG1">
        <Link to="/home">get to know me and my work</Link>
      </p>
      <p id="bannerG2">
        <Link to="/contact">or just say hello</Link>
      </p>
    </div>
  )
}
