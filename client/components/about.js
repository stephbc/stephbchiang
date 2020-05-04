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
      <p>I'm keeping track of my projects and goals here.</p>
      <p>Here's how you can reach me:</p>

      <b>
        <Contact />
      </b>
      {/* <p>
        My key values are <b>empathy, balance, growth, curiosity</b> and{' '}
        <b>adventurousness</b>.
      </p>

      <p>My strengths:</p>
      <p>
        <b>empathizer</b>: <br />stepping into others' shoes easily
      </p>
      <p>
        <b>philomath</b>: <br />always curious and learning new things
      </p>
      <p>
        <b>time keeper</b>: <br />enjoying structure and setting timelines
      </p>
      <p>
        <b>optimist</b>: <br />approaching life with positivity and
        enthusiasm
      </p>
      <p>
        <b>strategist</b>: <br />focusing on the big picture and the long-term
      </p>
      <br /> */}
    </div>
  )
}
