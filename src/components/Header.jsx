import React from 'react'

import logo from '../icons/icons8-merge-git-100.png'
import resumeDownLoad from '../assets/ShannonBrookshire.pdf'

function Header() {
  return (
    <header>
      <img id='logo' src={logo} alt="my logo" />
      <div className="link-container">
        <div className="link-container-child-one">
          <div className="link"><a href="#about-anchor">About</a></div>
          <div className="link"><a href="#work-anchor">Work</a></div>
          <div className="link"><a href="#contact-anchor">Contact</a></div>
        </div>
        <div className="resume-link"><a id="sticky" href={resumeDownLoad}>Resume</a></div>
      </div>
    </header>
  )
}

export default Header