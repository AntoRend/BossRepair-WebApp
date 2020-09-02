import React from 'react'
import { Container, Row, Col } from 'reactstrap'
// import Button from '../../../Components/Button'

import sel from '../Img/sel.jpg'
import repar from '../Img/repar.jpg'
import images from '../Img/images (1).jpg'

const BenefitsList = () => {
  return (
    <Container className="benefits">
      {/* <row>
        <col> <Button text="Consultar" /></col>
      </row> */}
      <Row>
        <Col className="benefits_text">
          <h2 className="text-cards">Consulta tu reparacion</h2>
          <br></br>
          <br></br>

          <h2 className="text-cards">
            Tenemos la satisfacción de todos nuestros usuarios y reparadores{" "}
          </h2>
          <p> </p>
        </Col>
      </Row>
      <Row>
        <Col className="benefits_list d-md-flex justify-content-between">
          <div className="card b" style={{ width: "22rem" }}>
            <img src={sel} className=" card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Nuestros Usuarios</h5>

              <p class="text-cards-2">
                Satisfaccion total de nuestros usuarios.
              </p>
            </div>
          </div>
          <div className="card b" style={{ width: "22rem" }}>
            <img src={repar} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Nuestros Reparadores</h5>

              <p className="text-cards-2">
                Tenemos mayor cobertura gracias a la aplicacion.
              </p>
            </div>
          </div>
          <div className="card b" style={{ width: "22rem" }}>
            <img src={images} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Nosotros</h5>

              <p className="text-cards-2">
                Brindamos seguridad, calidad, precios y accesible.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BenefitsList
