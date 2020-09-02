import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import './Footer.css'

import fb from './img/Vector.png'
import instagram from './img/Vector-1.png'
import linkedin from './img/Vector-2.png'
import twitter from './img/Vector-3.png'

const Footer = () => {
  return (
    <div>
      <Container className="footer-container">
        <Row className="row-cols-2">
          <div className="footer"></div>
        </Row>
      </Container>
      <div class="container">
        <div class="row row-cols-2">
          <div class="col">Nosotros</div>
          <div class="col">
            {" "}
            <Col className="icons-container col-md-6 col-ms-12">
              <img src={fb} alt="img" />
              <img src={instagram} alt="img" />
              <img src={linkedin} alt="img" />
              <img src={twitter} alt="img" />
            </Col>
          </div>
          <div class="col">potilica de privaciad</div>
          <div class="col">
            <p>Metodo de Pago</p>
          </div>
        </div>
        <div class="col">
          {" "}
          @2020 todos los derechos reserbvados boss repari cdmx
        </div>
      </div>
    </div>
  );
}

export default Footer
