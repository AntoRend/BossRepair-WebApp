import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import RegisterForm from '../../Components/RegisterRepair'

const Register = () => {
  return (
    <Container>
      <Row>
        <Col>
          <RegisterForm />
        </Col>
      </Row>
    </Container>
  )
}

export default Register
