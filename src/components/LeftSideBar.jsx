import React from 'react'

import gitHub from '../icons/icons8-github-50.png'
import twitter from '../icons/icons8-twitter-50.png'
import linkedIn from '../icons/icons8-linkedin-50.png'

function LeftSideBar() {
  return (
    <section className='side-bar'>
      <ul className='side-links'>
        <li><a href="https://github.com/SalamanderCtesiphon"><img src={gitHub} alt="git hub" className='icons'/></a></li>
        <li><a href="https://twitter.com/Shannon99535365"><img src={twitter} alt="twitter" className='icons'/></a></li>
        <li><a href="https://www.linkedin.com/in/shannon-brookshire-817577265/"><img src={linkedIn} alt="linked in" className='icons'/></a></li>
        <li id="line-container"></li>
      </ul>
    </section>
  )
}

export default LeftSideBar