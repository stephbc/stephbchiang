import React from 'react'
import {Link} from 'react-router-dom'

export const BannerGreeting = () => {
  return (
    <div>
      {/* <p className="bannerText"> </p> */}
      <Link to="/home">get to know me here</Link>
      <br />
      <Link to="/contact">or just say hi!</Link>
    </div>
  )
}
