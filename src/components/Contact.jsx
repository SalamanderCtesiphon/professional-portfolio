import React from 'react'
import { Email } from './Email'
import twitter from '../icons/icons8-twitter-50.png'
import linkedIn from '../icons/icons8-linkedin-50.png'

function Contact() {
  return (
    <div className="container">
      <h1 className="title">Contact</h1>
      <p>Feel free to contact me either by messaging me on Twitter or LinkedIn or fill out the form below.</p>
      <div className="contact-container">
        <div className="link-icon-holder">
          <li><a href="https://www.linkedin.com/in/shannon-brookshire-817577265/"><img src={linkedIn} alt="linked in" className='icons'/></a></li>
          <li><a href="https://twitter.com/Shannon99535365"><img src={twitter} alt="twitter" className='icons'/></a></li>
        
        </div>
        <div className="line-box"></div>
        <Email />
      </div>
    </div>
  )
}

export default Contact