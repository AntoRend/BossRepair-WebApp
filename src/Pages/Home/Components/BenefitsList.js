import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import sel from '../Img/sel.jpg'
import repar from '../Img/repar.jpg'
import images from '../Img/images (1).jpg'

const BenefitsList = () => {
  return (
    <Container className='benefits'>
      {/* <row>
        <col> <Button text="Consultar" /></col>
      </row> */}
      <Row>
        <Col className='benefits_text'>

          <h2 className='text-cards text-repair-l mb-5 mt-3'>
            Tenemos la satisfacción de todos nuestros usuarios y reparadores{' '}
          </h2>
        </Col>
      </Row>
      <Row>
        <div className='col-12 col-md-4'>
          <div className='card b'>
            <img src={sel} className=' card-img-top-f' alt='...' />
            <div className='card-body d-flex flex-column justify-content-between'>
              <h4 className='card-title'>Nuestros Usuarios</h4>

              <p class='text-cards-2'>
                Satisfaccion total de nuestros usuarios.
              </p>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-4'>
          <div className='card b '>
            <img src={repar} className='card-img-top-f' alt='...' />
            <div className='card-body d-flex flex-column justify-content-between'>
              <h4 className='card-title'>Nuestros Reparadores</h4>

              <p className='text-cards-2'>
                Tenemos mayor cobertura gracias a la aplicacion.
              </p>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-4'>
          <div className='card b '>
            <img src={images} className='card-img-top-f' alt='...' />
            <div className='card-body d-flex flex-column justify-content-between'>
              <h4 className='card-title'>Nosotros</h4>

              <p className='text-cards-2'>
                Brindamos seguridad, calidad y precios  accesible.
              </p>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  )
}

export default BenefitsList
