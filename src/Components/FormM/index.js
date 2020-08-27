import React from 'react'
import { Form, FormGroup, Label } from 'reactstrap'
import { useForm } from 'react-hook-form'
import Button from '../Button'
import axios from 'axios'
import swal from 'sweetalert'

const FormM = (props) => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    axios.post('http://localhost:8080/users/signup', data)
      .then(function (response) {
        console.log(response)
        swal({
          title: '¡Registro exitoso!',
          text: 'Bienvenido',
          icon: 'success',
          button: 'Entendido'
        })
      })
      .catch(function (error) {
        // console.log(error.response.data.error)
        swal({
          title: 'Ups!',
          text: `${error.response.data.error}`,
          icon: 'error',
          button: 'Entendido'
        })
      })
  }
  return (
    <Form className='my-5' onSubmit={handleSubmit(onSubmit)}>
      <div className='form-container col-12 d-md-flex bg-secondary text-white'>
        <div className='col-12 col-md-6'>
          <FormGroup>
            <Label for='name'>Nombre</Label>
            <input
              class='form-control'
              type='text'
              name='firstName'
              placeholder='Nombre'
              ref={register}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for='lastName'>Respuesta del Reparador</Label>
            <input
              class='form-control'
              type='text'
              name='lastName'
              placeholder='Respuesta del Reparador'
              ref={register}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for='exampleDate'>Precio Aproximado</Label>
            <input
              class='form-control'
              type='date'
              name='birthDate'
              placeholder='$$$$'
              ref={register}
              required
            />
          </FormGroup>
        </div>
      </div>

      <button type="button" class="btn btn-dark">
        Canselar
        </button>
      <button type="button" class="btn btn-danger">
        Modal
        </button>
    </Form>
  )
}

export default FormM
