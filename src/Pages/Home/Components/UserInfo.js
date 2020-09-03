import React from 'react'
import { Row, Col, Container } from 'reactstrap'

const UserInfo = () => {
  return (
    <div className="user__info mt-5">
      <Container>
        <Row>
          <Col className="user__info_text">
            <h2 className="text-cards">
              Rapido y sencillo !
            </h2>
            <p className="text-public">
          Todos los reparadores las 24/7 y tendran  una
              segunda vida con nostros !
            </p>
          </Col>
        </Row>
      </Container>

      <Row className="">
        <Col className="user__info_cards d-md-flex justify-content-around">
          <div className="cards-bor step-card col-12 col-md-2">
            <h6 className="pasos">Paso 1</h6>
            <h5 className="titulo">Publica</h5>
            <p className="text-landig">
             Sin costo alguno !
            </p>
          </div>
          <div className="cards-bor step-card col-12 col-md-2">
            <h6 className="pasos">Paso 2</h6>
            <h5 className="titulo">Espera </h5>
            <p className="text-landig">
              Respuesta de un reparador
            </p>
          </div>
          <div className="cards-bor step-card col-12 col-md-2">
            <h6 className="pasos">Paso 3</h6>
            <h5 className="titulo">Contrata</h5>
            <p className="text-landig">Contrata </p>
          </div>
          <div className="cards-bor step-card col-12 col-md-2">
            <h6 className="pasos">Paso 4</h6>
            <h5 className="titulo">Disfruta</h5>
            <p className="text-landig">
             Una segunda vida 
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default UserInfo
