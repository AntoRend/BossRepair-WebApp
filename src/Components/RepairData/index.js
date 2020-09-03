import React, { useEffect } from 'react'

import './repair-data.css'

const RepairData = (props) => {
  useEffect(() => {
    // console.log(props)
  })
  return (
    <div className='repair_data col-12 my-5'>
      <div className='repair_data__text'>
        <h3>Reparación</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='repair_data__description'>
        <div className='first_data d-md-flex'>
          <div className='col-12 col-md-6'>
            <div className='info_label'>
              <h5>Marca & modelo</h5>
              <p className='list-group-item'>{props.data.brandAndModel}</p>
            </div>

            <div className='info_label'>
              <h5>Categoría</h5>
              <p className='list-group-item'>{props.data.category}</p>
            </div>
          </div>
          <div className='repair_data__img col-12 col-md-6'>
            <figure><img src={props.data.file} alt='' className='img-thumbnail' /></figure>
          </div>
        </div>

        <div className='second_data d-md-flex'>
          <div className='info_label col-12 col-md-7'>
            <h5>Descripción de la falla</h5>
            <p className='list-group-item'>{props.data.problemDescription}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RepairData
