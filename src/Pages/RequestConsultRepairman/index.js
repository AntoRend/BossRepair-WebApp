import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'
import axios from 'axios'
import swal from 'sweetalert'

import RepairData from '../../Components/RepairData'
import ResponseFormRepairman from '../../Components/ResponseFormRepairman'
import Button from '../../Components/Button'

const RequestConsult = (props) => {
  const [repair, renderInfo] = useState('')
  const [user, userData] = useState([])
  // console.log(props.location.data)
  useEffect(() => {
    const info = props.location.data
    renderInfo(info)
    fetchData()
    // console.log(props)
  }, '')

  const fetchData = async () => {
    const id = localStorage.getItem('userID')
    const data = await axios.get(`https://boss-repair-api.mybluemix.net/repairmen/${id}`)
    userData(data.data.data.Repairman)
  }

  const endRepair = async () => {
    swal({
      title: '¿Deseas finalizar la reparación?',
      text: 'Una vez finalizada se notificará al usuario para su confirmación',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    })
      .then(async (willDelete) => {
        if (willDelete) {
          const dataMail = {
            to: 'ltonnito@gmail.com',
            subject: '¡Tu reparador a finalizado la reparación!',
            text: 'Hola! Tu reparación ha sido finalizada, por favor entra a la app para confirmarlo y calificar a tu reparador.'
          }
          const res = await axios.post('https://boss-repair-api.mybluemix.net/emails/', dataMail)
          if (res.data.success) {
            swal('¡Gracias! hemos notificado al usuario', {
              icon: 'success'
            })
              .then(() => {
                const userRole = localStorage.getItem('userRole')
                if (userRole === 'user') {
                  window.location.href = '/dashboard'
                }
              })
          } else {
            swal('Ups!', 'Intentalo de nuevo', 'error')
          }
        } else {
          swal('¡Tu reparación sigue activa!')
        }
      })
  }

  return (
    <Container>
      <RepairData
        data={repair}
      />
      <ResponseFormRepairman
        data={repair}
        userData={user}
      />
      <div>
        <Button
          text='Finalizar reparación' onClick={endRepair}
        />
      </div>
    </Container>
  )
}

export default RequestConsult
