import React from 'react'
import {Goals, Sidebar, Monthly, Qresume} from './index'

export const Home = () => {
  return (
    <div className="home">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="mainBody">
        <div className="goals">
          <Goals />
        </div>
        <div className="current">
          <Monthly />
          <Qresume />
        </div>
      </div>
    </div>
  )
}
