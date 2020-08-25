import React, { useState } from 'react'
import {
  Button, Popover, PopoverHeader, PopoverBody, Form, FormGroup, Label,
  DropdownItem
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import swal from 'sweetalert'

import Profile from './img/usuario.svg'
import ButtonBR from '../Button'

const Login = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false)
  const toggle = () => setPopoverOpen(!popoverOpen)

  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    axios.post('http://localhost:8080/auth/login', data)
      .then(function (response) {
        console.log(response)
        const { id, token, role } = response.data.data
        localStorage.setItem('tokenUser', token)
        localStorage.setItem('userRole', role)
        localStorage.setItem('userID', id)
      }).then(() => window.location.href = '/dashboard')
      .catch(function (error) {
        // console.log(error.response)
        swal({
          title: 'Ups!',
          text: `${error.response.data.error}`,
          icon: 'error',
          button: 'Entendido'
        })
      })
  }

  const LogOut = () => {
    localStorage.clear()
    window.location.href = '/'
  }

  const userLogged = () => {
    if (localStorage.length === 0) {
      return (
        <div>
          <PopoverHeader className='text-center'>Inicia sesión</PopoverHeader>
          <PopoverBody>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Label for='exampleEmail'>Email</Label>
                <input className='form-control' type='email' name='email' placeholder='Email' ref={register} />
              </FormGroup>
              <FormGroup>
                <Label for='examplePassword'>Password</Label>
                <input className='form-control' type='password' name='password' placeholder='Password' ref={register} />
              </FormGroup>
              <ButtonBR text='Inicia sesión' />
            </Form>
            <p><small>¿No tienes cuenta?</small></p>
            <Link to='/registro'>Regístrate</Link>
          </PopoverBody>
        </div>
      )
    } else {
      return (
        <div>
          <DropdownItem>
            <Link to='/dashboard'>Mi Perfil</Link>
          </DropdownItem>
          <DropdownItem>
            <button onClick={LogOut}>Cerrar sesión</button>
          </DropdownItem>
        </div>
      )
    }
  }

  return (
    <div>
      <Button id='PopoverFocus' type='button'>
        <img width='25%' src={Profile} alt='profile' />
      </Button>
      <Popover placement='bottom' isOpen={popoverOpen} target='PopoverFocus' toggle={toggle}>
        {userLogged()}
      </Popover>
    </div>
  )
}

export default Login
