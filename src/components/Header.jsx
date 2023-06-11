import React from 'react'

import logo from '../icons/icons8-merge-git-100.png'
import resumeDownLoad from '../assets/ShannonBrookshire.pdf'

function Header() {
  return (
    <header>
      <img id='logo' src={logo} alt="my logo" />
      <div className="link-container">
        <div className="link-container-child-one">
          <div className="link">About</div>
          <div className="link">Work</div>
          <div className="link">Contact</div>
        </div>
        <div className="resume-link"><a id="sticky" href={resumeDownLoad}>Resume</a></div>
      </div>
    </header>
  )
}

export default Header