import React from 'react'
import { Row, Col, Form, FormGroup, Label } from 'reactstrap'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import swal from 'sweetalert'

import Button from '../Button'

const ResponseFormRepairman = (props) => {
  // console.log(props)
  const idRepairman = localStorage.getItem('userID')
  const repairmanName = props.userData.fullName
  const { register, handleSubmit } = useForm()
  const onSubmit = async (data) => {
    const infoData = { repairmanName, idRepairman, ...data }
    var response = {}
    if (props.data.status === 'Activa') {
      console.log(infoData)
      response = await axios.patch(`http://localhost:8080/repair-order/updates/${props.data._id}`, infoData)
    } else {
      console.log(infoData)
      response = await axios.patch(`http://localhost:8080/repair-order/answers/${props.data._id}`, infoData)
    }
    console.log(response)
    if (response.data.success) {
      swal({
        title: 'Listo!',
        text: 'Tu respuesta ha sido enviada',
        icon: 'success',
        button: 'Entendido'
      })
      const dataMail = {
        to: 'ltonnito@gmail.com',
        subject: '¡Tienes una respuesta!',
        text: 'Hola! Tu reparación tiene una respuesta disponible, puedes verla iniciando sesión.'
      }
      axios.post('http://localhost:8080/emails/', dataMail)
        .then(() => {
          const userRole = localStorage.getItem('userRole')
          if (userRole === 'user') {
            window.location.href = '/dashboard'
          }
        })
    } else {
      swal({
        title: 'Ups!',
        text: 'Algo salió mal, intentalo de nuevo',
        icon: 'error',
        button: 'Entendido'
      })
    }
  }
  const renderForm = () => {
    if (props.data.status === 'Activa') {
      return (
        <Col>
          <div>
            <h5>Añadir actualización del proceso</h5>
          </div>
          <Form className='col-12' onSubmit={handleSubmit(onSubmit)}>
            <FormGroup className='col-12'>
              <Label>Descripción</Label>
              <textarea class='form-control' name='answer' id='exampleFormControlTextarea1' rows='3' ref={register} required />
            </FormGroup>
            <Button
              text='Enviar'
            />
          </Form>
        </Col>
      )
    } else {
      return (
        <Col>
          <div>
            <h5>Formulario de respuesta</h5>
          </div>
          <Form className='col-12' onSubmit={handleSubmit(onSubmit)}>
            <FormGroup className='col-12'>
              <Label>Descripción</Label>
              <textarea class='form-control' name='answer' id='exampleFormControlTextarea1' rows='3' ref={register} required />
            </FormGroup>
            <FormGroup className='col-3'>
              <Label>Precio</Label>
              <input class='form-control' name='cost' placeholder='$ Precio' ref={register} required />
            </FormGroup>
            <Button
              text='Enviar'
            />
          </Form>
        </Col>
      )
    }
  }

  return (
    <Row>
      {renderForm()}
    </Row>
  )
}

export default ResponseFormRepairman
