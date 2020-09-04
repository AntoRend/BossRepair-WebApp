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
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  }

  const ordersRequest = async () => {
    // if (userRole === 'user') {
    //   const repairs = await axios.get(`http://localhost:8080/repair-order/info-repairs//${props.userData.email}`)
    //   const data = repairs.data.data.quotesData
    //   // orders = data
    //   reqOrders(data)
    // } else {
    const repairs = await axios.get(`https://boss-repair-api.mybluemix.net/repairmen/repair-quotes/${userId}`)
    const data = repairs.data.data.quotesData
    // orders = data
    reqOrders(data)
    // }
  }

  return (
    <Col className=''>
      <h3 className='title_activas text-sm-center mb-3 mt-5'>Reparaciones disponibles</h3>
      <OwlCarousel options={options}>
        {
          orders.map((item, index) => {
            if (item.status === 'Sin respuesta' || item.status === 'Cotizaciones disponibles') {
              return (
                <div className='carousel__card_body mx-2 card-body d-flex flex-column justify-content-between' key={index}>
                  <p><small>{item.category}</small></p>
                  <h5 className='card-title  carousel__title  text-center'>{item.brandAndModel}</h5>
                  <img src={item.file} alt='repair' className='image-active-card mb-' />
                  <Link to={{ pathname: '/solicitud-reparacion-reparador', data: item }}><Button text='Detalle' /></Link>
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
