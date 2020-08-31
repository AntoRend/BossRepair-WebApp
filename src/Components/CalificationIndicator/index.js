import React from 'react'
import Rating from '@material-ui/lab/Rating'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import StarOne from './Img/Activa.svg'
import StarTwo from './Img/inactiva.svg'

const CalificationIndicator = (props) => {
  return (
    <Box component='fieldset' mb={3} borderColor='transparent'>
      <Typography component='legend'>Calificación</Typography>
      <Rating name='read-only' value={3} readOnly />
    </Box>
  )
}

export default CalificationIndicator
