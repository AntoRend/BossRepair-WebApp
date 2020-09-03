import React, { useState } from 'react'
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import swal from 'sweetalert'

import './common.css'

const CheckoutForm = (props) => {
  const [paymentData, paymentHandler] = useState({})
  const cost = props.cost
  const repair = props.repair
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement)

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement
    })

    if (error) {
      console.log('[error]', error)
    } else {
      console.log('[PaymentMethod]', paymentMethod)
      const { id } = paymentMethod
      try {
        const { data } = await axios.post('http://localhost:8080/pay/', {
          id,
          amount: cost,
          description: repair
        })
        console.log(data)
        swal({
          title: 'Listo!',
          text: 'Tu pago fue aplicado con exito, puedes consultar el estatus de la reparación en tu perfil',
          icon: 'success',
          button: 'Entendido'
        }).then(() => {
          const userRole = localStorage.getItem('userRole')
          if (userRole === 'user') {
            window.location.href = '/dashboard'
          } else {
            window.location.href = '/dashboard-repair'
          }
        })
      } catch (error) {
        console.log(error)
        swal({
          title: 'Ups!',
          text: 'Algo salió mal, intentalo de nuevo',
          icon: 'error',
          button: 'Entendido'
        })
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4'
              }
            },
            invalid: {
              color: '#9e2146'
            }
          }
        }}
      />
      <button type='submit' disabled={!stripe}>
        Contratar
      </button>
    </form>
  )
}

export default CheckoutForm
