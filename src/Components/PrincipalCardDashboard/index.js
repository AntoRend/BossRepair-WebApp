import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../Button'
import { Link } from 'react-router-dom'

import './principalcarddashboard.css'

const PrincipalCardDashboard = (props) => {
  const [dataOrders, orders] = useState([])
  const userId = localStorage.getItem('userID')

  useEffect(() => {
    ordersRequest()
  }, [])

  const ordersRequest = async () => {
    const repairs = await axios.get('https://boss-repair-api.mybluemix.net/repair-order/')
    const data = repairs.data.data.allOrderRepair
    // console.log(data)
    orders(data)
  }

  return (
    <div className='d-md-flex justify-content-between principal-cards-container'>
      {
        dataOrders.map((e, index) => {
          if (e.status === 'Activa') {
            return (
              <div className='card-body principal__body ' key={index}>
                <h5 className='principal__title card-title text-ali'>{e.brandAndModel}</h5>
                <hr className='' />
                <div className='d-flex justify-content-between align-items-end'>
                  <img src={e.file} alt='' className='image-active-card' />
                  <Link to={{ pathname: '/solicitud-reparacion-reparador', data: e }}><Button text='Detalle' /></Link>
                </div>
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default PrincipalCardDashboard
