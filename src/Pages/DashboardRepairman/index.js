import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import axios from 'axios'

import ProfileDataDashboard from '../../Components/ProfleDataDashboard'
import PrincipalCardDashboard from '../../Components/PrincipalCardDashboard'
import UpdateCardDashboard from '../../Components/UpdateCardDashboard'
import LastCardDashboard from '../../Components/LastCardDashboard'

function RepairView () {
  const [userData, userRequest] = useState([])

  const userId = localStorage.getItem('userID')

  useEffect(() => {
    userRender()
  }, [])

  const userRender = async () => {
    const responseUser = await axios.get(`http://localhost:8080/repairmen/${userId}`)
    // console.log(responseOrders.data.data.allOrderRepair)
    userRequest(responseUser.data.data.Repairman)
    console.log(responseUser)
  }

  return (
    <Container>
      <Row>
        <h1>{userData.fullName}</h1>
      </Row>
      <Row>
        <ProfileDataDashboard
          data={userData}
        />
        <Col className='col-12 col-md-7'>
          <PrincipalCardDashboard />
        </Col>
      </Row>
      <Row>
        <UpdateCardDashboard />
      </Row>
      <Row>
        <Col>
          <LastCardDashboard />
        </Col>
      </Row>
    </Container>
  )
}

export default RepairView
