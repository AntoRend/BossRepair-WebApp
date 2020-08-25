import React from 'react'
import { Col, Form } from 'reactstrap'
import { useForm } from 'react-hook-form'
import RepairButton from '../../../Components/RepairRequest'
import Button from '../../../Components/Button'

const Banner = () => {
  // let userEmail = {}
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    // console.log(data)
    window.location.href = '/solicitud-reparacion?' + data.userEmail
  }

  return (
    <div className='banner d-md-flex my-5'>
      <Col className='col-12 col-md-5 banner_info'>
        <h1>Texto Principal de la Landing</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
        <div className='repair-button d-flex justify-content-between'>
          <p className='text-center'>Publica tu reparación</p>
          <RepairButton />
        </div>

        <p className='text-center'> o </p>
        <div className='email-form d-flex mt-2 justify-content-between'>
          <Form className='d-flex justify-content-between' onSubmit={handleSubmit(onSubmit)}>
            <input className='form-control mr-2' name='userEmail' type='email' ref={register} required />
            <Button text='Consultar' />
          </Form>
        </div>
      </Col>
      <div className='banner_assets col-12 col-md-6'>
        <div className='banner_img ' />
      </div>
    </div>
  )
}

export default Banner
