import React from 'react'
import { Row, Col, Form, FormGroup, Label } from 'reactstrap'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import swal from 'sweetalert'

import Button from '../Button'

const ResponseFormRepairman = (props) => {
  console.log(props)
  const idRepairman = localStorage.getItem('userID')
  const repairmanName = props.userData.fullName
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    const infoData = { repairmanName, idRepairman, ...data }

    axios.patch(`http://localhost:8080/repair-order/answers/${props.data._id}`, infoData)
      .then((data) => {
        console.log(data)
        swal({
          title: 'Listo!',
          text: 'Tu respuesta ha sido enviada',
          icon: 'success',
          button: 'Entendido'
        })
      }).then(() => {
        const userRole = localStorage.getItem('userRole')
        if (userRole === 'user') {
          window.location.href = '/dashboard'
        } else {
          window.location.href = '/dashboard-repair'
        }
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
    <Row>
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
            <Label>Costo</Label>
            <input class='form-control' name='cost' placeholder='$ Precio' ref={register} required />
          </FormGroup>
          <Button
            text='Enviar'
          />
        </Form>
      </Col>
    </Row>
  )
}

export default ResponseFormRepairman
