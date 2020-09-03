import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import './Footer.css'

import Facebook from './img/facebook 1.png'
import Twitter from './img/Twitter 1.png'
import pinterest from './img/pinterest 1.png'
import instagram from './img/instagram 1.png'
import stripe from './img/stripe.png'
import Ubicacion from './img/Ubicacion.png'

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
          <img src={stripe} className="pago" alt="..." />
        </div>
        <div class="col">
          <Col className="icons-container col-md-6 col-ms-12">
            <img className="img-modi" src={Facebook} alt="img" />
            <img className="img-modi" src={Twitter} alt="img" />
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
      <div class="col">
        <p className="foo-1-all">
          © 2020 Boss Repair, Inc. Todos los derechos reservados
          &nbsp; &nbsp; México
          <img src={Ubicacion} className="ubi" alt="..." />
        </p>
      </div>
    </div>
  );
}

export default Footer
