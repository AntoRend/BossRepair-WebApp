import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Container, Col } from 'reactstrap'
import './index.css'
import CustomerImg from './img/customer1.jpg'
import Button from '../../../../Components/Button'

const clientCard = ({ customerName, repairTitle }) => {
  return (
    <Container className='clientCardContainer'>
      <Row className='clientCardRow'>
        <Col>
          <div className='customerName'>
            <p className='customerText'>{customerName}</p>
          </div>
          <div>
            <p className='customerText'>Problema: {repairTitle}</p>
          </div>
        </Col>
        <Col className='customerCardColTwo'>
          <div>
            <img className='imgCustomerCard' src={CustomerImg} />
          </div>
          <br />
          <div className='customerCardButton'>
            <Button text='Ir' />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default clientCard

/*

*/
