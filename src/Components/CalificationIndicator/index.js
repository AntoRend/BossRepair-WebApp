import React from 'react'

import StarOne from './Img/Activa.svg'
import StarTwo from './Img/inactiva.svg'

const CalificationIndicator = (props) => {
  const total = [0, 1, 2, 3, 4]
  const serviceRating = 3
  // const { serviceRating } = props

  return (
    <div className='d-flex'>
      {total.map((e, index) => {
        return (
          <div key={index}>
            <img src={StarOne} width='15%' alt='star' />
          </div>
        )
      })}
    </div>
  )
}

export default CalificationIndicator
