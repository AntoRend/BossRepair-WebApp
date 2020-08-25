import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

// Components
import RouteBar from '../../../Components/RouteBar'
import './index.css'
import CustomerCard from '../components/clientsPosts'

export default class Profile extends Component {
  render () {
    return (
      <div>
        <Row>
          <Col>
            <RouteBar route='HOME > Posts' />
          </Col>
        </Row>
        <Container className='repairmanPostsList'>
          <Row>
            <div className='repairmanTitleDiv'>
              <h1 className='repairmanTitleText'>Posts</h1>
            </div>
          </Row>
          <br />
          <Row xs='1' sm='3' className='customerPosts'>
            <CustomerCard customerName='Juan Carlos Ortega' repairTitle='Falla' />
            <CustomerCard customerName='Juan Carlos Ortega' repairTitle='Falla' />
            <CustomerCard customerName='Juan Carlos Ortega' repairTitle='Falla' />
            <CustomerCard customerName='Juan Carlos Ortega' repairTitle='Falla' />
            <CustomerCard customerName='Juan Carlos Ortega' repairTitle='Falla' />
            <CustomerCard customerName='Juan Carlos Ortega' repairTitle='Falla' />
            <CustomerCard customerName='Juan Carlos Ortega' repairTitle='Falla' />
            <CustomerCard customerName='Juan Carlos Ortega' repairTitle='Falla' />
            <CustomerCard customerName='Juan Carlos Ortega' repairTitle='Falla' />
            <CustomerCard customerName='Juan Carlos Ortega' repairTitle='Falla' />
          </Row>
          <br />
        </Container>
      </div>
    )
  }
}

/*
<Row xs='1' sm='3'>
            <CustomerCard customerName='Juan Carlos Ortega' repairTitle='Falla' />
            <CustomerCard customerName='Juan Carlos Ortega' repairTitle='Falla' />
            <CustomerCard customerName='Juan Carlos Ortega' repairTitle='Falla' />
            <CustomerCard customerName='Juan Carlos Ortega' repairTitle='Falla' />
            <CustomerCard customerName='Juan Carlos Ortega' repairTitle='Falla' />
            <CustomerCard customerName='Juan Carlos Ortega' repairTitle='Falla' />
            <CustomerCard customerName='Juan Carlos Ortega' repairTitle='Falla' />
            <CustomerCard customerName='Juan Carlos Ortega' repairTitle='Falla' />
            <CustomerCard customerName='Juan Carlos Ortega' repairTitle='Falla' />
            <CustomerCard customerName='Juan Carlos Ortega' repairTitle='Falla' />
          </Row>
          <br />
*/
