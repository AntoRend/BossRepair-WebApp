import React, { useState, useEffect, Component } from 'react'
import { Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import swal from 'sweetalert'
import axios from 'axios'
import Rating from '@material-ui/lab/Rating'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import RepairData from '../../Components/RepairData'
import UpdatesConsultView from '../../Components/UpdatesConsultView'
import Button from '../../Components/Button'

const RequestConsult = (props) => {
  // const [repair, renderInfo] = useState('')
  const repair = props.location.data
  // useEffect(() => {
  //   renderInfo(props.location.data)
  // }, '')
  const {
    className
  } = props

  // Modal
  const [modal, setModal] = useState(false)

  // RatingService
  const [value, setValue] = React.useState(2)

  const toggle = () => setModal(!modal)

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
          const data = { status: 'Finalizada' }
          const res = await axios.patch(`http://localhost:8080/repair-order/${repair._id}`, data)
          if (res.data.success) {
            swal('¡Poof! ¡Tu reparación ha sido finalizada!', {
              icon: 'success'
            }).then(() => {
              toggle()
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
      <div>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Califica a tu reparador</ModalHeader>
          <ModalBody>
            <div>
              <Box component='fieldset' mb={3} borderColor='transparent'>
                <Typography component='legend'>¿Cual fue tu experiencia con el reparador?</Typography>
                <Rating
                  name='simple-controlled'
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue)
                    // axios.patch(`http://localhost:8080/repairmen/${}`)
                  }}
                />
              </Box>
            </div>
          </ModalBody>
        </Modal>
      </div>
      <RepairData
        data={repair}
      />
      <UpdatesConsultView
        data={repair}
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
