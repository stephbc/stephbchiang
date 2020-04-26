import React from 'react'
// import Totem from "../../public/totem.png"

export const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="totem">
        <h4>TOTEM</h4>
        <p>
          An app for festivals, raves and all your nights out! Make a quick
          totem if your friends can't find you: make a sign, take a temporary
          pic, or use photo you already have.
        </p>
        <a href="https://github.com/stephbc/TOTEM">
          <b>SEE IT ON GITHUB</b>
        </a>
        <br />
        {/* <img src="" /> */}
        <br />
        <a>video walkthrough</a>
      </div>

      <br />
      <div className="qparty">
        <h4>SUPER QUARANTINE PARTY</h4>
        <p>A Mario-Party style multiplayer game!</p>
        <a href="https://super-quarantine-party.herokuapp.com/">
          <b>PLAY OUR GAME!</b>
        </a>
        <br />
        <br />
        <a href="https://github.com/2001-second-split/Quarantine-Party">
          <b>SEE IT ON GITHUB</b>
        </a>
        <img />
        <br />
        <br />
        <a>video walkthrough</a>
      </div>
    </div>
  )
}
