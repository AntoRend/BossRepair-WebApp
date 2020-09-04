import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import './Footer.css'

import facebook from './img/facebook.svg'
import linkedin from './img/linkedin.svg'
import twitter from './img/twitter.svg'
import youtube from './img/youtube.svg'

const Footer = () => {
  return (
    <div className='footer container'>
      <div className='footer__info'>
        <div className='footer__icons'>
          <img className='footer_icon' src={facebook} alt='fb' />
          <img className='footer_icon' src={linkedin} alt='link' />
          <img className='footer_icon' src={twitter} alt='twt' />
          <img className='footer_icon' src={youtube} alt='yt' />
        </div>
        <p>©BossRepair 2020</p>
      </div>
    </div>
  )
}

export default Footer
