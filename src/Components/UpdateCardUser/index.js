import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Col } from 'reactstrap'
import OwlCarousel from 'react-owl-carousel2'

import 'react-owl-carousel2/src/owl.carousel.css' // Allows for server-side rendering.
import 'react-owl-carousel2/src/owl.theme.default.css'
import Button from '../Button'

import './updateCardDashboard.css'
const UpdateCardDashboard = (props) => {
  const [orders, reqOrders] = useState([])
  // var orders = []
  const userId = localStorage.getItem('userID')
  const userRole = localStorage.getItem('userRole')
  useEffect(() => {
    ordersRequest()
  }, [])

  const options = {
    items: 3,
    nav: true,
    rewind: true,
    autoplay: true
  }

  const ordersRequest = async () => {
    const response = await axios.get(
      `http://localhost:8080/repair-order/info-repairs/${props.data.email}`)
    reqOrders(response.data.data.Repairs)
    // (data)
    // console.log(props)
  }

  return (
    <Col className=''>
      <h3>Reparaciones sin asignar</h3>
      <OwlCarousel options={options}>
        {
          orders.map((item, index) => {
            if (item.status === 'Sin respuesta' || item.status === 'Cotizaciones disponibles') {
              return (
                <div className='carousel__card_body mx-2 card-body' key={index}>
                  <p><small>{item.category}</small></p>
                  <h5 className='card-title text-center'>{item.brandAndModel}</h5>
                  <Link to={{ pathname: '/solicitud-reparacion', data: item }}><Button text='Detalle' /></Link>
                </div>
              )
            }
          })
        }
      </OwlCarousel>
    </Col>
  )
}

export default UpdateCardDashboard
