import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Components/Button'
import axios from 'axios'

import './alluserrepairs.css'

const AllUserRepairs = (props) => {
  const [cards, setPosts] = useState([])

  useEffect(() => {
    fetchData()
  })

  async function fetchData () {
    let userEmail = window.location.search
    userEmail = userEmail.substring(1)
    // console.log(userEmail)
    const response = await axios.get(
    `http://localhost:8080/repair-order/info-repairs/${userEmail}`)
    setPosts(response.data.data.Repairs)
  }

  return (
    <div className='container'>
      <div className='d-md-flex all_principal_container'>
        {
          cards.map((item, index) => {
            return (
              <div className='all_principal__body card-body m-2' key={index}>
                <h5 className='all_principal__title card-title text-ali'>{item.brandAndModel}</h5>
                <hr className='' />
                <p className='all_principal__status'>{item.status}</p>
                <Link to={{ pathname: '/consulta-reparacion', data: item }}><Button text='Detalle' /></Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AllUserRepairs
