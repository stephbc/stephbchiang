import React from 'react'

export const Bottledup = () => {
  return (
    <div className="project">
      <div className="projectTile">
        <div className="projectDesc">
          <p>
            <a
              href="https://github.com/stephbc/BottledUp2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>BottledUp</b>
            </a>{' '}
            is an eCommerce site built using Node.js, Express, React, Redux,
            Sequelize and PostGreSQL. As one of four developers on this project,
            I worked on the Express routes, React forms and admin features.
          </p>
          <p>
            <a
              href="https://github.com/stephbc/BottledUp2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>SEE VERSION 2.0 ON GITHUB</b>
            </a>
          </p>
          <p>
            <a
              href="https://graceshopperbottledup.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>VERSION 1.0 DEPLOYED HERE</b>
            </a>
          </p>
        </div>
      </div>
      <br />
      <a
        href="https://github.com/stephbc/BottledUp2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/bottledup2.png" width="560px" />
      </a>
    </div>
  )
}
