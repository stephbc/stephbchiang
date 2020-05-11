import React from 'react'

export const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="project">
        <div className="projectTile">
          <a
            href="https://github.com/stephbc/TOTEM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/totem.png" width="150px" />
          </a>

          <div className="projectDesc">
            <p>
              <b>TOTEM</b> is an app I created using React Native and Expo.
            </p>
            <p>For festivals, raves and all your nights out!</p>
            <p>
              Make a quick totem if your friends can't find you. Type a sign,
              take a temporary pic, or use photo you already have.
            </p>
            <a
              href="https://github.com/stephbc/TOTEM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>SEE IT ON GITHUB</b>
            </a>
          </div>
        </div>
        <br />
        <br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/izpCtVC7uR4"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <br />
      <div className="project">
        <div className="projectTile">
          <a
            href="https://super-quarantine-party.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/Qparty.png" width="300px" />
          </a>

          <div className="projectDesc">
            <p>
              <b>SUPER QUARANTINE PARTY</b> is a Mario-Party style multiplayer
              game, created using Phaser 3 and Socket.IO
            </p>
            <a
              href="https://super-quarantine-party.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>PLAY OUR GAME!</b>
            </a>
            <br />
            <br />
            <a
              href="https://github.com/2001-second-split/Quarantine-Party"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>SEE IT ON GITHUB</b>
            </a>
          </div>
        </div>
        <br />
        <br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gYCcRSvyevo"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <br />
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
              is a sample eCommerce site built using Node.js, Express, React,
              Redux, Sequelize and PostGreSQL. As one of four developers on this
              project, I worked on the Express routes, React forms and admin
              features.
            </p>
            <a
              href="https://github.com/stephbc/BottledUp2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>SEE VERSION 2.0 ON GITHUB</b>
            </a>
            <br />
            <br />
            <a
              href="https://graceshopperbottledup.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>VERSION 1.0 DEPLOYED HERE</b>
            </a>
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
        <br />
      </div>
    </div>
  )
}
