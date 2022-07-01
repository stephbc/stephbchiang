import React from 'react'

export const Totem = () => {
  return (
    <div className="project">
      <div className="projectTile">
        <div className="projectDesc">
          <img src="/assets/totem.png" height="100px" />
          <p>
            <b>TOTEM</b> is an app I created using React Native and Expo.
          </p>
          <p>For festivals, raves and all your nights out!</p>
          <li>
            Turn your phone into a totem so your friends can find you in a
            crowd.
          </li>
          <li>Type a sign and make it blink, or use or take a photo.</li>
          <li>Send your GPS coordinates via SMS to contacts on your phone.</li>
          <p>
            <a
              href="https://github.com/stephbc/TOTEM"
              target="_blank"
              rel="noopener noreferrer"
            >
              SEE IT ON GITHUB
            </a>
          </p>
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
  )
}
