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
    const response = await axios.get(
      `https://boss-repair-api.mybluemix.net/repair-order/info-repairs/${props.data.email}`)
    reqOrders(response.data.data.Repairs)
    // (data)
    // console.log(props)
  }

  return (
    <div className=''>
      <h3 className='title_activas mb-3 mt-5'>Reparaciones sin asignar</h3>
      <OwlCarousel options={options}>
        {
          orders.map((item, index) => {
            if (item.status === 'Sin respuesta' || item.status === 'Cotizaciones disponibles') {
              return (
                <div className='carousel__card_body mx-2 card-body d-flex flex-column justify-content-between' key={index}>
                  <div>
                    <p><small>{item.category}</small></p>
                    <h5 className='card-title carousel__title text-center'>{item.brandAndModel}</h5>
                    <img src={item.file} alt='repair' className='image-active-card' />
                  </div>
                  <Link to={{ pathname: '/solicitud-reparacion', data: item }}><Button text='Detalle' /></Link>
                </div>
              )
            }
          })
        }
      </OwlCarousel>
    </div>
  )
}

export default UpdateCardDashboard
