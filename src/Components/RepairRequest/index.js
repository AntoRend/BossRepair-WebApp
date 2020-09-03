import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import swal from 'sweetalert'
import $ from 'jquery'

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

  // image request
  const [selectedFile, singleFileChangedHandler] = useState(null)

  const handleInput = (event) => {
    singleFileChangedHandler(event.target.files[0])
  }

  const ocShowAlert = (message, background = '#3089cf') => {
    const alertContainer = document.querySelector('#oc-alert-container')
    const alertEl = document.createElement('div')
    const textNode = document.createTextNode(message)
    alertEl.setAttribute('class', 'oc-alert-pop-up')
    $(alertEl).css('background', background)
    alertEl.appendChild(textNode)
    alertContainer.appendChild(alertEl)
    setTimeout(function () {
      $(alertEl).fadeOut('slow')
      $(alertEl).remove()
    }, 3000)
  }

  const singleFileUploadHandler = async (event) => {
    const dataI = new FormData()// If file selected
    if (selectedFile) {
      dataI.append('repairImage', selectedFile, selectedFile.name)
      const { data } = await axios.post('http://localhost:8080/images/repair-img-upload', dataI, {
        headers: {
          accept: 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${dataI._boundary}`
        }
      })
      // console.log(data)
    } else {
      // if file not selected throw error
      ocShowAlert('Please upload file', 'red')
    }
  }

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const closeBtn = <button className='close' onClick={toggle}>&times;</button>

  // funciones para formulario
  const { register, handleSubmit } = useForm()
  const onSubmit = async (data) => {
    const dataI = new FormData()// If file selected
    if (selectedFile) {
      dataI.append('repairImage', selectedFile, selectedFile.name)
      const responseImage = await axios.post('http://localhost:8080/images/repair-img-upload', dataI, {
        headers: {
          accept: 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${dataI._boundary}`
        }
      })
      // console.log(responseImage)
      const fetchData = { file: responseImage.data.location, ...data }
      console.log(fetchData)
      axios.post('http://localhost:8080/repair-order/create', fetchData)
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
    } else {
      // if file not selected throw error
      ocShowAlert('Please upload file', 'red')
    }
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
                  <div>
                    {/* For Alert box */}
                    <div id='oc-alert-container' />
                    <div className='card border-light mb-3 mt-5' style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
                      <div className='card-header'>
                        {/* <h3 style={{ color: '#555', marginLeft: '12px' }}>Single Image Upload</h3> */}
                        <p className='text-muted' style={{ marginLeft: '12px' }}>Upload Size: 250px x 250px ( Max 2MB )</p>
                      </div>
                      <div className='card-body'>
                        <p className='card-text'>Please upload an image for your repair</p>
                        <input type='file' onChange={handleInput} />
                        <div className='mt-5'>
                          {/* <button className='btn btn-info'>Upload!</button> */}
                        </div>
                      </div>
                    </div>
                  </div>
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
            <ButtonBR text='Continuar' />
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
