import React from 'react'
import {About, Goals} from './index'

export const Home = () => {
  return (
    <div className="home">
      <div className="sidePanel">
        <About />
      </div>
      <div className="mainBody">
        <Goals />
      </div>
    </div>
  )
}
