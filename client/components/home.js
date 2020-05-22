import React from 'react'
import {About, Goals, Navbar} from './index'

export const Home = () => {
  return (
    <div className="home">
      <div className="sidePanel">
        <About />
        <Navbar />
      </div>
      <div className="mainBody">
        <Goals />
      </div>
    </div>
  )
}
