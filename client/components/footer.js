import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
  return (
    <div className="footer">
      {/* <h4>By Stephanie Chiang</h4> */}
      <p>© 2020 Stephanie Chiang</p>
      <p>
        <a href="mailto:stephaniebchiang@gmail.com">
          {' '}
          <FontAwesomeIcon icon={faEnvelope} />{' '}
        </a>
        |
        {/* <FontAwesomeIcon icon={fa-linkedin} /> */}
      </p>
    </div>
  )
}
