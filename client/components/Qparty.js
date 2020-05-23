import React from 'react'

export const Qparty = () => {
  return (
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
  )
}
