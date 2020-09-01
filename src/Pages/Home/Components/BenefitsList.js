import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import sel from '../Img/sel.jpg'
import repar from '../Img/repar.jpg'
import images from '../Img/images (1).jpg'

const BenefitsList = () => {
  return (
    <Container className="benefits">
      <Row>
        <Col className="benefits_text">
          <h2 className="text-cards">
            Tenemos la satisfaccion de todos nuestros usuarios y reparadores{" "}
          </h2>
          <p> </p>
        </Col>
      </Row>
      <Row>
        <Col className="benefits_list d-md-flex justify-content-between">
          <div className="card b" style={{ width: "22rem" }}>
            <img src={sel} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Nuestros Usuarios</h5>
              <hr></hr>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
        
            </div>
          </div>
          <div className="card b" style={{ width: "22rem" }}>
            <img src={repar} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Nuestros Reparadores</h5>
              <hr></hr>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>

            </div>
          </div>
          <div className="card b" style={{ width: "22rem" }}>
            <img src={images} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Nosotros</h5>
              <hr></hr>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
        
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BenefitsList
