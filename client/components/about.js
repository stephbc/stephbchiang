import React from 'react'
import {Contact} from './index'

export const About = () => {
  return (
    <div className="about">
      <p>
        <b>Hello!</b>
      </p>
      <p>
        My name is <br />
        <b>Stephanie Chiang</b>
        <br />and I'm software developer.
      </p>
      <b>
        <Contact />
      </b>
      <br />
    </div>
  )
}
