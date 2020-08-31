import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Col } from 'reactstrap'
import Button from '../Button'
const UpdateCardDashboard = (props) => {
  const [orders, reqOrders] = useState([])
  // var orders = []
  const userId = localStorage.getItem('userID')
  useEffect(() => {
    ordersRequest()
  }, [])

  const ordersRequest = async () => {
    const repairs = await axios.get(`http://localhost:8080/repairmen/repair-quotes/${userId}`)
    const data = repairs.data.data.quotesData
    // orders = data
    reqOrders(data)
  }

  return (
    <Col className='d-md-flex'>
      {
        orders.map((item, index) => {
          if (item.status === 'Sin respuesta' || item.status === 'Cotizaciones disponibles') {
            return (
              <div className='card-body col-12 col-md-2' key={index}>
                <p><small>{item.category}</small></p>
                <h5 className='card-title text-ali'>{item.brandAndModel}</h5>
                <p className='card-text'>
                  {item.problemDescription}
                </p>
                <Link to={{ pathname: '/solicitud-reparacion-reparador', data: item }}><Button text='Detalle' /></Link>
              </div>
            )
          }
        })
      }
    </Col>
  )
}

export default UpdateCardDashboard
