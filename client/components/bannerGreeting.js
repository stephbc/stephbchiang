import React from 'react'
import {Link} from 'react-router-dom'

export const BannerGreeting = () => {
  return (
    <div>
      <Link to="/home">check out what i'm working on</Link>
      <br />
      <Link to="/contact">or come say hi</Link>
    </div>
  )
}