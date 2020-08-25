import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Benefits1 from '../Img/benefits_1.jpg'

const BenefitsList = () => {
  return (
    <Container className='benefits'>
      <Row>
        <Col className='benefits_text'>
          <h2>Texto secundario</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At iste, commodi magni reprehenderit vero id rerum deleniti </p>
        </Col>
      </Row>
      <Row>
        <Col className='benefits_list d-md-flex justify-content-between'>
          <div className='card col-12 col-md-4'>
            <img src={Benefits1} alt='' className='img-thumbnail rounded' />
            <h3>Lorem Ipsum!</h3>
          </div>
          <div className='card col-12 col-md-4'>
            <img src={Benefits1} alt='' className='img-thumbnail rounded' />
            <h3>Lorem Ipsum!</h3>
          </div>
          <div className='card col-12 col-md-4'>
            <img src={Benefits1} alt='' className='img-thumbnail rounded' />
            <h3>Lorem Ipsum!</h3>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default BenefitsList
