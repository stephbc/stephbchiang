import React from 'react'
import {Link} from 'react-router-dom'

export const BannerGreeting = () => {
  return (
    <div>
      <p>
        <Link to="/home">see what i'm working on</Link>
      </p>
      <p>
        <Link to="/contact">or contact me here</Link>
      </p>
    </div>
  )
}
