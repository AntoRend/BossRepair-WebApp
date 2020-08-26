import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import ProfileDataDashboard from '../../Components/ProfleDataDashboard'
import PrincipalCardDashboard from '../../Components/PrincipalCardDashboard'
import UpdateCardDashboard from '../../Components/UpdateCardDashboard'
import LastCardDashboard from '../../Components/LastCardDashboard'

function UserView () {
  return (
    <Container>
      <Row>
        <h1>Nombre Usuario</h1>
      </Row>
      <Row>
        <ProfileDataDashboard />
        <Col className=''>
          <Col className='d-md-flex'>
            <PrincipalCardDashboard />
            <PrincipalCardDashboard />
          </Col>
          <Col className='d-md-flex'>
            <PrincipalCardDashboard />
            <PrincipalCardDashboard />
          </Col>
        </Col>
      </Row>
      <Row>
        <Col className='d-md-flex justify-content-around'>
          <UpdateCardDashboard />
          <UpdateCardDashboard />
          <UpdateCardDashboard />
        </Col>
      </Row>
      <Row>
        <Col>
          <LastCardDashboard />
          <LastCardDashboard />
        </Col>
      </Row>
    </Container>
  )
}

export default UserView
