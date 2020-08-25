import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import './Footer.css'

import fb from './img/Facebook.png'
import instagram from './img/twitter.png'
import linkedin from './img/Pinterest.png'
import twitter from './img/instagram.png'

const Footer = () => {
  return (
    <div className='footer'>
      <Container className='footer-container'>
        <Row>
          <div className='footer'>
            <Col className='icons-container'>
              <div>
                <figure className='icon-social'>
                  <img src={fb} alt='img' />
                </figure>
              </div>
              <div>
                <figure className='icon-social'>
                  <img src={instagram} alt='img' />
                </figure>
              </div>
              <div>
                <figure className='icon-social'>
                  <img src={linkedin} alt='img' />
                </figure>
              </div>
              <div>
                <figure className='icon-social'>
                  <img src={twitter} alt='img' />
                </figure>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
