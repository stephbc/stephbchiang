import React from 'react'
import {Goals, About, Monthly, Qresume} from './index'

export const Home = () => {
  return (
    <div className="home">
      <div className="sidePanel">
        <About />
        <Qresume />
        {/* <Monthly /> */}
      </div>
      <div className="mainBody">
        <Goals />
      </div>
    </div>
  )
}
