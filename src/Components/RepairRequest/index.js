
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import swal from 'sweetalert'

import {
  Modal, ModalHeader, ModalBody,
  Form, FormGroup, Label, FormText
} from 'reactstrap'
import ButtonBR from '../Button'
import ImageInput from '../ImageInput'

const ModalExample = (props) => {
  const {
    className
  } = props

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const closeBtn = <button className='close' onClick={toggle}>&times;</button>

  // funciones para formulario
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    // console.log(data)
    axios.post('http://localhost:8080/repair-order/create', data)
      .then((data) => {
        console.log(data)
        swal({
          title: 'Listo!',
          text: 'Puedes consultar las respuestas a tu reparación con tu correo',
          icon: 'success',
          button: 'Entendido'
        })
        toggle()
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
  // console.log(watch('example')) // watch input value by passing the name of it

  return (
    <div>
      <ButtonBR
        onClick={toggle}
        text='Repara'
      />
      {/* <Button color='danger' onClick={toggle}>{buttonLabel}</Button> */}
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>Reparación <br /><p className='my-0'><small>Artículo a reparar</small></p></ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className='d-md-flex'>
              <div className='col-12 col-md-6'>
                <FormGroup>
                  <Label for='exampleSelect'>Categoría</Label>
                  <select class='form-control' name='category' id='exampleSelect' ref={register} required>
                    <option>Selecciona</option>
                    <option>Electrónica</option>
                    <option>Electricidad</option>
                    <option>Línea Blanca</option>
                    <option>Plomería</option>
                  </select>
                </FormGroup>
                <FormGroup>
                  <Label for='exampleEmail'>Marca & modelo</Label>
                  <input class='form-control' type='text' name='brandAndModel' placeholder='Marca & modelo' ref={register} required />
                </FormGroup>
                <FormGroup>
                  <Label for='exampleText'>Descripción del problema</Label>
                  <input class='form-control' type='textarea' name='problemDescription' id='exampleText' ref={register} required />
                </FormGroup>
              </div>
              <div className='col-12 col-md-6'>
                <FormGroup>
                  {/* <Label for='exampleFile'>Sube una imagen</Label>
                  <input class='form-control' type='file' name='file' id='exampleFile' ref={register} />
                  <FormText color='muted'>
      Selecciona una imagen descriptiva del problema.
                  </FormText> */}
                  <ImageInput />
                </FormGroup>
                <FormGroup>
                  <Label for='exampleSelect'>Delegación/Municipio</Label>
                  <select class='form-control' name='location' id='exampleSelect' ref={register} required>
                    <option>Selecciona</option>
                    <option>Benito Juárez</option>
                    <option>Gustavo A Madero</option>
                    <option>Venustiano Carranza</option>
                    <option>Tlalpan</option>
                  </select>
                </FormGroup>
                <FormGroup>
                  <Label for='exampleEmail'>Email</Label>
                  <input class='form-control' type='email' name='userEmail' id='exampleEmail' placeholder='Email' ref={register} required />
                </FormGroup>
              </div>
            </div>
            <ButtonBR text='Enviar' />
            {/* <div className='col-12 d-block'>
              <input type='submit' />
              <Button color='primary'>Reparar</Button>
              <Button color='secondary' onClick={toggle}>Cancelar</Button>
            </div> */}
          </Form>
        </ModalBody>
        {/* <ModalFooter>
          <Button color='primary'>Reparar</Button>
          <Button color='secondary' onClick={toggle}>Cancelar</Button>
        </ModalFooter> */}
      </Modal>
    </div>
  )
}

export default ModalExample
