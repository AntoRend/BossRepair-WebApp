import React from 'react'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import Button from '../../../Components/Button'

const RepairInfo = () => {
  return (
    <Row className='repair__info mt-5 d-flex'>
      <Col className='col-md-6'>
        <div className='repair__info_text'>
          <h3 className='title-repair'>
           ! Únete como reparador y amplía tus horizontes !
          </h3>
          <br />
          <h3 className='card-text-t'>
          Sé parte de este gran grupo.
          </h3>
          <br />
          <Button className="resp" text='UNETE' />
        </div>
      </Col>
    </Row>
  )
}

export default RepairInfo
