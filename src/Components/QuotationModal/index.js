
import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardText, Form } from 'reactstrap'
import { useForm } from 'react-hook-form'
import axios from 'axios'

import { loadStripe } from '@stripe/stripe-js'
import Stripe from '../Stripe'
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js'

import './quotemodal.css'

const QuotationModal = (props) => {
  const {
    className
  } = props
  // Make sure to call `loadStripe` outside of a component’s render to avoid
  // recreating the `Stripe` object on every render.
  const stripePromise = loadStripe('pk_test_51HMmJBD9aCBWPYFt32OHiI1DYRR99UlV6z313ebUOJcqKs2dwzrgk5Ef8TsREW2T7OqsHLpBtDvAnUEVfOeqP9xd001zEBamB0')

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  // console.log(props)
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    const { homeRepair } = data
    const infoData = {
      status: 'Activa',
      idRepairmanResponse: props.data.idRepairman,
      homeRepair: homeRepair
    }
    // console.log(infoData)
    axios.patch(`https://boss-repair-api.mybluemix.net/repair-order/${props._id}`, infoData)
      .then((data) => {
        if (homeRepair) {
          const dataMail = {
            to: 'ltonnito@gmail.com',
            subject: '¡Tu reparador ha sido asignado!',
            text: 'Podrás ver las actualizaciones desde tu perfil'
          }
          axios.post('https://boss-repair-api.mybluemix.net/emails/', dataMail)
        } else {
          const dataMail = {
            to: 'repairman@test.com',
            subject: '¡Tienes una reparación!',
            text: 'Hola! Tu reparación tiene una respuesta disponible, puedes verla iniciando sesión.'
          }
          axios.post('https://boss-repair-api.mybluemix.net/emails/', dataMail)
        }
      })
      .catch((error) => {

      })
  }

  return (
    <div>
      <button className='secondary-button' onClick={toggle}>Contratar</button>
      <Modal
        isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={className + 'modal-lg'}
      >
        <ModalHeader toggle={toggle}>
          <h4>Respuesta</h4>
          <p>{props.repair}</p>
        </ModalHeader>
        <ModalBody className='d-md-flex quote-body'>
          <div className='data-quote'>
            <h5>Formulario de Pago</h5>
            <p><small>Si deseas que el reparador vaya a tu domicilio</small></p>
            <Form className='m-0' onSubmit={handleSubmit(onSubmit)}>
              <div class='form-group form-check quote-form'>
                <input type='checkbox' class='form-check-input quote-checkbox' name='homeRepair' id='exampleCheck1' ref={register} />
                <label class='form-check-label' for='exampleCheck1'>Reparación en casa</label>
              </div>
              <Elements stripe={stripePromise}>
                <Stripe
                  cost={props.data.cost}
                  repair={props.repair}
                />
              </Elements>
            </Form>

          </div>
        </ModalBody>
        <ModalFooter />
      </Modal>
    </div>
  )
}

export default QuotationModal
