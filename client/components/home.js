import React from 'react'
import {About, Coding, Goals} from './index'

export const Home = () => {
  return (
    <div className="home">
      <div className="sidePanel">
        <About />
        <Coding />
      </div>
      <div className="mainBody">
        <Goals />
      </div>
    </div>
  )
}
