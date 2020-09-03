import React from 'react'

export const Qparty = () => {
  return (
    <div className="project">
      <div className="projectTile">
        <div className="projectDesc">
          <p>
            <b>SUPER QUARANTINE PARTY</b> is a Mario-Party style multiplayer
            game, created with Phaser 3 and Socket.IO. As one of four developers
            on this project, I worked primarily on the dice, character movements
            and main minigame.
          </p>
          <p>
            <li>
              4 players take turns, rolling a die to move across the board.
            </li>
            <li>
              When a player lands on a special tile, a minigame is automatically
              triggered! Solve a puzzle or race to collect the most toilet
              paper!
            </li>
            <li>The first player to reach the end of the board wins!</li>
          </p>
          <p>
            <a
              href="https://super-quarantine-party.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>PLAY OUR GAME!</b>
            </a>
          </p>
          <p>
            <a
              href="https://github.com/2001-second-split/Quarantine-Party"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>SEE IT ON GITHUB</b>
            </a>
          </p>
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
