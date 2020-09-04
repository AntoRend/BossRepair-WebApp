import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import './Footer.css'

import facebooki from './img/facebooki.png'
import twitter from './img/twitter.png'
import pinterest from './img/Pinterest.png'
import instagram from './img/instagram.png'
import tarjetas from './img/tarjetas.png'
// import Ubicacion from './img/Ubicacion.png'

const Footer = () => {
  return (
    <div className="back">
      <Container className="footer-container">
        <Row className="row-cols-2">
          <div className="footer" />
        </Row>
      </Container>

      <div className="row row-cols-2">
        <div className="col">
          <img src={tarjetas} className="pago" alt="..." />
        </div>
        <div class="col">
          <Col className="icons-container col-md-6 col-ms-12">
            <img className="img-modi" src={facebooki} alt="img" />
            <img className="img-modi" src={twitter} alt="img" />
            <img className="img-modi" src={pinterest} alt="img" />
            <img className="img-modi" src={instagram} alt="img" />
          </Col>
        </div>
      
        <div class="col"></div>

        <div class="col">
          {/* <hr></hr> */}
          {/* <p className="foo">Potilica de privaciad</p> */}
        </div>
      </div>
      <hr className="border-f"></hr>
      <div class="col">
        <p className="foo-1-all">
          © 2020 Boss Repair, Inc. Todos los derechos reservados &nbsp; &nbsp;
          México
          {/* <img src={Ubicacion} className="ubi" alt="..." /> */}
        </p>
      </div>
    </div>
  )
}

export default Footer
