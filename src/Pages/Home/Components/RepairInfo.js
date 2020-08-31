import React from 'react'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import Button from '../../../Components/Button'

const RepairInfo = () => {
  return (
    <Row className='repair__info mt-5 d-flex'>
      <Col className='col-md-6'>
        <div className='repair__info_text'>
          <h2>Texto para el reparador</h2>
          <p>Texto para el reparador</p>
          <Link to='/registro-reparador'><Button text='Button' /></Link>
        </div>
      </Col>
    </Row>
  )
}

export default RepairInfo
