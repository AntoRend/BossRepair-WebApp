import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import axios from 'axios'

import './userRepairs.css'

const UserRepairs = (props) => {
  const [cards, setPosts] = useState([])

  useEffect(() => {
    fetchData()
  })

  async function fetchData () {
    const response = await axios.get(
    `http://localhost:8080/repair-order/info-repairs/${props.data.email}`)
    setPosts(response.data.data.Repairs)
  }

  return (
    <div className='d-md-flex principal-cards-container'>
      {
        cards.map((item, index) => {
          if (index < 4) {
            return (
              <div className='principal__body card-body' key={index}>
                <h5 className='principal__title card-title text-ali'>{item.brandAndModel}</h5>
                <p className='principal__text card-text'>
                  {item.problemDescription}
                </p>
                <hr className='' />
                <p className=' '>{item.status}</p>
                <Link to={{ pathname: '/consulta-reparacion', data: item }}><Button text='Detalle' /></Link>
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default UserRepairs
