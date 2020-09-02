import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import './Footer.css'

import fb from './img/Vector.png'
import instagram from './img/Vector-1.png'
import linkedin from './img/Vector-2.png'
import twitter from './img/Vector-3.png'
import icon from './img/icon.png'

const Footer = () => {
  return (
    <div className="back">
      <Container className="footer-container">
        <Row className="row-cols-2">
          <div className="footer"></div>
        </Row>
      </Container>
      <div class="container">
        <div class="row row-cols-2">
          <div class="col">
         
          </div>
          <div class="col">
            
            <Col className="icons-container col-md-6 col-ms-12">
              <img className="img-modi" src={fb} alt="img" />
              <img className="img-modi" src={instagram} alt="img" />
              <img className="img-modi" src={linkedin} alt="img" />
              <img className="img-modi" src={twitter} alt="img" />
            </Col>
          </div>
          <div class="col">potilica de privaciad</div>
          <div class="col">
            <p className="foo">Metodo de Pago</p>
            <img src={icon} className="pago" alt="..." />
          </div>
        </div>
        <div class="col">
          <p className="foo-1">
            @2020 Todos los derechos reservados BOOS REPAIR  C.D.M.X
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer
