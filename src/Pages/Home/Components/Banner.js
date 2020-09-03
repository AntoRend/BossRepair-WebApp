import React from 'react'
import { Col, Form } from 'reactstrap'
import { useForm } from 'react-hook-form'
import RepairButton from '../../../Components/RepairRequest'
import Button from '../../../Components/Button'

const Banner = () => {
  // let userEmail = {}

  return (
    <div className='banner d-md-flex '>
      <Col className='col-12 col-md-5 banner_info'>
        <h1 className='text-landing'>Revive ese aparato que siempre quisiste y no podías reparar</h1>
        <p className='text-public'>Publica tu falla y obtén una respuesta inmediata de nuestros reparadores, que esperas, publica ya !!!
          {/* Esta aplicacion te ayudara a reparar tus articulos electronicos, desde
          una lavadora hasta una computadora ya que contamos con los mejores
          reparadores de tu demicilio, esta aplicacion te busca los
          mejores y más sercanos a tu domicilio y asi no tendras que salir de la
          comodidad de tu casa y aplicar <span>QUEDATE EN CASA !</span>{" "} */}
        </p>
        <div className='repair-button d-flex justify-content-between'>
          <p className='text-center'>
            <span>Publica tu reparación</span>
          </p>
          <RepairButton />
        </div>

        <p className='text-center' />
      </Col>
      <div className='banner_assets col-12 col-md-6'>
        <div className='banner_img ' />
      </div>
    </div>
  )
}

export default Banner
