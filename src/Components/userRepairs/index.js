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
    `http://localhost:8080/repair-order/info-repairs/${email}`)
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
                  <div className='d-flex justify-content-between'>
                    <p className=' '>{item.status}</p>
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
