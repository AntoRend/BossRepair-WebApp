import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import Rating from '@material-ui/lab/Rating'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import ButtonBR from '../Button'

const ModalExample = (props) => {
  const {
    className,
    data
  } = props

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  const [value, setValue] = React.useState(2)

  return (
    <div>
      <Button color='danger' onClick={toggle}>Calificar Reparador</Button>
      <Modal
        isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={className}
      >
        <ModalHeader toggle={toggle}>Finalizar reparacion</ModalHeader>
        <ModalBody>
          <h5>{data.idRepairmanResponse.fullName}</h5>
          <p>{data.brandAndModel}</p>
          <div>
            <Box component='fieldset' mb={3} borderColor='transparent'>
              <Typography component='legend'>Controlled</Typography>
              <Rating
                name='simple-controlled'
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue)
                }}
              />
            </Box>
          </div>
        </ModalBody>
        <ModalFooter>
          <ButtonBR text='Finalizar' />
          <Button color='secondary' onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalExample
