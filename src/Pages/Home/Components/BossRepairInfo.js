import React from 'react'
import { Container, Col } from 'reactstrap'
// import Button from '../../../Components/Button'
// import { useForm } from 'react-hook-form'
// import { Link } from 'react-router-dom'

import BossRepairman from '../Img/bossRepairInfo.jpg'

const BossRepairInfo = () => {
  return (
    <Container className='my-5'>
      <Col className='bossrepair__info d-flex'>
        <div className='bossrepair__info_img col-12 col-md-6'><img src={BossRepairman} alt='repairman' className='img-fluid' /></div>
        <div className='bossrepair__info_text col-12 col-md-6'>
          <h3>Tenemos los mas grandes reparadores a tu dispicicion y podras consultar los presupuesto que mas se acomoden a tu bolsillo </h3>
          <p>Contrary to popular belief, Lorem Issical Latin literature from 45 BC, making it over 2000 years old. </p>
          {/* <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <input type='email' class='form-control mb-2' name='email' placeholder='Email' ref={register} />
                <Link to={{ pathname: '/solicitud-reparacion', data: userEmail }}><Button
                  text='Buscar'
                />
                </Link>
              </FormGroup>
            </Form>
          </div> */}
        </div>
      </Col>
    </Container>
  )
}

export default BossRepairInfo
