import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardText } from 'reactstrap'
import CalificationIndicator from '../CalificationIndicator'
import Walk from './Img/caminar.svg'

const QuotationModal = (props) => {
  const {
    buttonLabel,
    className
  } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <div>
      <Button color='danger' onClick={toggle}>{buttonLabel}</Button>
      <Modal
        isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={className + 'modal-lg'}
      >
        <ModalHeader toggle={toggle}>
          <h4>Respuesta</h4>
          <p>Nombre del dispositivo</p>
        </ModalHeader>
        <ModalBody className='d-md-flex'>
          <div className='data-quote'>
            <h4>Nombre del reparador</h4>
            <CalificationIndicator
              serviceRating='3'
            />
            <div className='d-flex'>
              <p className='mr-3'>$$$$</p>
              <div className='d-flex align-items-center'><img className='mr-3' src={Walk} width='10%' alt='' /><p className=''>Va a domicilio</p></div>
            </div>
            <Card body>
              <CardTitle>Descripción</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            </Card>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <p><small>Si deseas que el reparador vaya a tu domicilio</small></p>
            <div class='form-group form-check'>
              <input type='checkbox' class='form-check-input' id='exampleCheck1' />
              <label class='form-check-label' for='exampleCheck1'>Reparación en casa</label>
            </div>
          </div>
          <div className='location-quote'>
            <h4>location</h4>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={toggle}>Contratar</Button>{' '}
          <Button color='secondary' onClick={toggle}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default QuotationModal
