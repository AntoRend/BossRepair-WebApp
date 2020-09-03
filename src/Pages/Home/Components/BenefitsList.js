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
          <br />

          <h2 className='text-cards'>
            Tenemos la satisfacción de todos nuestros usuarios y reparadores{' '}
          </h2>
          <p> </p>
        </Col>
      </Row>
      <Row>
        <Col className='respon benefits_list d-md-flex justify-content-between'>
          <div className='card b'>
            <img src={sel} className=' card-img-top-f' alt='...' />
            <div className='card-body'>
              <h4 className='card-title'>Nuestros Usuarios</h4>

              <p class='text-cards-2'>
                Satisfaccion total de nuestros usuarios.
              </p>
            </div>
          </div>
          <div className='card b'>
            <img src={repar} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h4 className='card-title'>Nuestros Reparadores</h4>

              <p className='text-cards-2'>
                Tenemos mayor cobertura gracias a la aplicacion.
              </p>
            </div>
          </div>
          <div className='card b' >
            <img src={images} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h4 className='card-title'>Nosotros</h4>

              <p className='text-cards-2'>
                Brindamos seguridad, calidad y precios  accesible.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default BenefitsList
