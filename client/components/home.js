import React from 'react'
import {Goals} from './goals'
import {Sidebar} from './sideBar'

export const Home = () => {
  return (
    <div className="home">
      {/* <p>this is the main home body</p> */}
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="mainBody">
        <Goals />
      </div>
    </div>
  )
}
