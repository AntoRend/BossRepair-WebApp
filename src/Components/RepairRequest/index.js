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
      const { data } = await axios.post('https://boss-repair-api.mybluemix.net/images/repair-img-upload', dataI, {
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
    const emailUser = data.userEmail
    const model = data.brandAndModel
    const dataI = new FormData()// If file selected
    if (selectedFile) {
      dataI.append('repairImage', selectedFile, selectedFile.name)
      const responseImage = await axios.post('https://boss-repair-api.mybluemix.net/images/repair-img-upload', dataI, {
        headers: {
          accept: 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${dataI._boundary}`
        }
      })
      // console.log(responseImage)
      const fetchData = { file: responseImage.data.location, ...data }
      console.log(fetchData)
      axios.post('https://boss-repair-api.mybluemix.net/repair-order/create', fetchData)
        .then((data) => {
          console.log(data)
          const dataMail = {
            to: emailUser,
            subject: 'Reparacion registrada',
            text: `Hola! Tu reparación de ${model} ha sido registrada, puedes ver el status iniciando sesión o nosotros te notificaremos cuando tengas respuestas disponibles. ¡Saludos!`
          }
          axios.post('https://boss-repair-api.mybluemix.net/emails/', dataMail)
          swal({
            title: 'Listo!',
            text: 'Tu reparación ha sido publicada, te notificaremos a tu correo cuando tengas respuestas',
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
        text='Publica'
      />
      {/* <Button color='danger' onClick={toggle}>{buttonLabel}</Button> */}
      <Modal isOpen={modal} toggle={toggle} className={`${className} modal-dialog modal-lg`}>
        <ModalHeader toggle={toggle} close={closeBtn}>Reparación <br /><p className='my-0'><small>Artículo a reparar</small></p></ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit(onSubmit)} className='mt-1'>
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
                    {/* <div className='card border-light'> */}
                    {/* <div className='card-body'> */}
                    <p className='card-text'>Sube una imagen de tu artículo </p>
                    <input type='file' onChange={handleInput} />
                    <div className='mt-5'>
                      {/* <button className='btn btn-info'>Upload!</button> */}
                    </div>
                    {/* </div> */}
                    {/* </div> */}
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
