import React from 'react'
import { Row, Col, Container } from 'reactstrap'

const UserInfo = () => {
  return (
    <div className='user__info mt-5'>
      <Container>
        <Row>
          <Col className='user__info_text'>
            <h1>Texto para el usuario</h1>
            <p>Pasos para el proceso</p>
          </Col>
        </Row>
      </Container>

      <Row className=''>
        <Col className='user__info_cards d-md-flex justify-content-around'>
          <div className='step-card col-12 col-md-2'><h5>Paso número 1</h5></div>
          <div className='step-card col-12 col-md-2'><h5>Paso número 2</h5></div>
          <div className='step-card col-12 col-md-2'><h5>Paso número 3</h5></div>
          <div className='step-card col-12 col-md-2'><h5>Paso número 4</h5></div>
        </Col>
      </Row>
    </div>
  )
}

export default UserInfo
