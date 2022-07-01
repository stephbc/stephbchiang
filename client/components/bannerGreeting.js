import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Contact} from './index'
import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faAnglesDown,
  faAnglesUp,
  faAnglesRight
} from '@fortawesome/free-solid-svg-icons'

fontawesome.library.add(faAnglesDown, faAnglesUp, faAnglesRight)

export const BannerGreeting = () => {
  const [contactClicked, setContactClicked] = useState(false)

  const handleContactClick = () => setContactClicked(current => !current)

  return (
    <div>
      <div id="bannerG1">
        <Link to="/home">
          <span>get to know me and my work </span>
          <FontAwesomeIcon icon="angles-right" />
        </Link>
      </div>
      <div id="bannerG2">
        <a onClick={handleContactClick}>
          <span>or just say hello </span>
          <FontAwesomeIcon
            icon={contactClicked ? 'angles-up' : 'angles-down'}
          />
        </a>
        {contactClicked ? <Contact /> : ''}
      </div>
    </div>
  )
}
