import React from 'react'
import {Goals} from './goals'
import {About} from './about'
import {Contact} from './contact'

export const Home = () => {
  return (
    <div className="home">
      {/* <p>this is the main home body</p> */}
      <div className="sidebar">
        <About />
        <Contact />
      </div>
      <div className="mainBody">
        <Goals />
      </div>
    </div>
  )
}
