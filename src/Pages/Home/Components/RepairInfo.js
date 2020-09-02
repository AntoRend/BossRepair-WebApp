import React from 'react'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import Button from '../../../Components/Button'

const RepairInfo = () => {
  return (
<<<<<<< HEAD
    <Row className="repair__info mt-5 d-flex">
      <Col className="col-md-6">
        <div className="repair__info_text">
          <h3 className="title-repair">
            Buscas una aplicacion que te ayude ampliar tus horizontes ?
          </h3>
          <br></br>
          <h3 className="card-text-t">
            Que esteperas ? Sé parte de este gran grupo, y trabaja sin limites !
          </h3>
          <br></br>
          <Button text="Button"/>
=======
    <Row className='repair__info mt-5 d-flex'>
      <Col className='col-md-6'>
        <div className='repair__info_text'>
          <h2>Texto para el reparador</h2>
          <p>Texto para el reparador</p>
          <Link to='/registro-reparador'><Button text='Button' /></Link>
>>>>>>> develop
        </div>
      </Col>
    </Row>
  );
}

export default RepairInfo
