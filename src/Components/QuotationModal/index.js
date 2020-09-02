import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardText, Form } from 'reactstrap'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import swal from 'sweetalert'

import CalificationIndicator from '../CalificationIndicator'
import ButtonBR from '../Button'
import Walk from './Img/caminar.svg'

const QuotationModal = (props) => {
  const {
    className
  } = props
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  console.log(props)
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    const infoData = {
      status: 'Activa',
      idRepairmanResponse: props.data.idRepairman,
      homeRepair: data.homeRepair
    }
    // console.log(infoData)
    axios.patch(`http://localhost:8080/repair-order/${props._id}`, infoData)
      .then((data) => {
        console.log(data)
        swal({
          title: 'Listo!',
          text: 'La reparación ha sido asignada, puedes consultar el estatus en tu perfil',
          icon: 'success',
          button: 'Entendido'
        })
      })
      .catch((error) => {
        console.log(error)
        swal({
          title: 'Ups!',
          text: 'Algo salió mal, intentalo de nuevo',
          icon: 'error',
          button: 'Entendido'
        })
      })
  }

  return (
    <div>
      <Button color='danger' onClick={toggle}>Ver detalle</Button>
      <Modal
        isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={className + 'modal-lg'}
      >
        <ModalHeader toggle={toggle}>
          <h4>Respuesta</h4>
          <p>Reparación</p>
        </ModalHeader>
        <ModalBody className='d-md-flex'>
          <div className='data-quote'>
            <h4>{props.repairmenName}</h4>
            <CalificationIndicator
              serviceRating='3'
            />
            <div className='d-flex'>
              <p className='mr-3'>$$$$</p>
              <div className='d-flex align-items-center'><img className='mr-3' src={Walk} width='10%' alt='' /><p className=''>Va a domicilio</p></div>
            </div>
            <Card body>
              <CardTitle>Descripción</CardTitle>
              <CardText>{props.data.answer}</CardText>
            </Card>
            <CardText>Precio ${props.data.cost}</CardText>
            <p><small>Si deseas que el reparador vaya a tu domicilio</small></p>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div class='form-group form-check'>
                <input type='checkbox' class='form-check-input' name='homeRepair' id='exampleCheck1' ref={register} />
                <label class='form-check-label' for='exampleCheck1'>Reparación en casa</label>
              </div>
              {/* <ButtonBR text='Contratar' /> */}
              <button id='checkout-button'>Checkout</button>
            </Form>
          </div>
          <div className='location-quote'>
            <h4>location</h4>
          </div>
        </ModalBody>
        <ModalFooter>

          {/* <Button color='secondary' onClick={toggle}>Cancelar</Button> */}
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default QuotationModal
