import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, CardTitle } from 'reactstrap'
import axios from 'axios'

import RepairData from '../../Components/RepairData'
import InfoCard from '../../Components/InfoCardConsultView'
// import Button from '../../Components/Button'

const RequestConsult = (props) => {
  const [cards, setPosts] = useState([])
  const [repair, handleClick] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData () {
    let userEmail = window.location.search
    userEmail = userEmail.substring(1)
    // console.log(userEmail)
    const response = await axios.get(
    `http://localhost:8080/repair-order/info-repairs/${userEmail}`)
    setPosts(response.data.data.Repairs)
  }

  const renderInfo = () => {
    if (repair === '') {
    } else {
      return (
        <div>
          <RepairData 
          data={cards.[repair]}
          />
          <InfoCard 
          title ="Cotización"
          data={cards.[repair]}
          />
        </div>
      )
    }
  }

  return (
    <Container>
      <Row>
        <Col className='d-flex'>
          {cards.map((item, index) => {
            return (
              // console.log('hke?')
              <Card body outline color='secondary' key={index} className='col-6 col-md-3 d-flex'>
                <CardTitle className=''>{item.brandAndModel}</CardTitle>
                {/* <Button text='Reparación' onClick={handleClick(index)} /> */}
                <button type='button' onClick={(e) => handleClick(index)}>Push</button>
              </Card>
            )
          })}
        </Col>
      </Row>
      {renderInfo()}
    </Container>
  )
}

export default RequestConsult
