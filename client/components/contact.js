import React from 'react'
import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faLink,
  faDiagramProject,
  faDog
} from '@fortawesome/free-solid-svg-icons'

fontawesome.library.add(faEnvelope, faLink, faDiagramProject, faDog)

export const Contact = () => {
  return (
    <div className="contact">
      <p id="contact1">
        <a href="mailto:stephaniebchiang@gmail.com">
          <span>stephaniebchiang@gmail.com </span>
          <FontAwesomeIcon icon="envelope" />
        </a>
      </p>
      <p id="contact2">
        <a
          href="https://www.linkedin.com/in/stephaniebchiang/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>connect on linkedin </span>
          <FontAwesomeIcon icon="link" />
        </a>
      </p>
      <p id="contact3">
        <a
          href="https://github.com/stephbc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>github for fun / </span>
        </a>
        <a
          href="https://github.com/schiang-TE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>github for work </span>
          <FontAwesomeIcon icon="diagram-project" />
        </a>
      </p>
      <p id="contact4">
        <a
          href="https://www.instagram.com/luyorkiecity/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>meet my dog Lucy </span>
          <FontAwesomeIcon icon="dog" />
        </a>
      </p>
    </div>
  )
}
