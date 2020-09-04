import React, { useEffect } from 'react'

import './repair-data.css'

const RepairData = (props) => {
  useEffect(() => {
    // console.log(props)
  })
  return (
    <div className='repair_data col-12 my-5'>
      <div className='repair_data__text'>
        <h3 className='title_activas mb-3 mr-4'>Reparación</h3>
      </div>
      <div className='repair_data__description'>
        <div className='first_data d-md-flex'>
          <div className='col-12 col-md-6 d-flex flex-column justify-content-center info_content'>
            <div className='info_label'>
              <h5>Marca & modelo</h5>
              <p className='info_repair'>{props.data.brandAndModel}</p>
              <hr className='divider' />
            </div>

            <div className='info_label'>
              <h5>Categoría</h5>
              <p className='info_repair'>{props.data.category}</p>
              <hr className='divider' />
            </div>
            <div className='info_label'>
              <h5>Descripción de la falla</h5>
              <p className='info_repair'>{props.data.problemDescription}</p>
              <hr className='divider' />
            </div>
          </div>
          <div className='repair_data__img col-12 col-md-6'>
            <img src={props.data.file} alt='' className='img-thumbnail image_consult' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RepairData
