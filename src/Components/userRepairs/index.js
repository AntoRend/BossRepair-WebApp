import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import axios from 'axios'

import './userRepairs.css'

const UserRepairs = (props) => {
  const [cards, setPosts] = useState([])
  const email = props.data.email

  useEffect(() => {
    fetchData()
  })

  async function fetchData () {
    const response = await axios.get(
    `https://boss-repair-api.mybluemix.net/repair-order/info-repairs/${email}`)
    setPosts(response.data.data.Repairs)
  }

  return (
    <div>
      <h3 className='title_activas'>Reparaciones Activas</h3>
      <div className='d-md-flex principal-cards-container'>
        {
          cards.map((item, index) => {
            if (index < 4 && item.status === 'Activa') {
              return (
                <div className='principal__body card-body' key={index}>
                  <h5 className='principal__title card-title text-ali'>{item.brandAndModel}</h5>

                  <hr className='' />
                  <div className='d-flex justify-content-between align-items-end'>
                    <img src={item.file} alt='' className='image-active-card' />
                    <Link className='detail_button' to={{ pathname: '/consulta-reparacion', data: item }}><Button text='Detalle' /></Link>
                  </div>
                </div>
              )
            }
          })
        }
      </div>
      <div className='d-flex justify-content-end'>
        <Link to={{ pathname: '/reparaciones', search: email }}>Ver más...</Link>
      </div>
    </div>
  )
}

export default UserRepairs
