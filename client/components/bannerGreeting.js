import React from 'react'
import {Link} from 'react-router-dom'

export const BannerGreeting = () => {
  return (
    <div>
      <p className="bannerText">see what I've been working on below</p>
      <Link to="/contact">or click here to say hi</Link>
    </div>
  )
}
