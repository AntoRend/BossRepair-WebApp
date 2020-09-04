import React, { useState, useEffect } from 'react'
import axios from 'axios'

const LastCardDashboard = () => {
  const [orders, reqOrders] = useState([])
  // const answers = []
  // var orders = []
  const userId = localStorage.getItem('userID')
  useEffect(() => {
    ordersRequest()
  }, [])

  const ordersRequest = async () => {
    const repairs = await axios.get('https://boss-repair-api.mybluemix.net/repair-order/')
    const data = repairs.data.data.allOrderRepair
    // data.map(({ answers }, index) => {
    //   answers.map((e) => {
    //     if (e.idRepairman === userId) {
    //       console.log(e)
    //     }
    //   })
    // })
    // orders = data
    reqOrders(data)
  }

  return (
    <div>
      {
        orders.map(({ answers }, index) => {
          answers.map((e) => {
            if (e.idRepairman === userId) {
              return (
                <div class='card'>
                  <div class='card-header'>
            Featured
                  </div>
                  <div class='card-body'>
                    <h5 class='card-title'>Special title treatment</h5>
                    <p class='card-text'>With supporting text below as a natural lead-in to additional content.</p>
                    <a href='#' class='btn btn-primary'>Go somewhere</a>
                  </div>
                </div>
              )
            }
          })
        })
      }
    </div>
  )
}

export default LastCardDashboard
