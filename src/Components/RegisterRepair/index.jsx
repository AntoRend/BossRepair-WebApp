import React from 'react'
import { Form, FormGroup, Label } from 'reactstrap'
import { useForm } from 'react-hook-form'
import Button from '../Button'
import axios from 'axios'
import swal from 'sweetalert'

const RegisterRepair = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    axios.post('http://localhost:8080/repairmen/signup', data)
      .then(function (response) {
        console.log(response)
        swal({
          title: 'Listo!',
          text: 'Texto por modificar',
          icon: 'success',
          button: 'Entendido'
        })
      })
      .catch(function (error) {
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
    <Form className='my-5' onSubmit={handleSubmit(onSubmit)}>
      <div className='form-container col-12 d-md-flex'>
        <div className='col-12 col-md-6'>
          <FormGroup>
            <Label for='name'>Nombre o Razón social</Label>
            <input
              class='form-control'
              type='text'
              name='fullName'
              placeholder='Nombre'
              ref={register}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for='lastName'>Especialidad</Label>
            <select class='form-control' name='specialty' id='exampleSelect' ref={register} required>
              <option>Selecciona</option>
              <option>Electrónica</option>
              <option>Electricidad</option>
              <option>Línea Blanca</option>
              <option>Plomería</option>
            </select>
          </FormGroup>
          <FormGroup>
            <Label for='exampleEmail'>Correo Electronico</Label>
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
            <Label for='examplePassword'>Confirmacion contraseña</Label>
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
              name='streetAddress'
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

export default RegisterRepair
