import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../Button'

const PrincipalCardDashboard = (props) => {
  const [dataOrders, orders] = useState([])
  const userId = localStorage.getItem('userID')

  useEffect(() => {
    ordersRequest()
  }, [])

  const ordersRequest = async () => {
    const repairs = await axios.get('http://localhost:8080/repair-order/')
    const data = repairs.data.data.allOrderRepair
    // console.log(data)
    orders(data)
  }

  return (
    <div className='d-md-flex'>
      {
        dataOrders.map((e) => {
          if (e.idRepairmanResponse === userId) {
            return (
              <div className='card-body col-6'>
                <h5 className='card-title text-ali'>{e.brandAndModel}</h5>
                <p className='card-text'>
                  {e.problemDescription}
                </p>
                <hr className='solid-divi-cards' />

                <p className='text-cards'>{e.status}</p>
                <Button text='Detalle' />
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default PrincipalCardDashboard
