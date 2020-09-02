import React from 'react'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import Button from '../../../Components/Button'

const RepairInfo = () => {
  return (
    <Row className='repair__info mt-5 d-flex'>
      <Col className='col-md-6'>
        <div className='repair__info_text'>
          <h1 className='title-repair'>
            Buscas una aplicacion que te ayude ampliar tus horizontes ?{' '}
          </h1>
          <br />
          <h3 className='text-reapir'>
            que esteperas ? Sé parte de este gran grupo, y
            trabaja sin limites !
          </h3>
          <br />
          <Link to='/registro-reparador'><Button text='Registrate' /></Link>
        </div>
      </Col>
    </Row>
  )
}

export default RepairInfo
