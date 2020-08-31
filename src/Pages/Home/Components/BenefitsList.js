import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Benefits1 from '../Img/benefits_1.jpg'

const BenefitsList = () => {
  return (
    <Container className="benefits">
      <Row>
        <Col className="benefits_text">
          <h2>
            Tenemos la satisfaccion de todos nuestros usuarios y reparadores{" "}
          </h2>
          <p> </p>
        </Col>
      </Row>
      <Row>
        <Col className="benefits_list d-md-flex justify-content-between">
          <div className="card col-12 col-md-4">
            <img src={Benefits1} alt="" className="img-thumbnail rounded" />
            <h3>USUARIO!</h3>
          </div>
          <div className="card col-12 col-md-4">
            <img src={Benefits1} alt="" className="img-thumbnail rounded" />
            <h3>REPARADOR</h3>
          </div>
          <div className="card col-12 col-md-4">
            <img src={Benefits1} alt="" className="img-thumbnail rounded" />
            <h3>NOSOTROS</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BenefitsList
