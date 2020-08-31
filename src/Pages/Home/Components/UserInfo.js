import React from 'react'
import { Row, Col, Container } from 'reactstrap'

const UserInfo = () => {
  return (
    <div className="user__info mt-5">
      <Container>
        <Row>
          <Col className="user__info_text">
            <h1 >Sigue estos sencillos pasos y veras que rapido será !</h1>
            <p>Con nuestra APP tendras todos nuestros reparadores a tus órdenes las 24/7 y tendras la certeza que tus aparatodos tendran una segunda vida con nostros !</p>
          </Col>
        </Row>
      </Container>

      <Row className="">
        <Col className="user__info_cards d-md-flex justify-content-around">
          <div className="step-card col-12 col-md-2">
            <h5>Paso 1</h5>
            <p className="text-landig">Publica la falla de tu aparato ! sin costo alguno</p>
          </div>
          <div className="step-card col-12 col-md-2">
            <h5>Paso 2</h5>
            <p className="text-landig">Espera la respuesta de alguno de nuestros reparadores !</p>
          </div>
          <div className="step-card col-12 col-md-2">
            <h5>Paso 3</h5>
            <p className="text-landig">Contrata !</p>
          </div>
          <div className="step-card col-12 col-md-2">
            <h5>Paso 4</h5>
            <p className="text-landig">Disfruta una segunda vida de tus aparatod electronicos !</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default UserInfo
