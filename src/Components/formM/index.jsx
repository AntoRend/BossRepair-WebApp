import React from 'react'
import { Form, FormGroup, Label } from 'reactstrap'
import { useForm } from 'react-hook-form'
import Button from '../Button'
import axios from 'axios'
import swal from 'sweetalert'

const FormM = () => {
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
      <div className='form-container col-12 d-md-flex'>
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
            <Label for='lastName'>Apellido</Label>
            <input
              class='form-control'
              type='text'
              name='lastName'
              placeholder='Apellido'
              ref={register}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for='exampleDate'>Fecha de nacimiento</Label>
            <input
              class='form-control'
              type='date'
              name='birthDate'
              placeholder='dd/mm/aa'
              ref={register}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for='exampleEmail'>Email</Label>
            <input
              class='form-control'
              type='email'
              name='email'
              id='exampleEmail'
              placeholder='with a placeholder'
              ref={register}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for='examplePassword'>Contraseña</Label>
            <input
              class='form-control'
              type='password'
              name='password'
              placeholder='password '
              ref={register}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for='examplePassword'>Confirmar contraseña</Label>
            <input
              class='form-control'
              type='password'
              name='passwordConfirm'
              placeholder='password '
              ref={register}
              required
            />
          </FormGroup>
        </div>
        <div className='col-12 col-md-6'>
          <FormGroup>
            <Label for='name'>Calle y número</Label>
            <input
              class='form-control'
              type='text'
              name='streetAndNumber'
              placeholder='Calle y número'
              ref={register}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for='name'>Delegación/Municipio</Label>
            <input
              class='form-control'
              type='text'
              name='municipality'
              placeholder='Delegación/Municipio'
              ref={register}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for='name'>Ciudad</Label>
            <input
              class='form-control'
              type='text'
              name='city'
              placeholder='Ciudad'
              ref={register}
              required
            />
            <FormGroup>
              <Label for='name'>Código Postal</Label>
              <input
                class='form-control'
                type='text'
                name='zipCode'
                placeholder='Código Postal'
                ref={register}
                required
              />
            </FormGroup>
          </FormGroup>
        </div>
      </div>
      <div>
        <Button text='Regístrate' />
      </div>
    </Form>
  )
}

export default Form
