import React from 'react'
import {Goals, Sidebar, Monthly, Qresume} from './index'

export const Home = () => {
  return (
    <div className="home">
      <div className="sidePanel">
        <Sidebar />
        <div className="current">
          <Monthly />
          <Qresume />
        </div>
      </div>
      <div className="mainBody">
        <div className="goals">
          <Goals />
        </div>
      </div>
    </div>
  )
}
