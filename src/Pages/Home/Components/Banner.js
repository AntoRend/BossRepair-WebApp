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
    <div className="banner d-md-flex my-5">
      <Col className="col-12 col-md-5 banner_info">
        <h1 className="text-landing">Revive ese aparato que siempre quiciste y no podias reparar</h1>
        <p className="text-public">Publica tu falla y obtén una respuesta inmediata de nuestros reparadores, que esperas, publica ya !!!
          {/* Esta aplicacion te ayudara a reparar tus articulos electronicos, desde
          una lavadora hasta una computadora ya que contamos con los mejores
          reparadores de tu demicilio, esta aplicacion te busca los
          mejores y más sercanos a tu domicilio y asi no tendras que salir de la
          comodidad de tu casa y aplicar <span>QUEDATE EN CASA !</span>{" "} */}
        </p>
        <div className="repair-button d-flex justify-content-between">
          <p className="text-center">
            <span>Publica tu reparación</span>
          </p>
          <RepairButton />
        </div>

        <p className="text-center"></p>
        <div className="email-form d-flex mt-2 justify-content-between">
          <Form
            className="d-flex justify-content-between"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="form-control mr-2"
              name="userEmail"
              type="email"
              ref={register}
              required
            />
            <Button text="Consultar" />
          </Form>
        </div>
      </Col>
      <div className="banner_assets col-12 col-md-6">
        <div className="banner_img " />
      </div>
    </div>
  );
}

export default Banner
