import React from 'react'
import { Container, Col } from 'reactstrap'
// import Button from '../../../Components/Button'
// import { useForm } from 'react-hook-form'
// import { Link } from 'react-router-dom'

import BossRepairman from '../Img/bossRepairInfo.jpg'

const BossRepairInfo = () => {
  return (
    <Container className="my-5">
      <Col className="bossrepair__info d-flex">
        <div className="bossrepair__info_img col-12 col-md-6">
          <img src={BossRepairman} alt="repairman" className="img-fluid" />
        </div>
        <div className="bossrepair__info_text col-12 col-md-6">
          <h3 className="text-repair-l">
            Tenemos los mejores reparadores a tu disposición.{" "}
          </h3>
          <p className="text-public">
            Podras consultar los presupuesto que mas se acomoden a tu bolsillo{" "}
          </p>
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
  );
}

export default BossRepairInfo
