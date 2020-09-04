import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import axios from 'axios'

import ProfileDataDashboard from '../../Components/ProfleDataDashboard'
import UserRepairs from '../../Components/userRepairs'
import UpdateCardDashboard from '../../Components/UpdateCardDashboard'
import LastCardDashboard from '../../Components/LastCardDashboard'
import UpdateCardUser from '../../Components/UpdateCardUser'

import './dashboard.css'

function UserView (props) {
  const [userData, userRequest] = useState([])

  useEffect(() => {
    userRender()
  }, [])

  const userRender = async () => {
    const userId = localStorage.getItem('userID')
    const userRole = localStorage.getItem('userRole')
    const responseUser = await axios.get(`https://boss-repair-api.mybluemix.net/users/${userId}`)
    userRequest(responseUser.data.data.User)
    // console.log(responseUser.data.data.User)
  }

  return (
    <Container>
      <Row>
        <Col className='col-12 name-container'>
          <h1 className='col-9'>{`${userData.firstName} ${userData.lastName}`}</h1>
        </Col>
      </Row>
      <Row>
        <ProfileDataDashboard
          data={userData}
        />
        <Col className='col-12 col-md-7'>
          <UserRepairs
            data={userData}
          />
        </Col>
        <hr />
        <Col>
          <UpdateCardUser
            data={props.userData}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default UserView
