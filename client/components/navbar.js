import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Contact} from './index'

export const Navbar = () => {
  const [currentLink, setCurrentLink] = useState('')
  const [contactClicked, setContactClicked] = useState(false)

  const handleNavClick = name => setCurrentLink(name)

  const handleContactClick = () => {
    handleNavClick('contact')
    setContactClicked(true)
  }

  return (
    <div className="navBar">
      <nav>
        <div id="navLink1">
          <Link
            to="/home/coding"
            onClick={() => handleNavClick('about')}
            className={currentLink === 'about' ? 'active-nav-link' : ''}
          >
            ABOUT
          </Link>
        </div>
        <div id="navLink2">
          <Link
            to="/home/portfolio"
            onClick={() => handleNavClick('portfolio')}
            className={currentLink === 'portfolio' ? 'active-nav-link' : ''}
          >
            PORTFOLIO
          </Link>
        </div>
        <div id="navLink3">
          <Link
            to="/home/resume"
            onClick={() => handleNavClick('resume')}
            className={currentLink === 'resume' ? 'active-nav-link' : ''}
          >
            RESUME
          </Link>
        </div>
        <div id="navLink4">
          <a
            onClick={handleContactClick}
            className={currentLink === 'contact' ? 'active-nav-link' : ''}
          >
            CONTACT
          </a>
          {contactClicked ? <Contact /> : ''}
        </div>
      </nav>
    </div>
  )
}
