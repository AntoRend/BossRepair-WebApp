import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

// Components
import RouteBar from '../../../Components/RouteBar'
import './index.css'
import RepairmanOne from './img/repairman1.jpg'
import CustomerCard from '../components/clientsPosts'
import Button from '../../../Components/Button'

export default class Profile extends Component {
  render () {
    return (
      <div>
        <Row>
          <Col>
            <RouteBar route='HOME' />
          </Col>
        </Row>
        <Container className='repairmanInfo'>
          <Row>
            <div className='repairmanNameDiv'>
              <h1 className='repairmanNameText'>Carla Suarez Ortiz</h1>
            </div>
          </Row>
          <br />
          <Row xs='1' sm='2'>
            <Col className='repairmanCol'>
              <div className='repairmanContactInfoDiv'>
                <img className='imgRepairman' src={RepairmanOne} />
                <br />
                <p className='repairmanInfoText'>example@example.com</p>
                <p className='repairmanInfoText'>Colonia / Municipio</p>
                <p className='repairmanInfoText'>Ciudad</p>
                <br />
                <br />
              </div>
            </Col>
            <Col className='customerCardCol'>
              <Row xs='1' sm='2' className='customerCardRow'>
                <CustomerCard customerName='Juan Carlos Ortega' repairTitle='Falla' />
                <CustomerCard customerName='Juan Carlos Ortega' repairTitle='Falla' />
              </Row>
              <Row xs='1' sm='2'>
                <CustomerCard customerName='Juan Carlos Ortega' repairTitle='Falla' />
                <CustomerCard customerName='Juan Carlos Ortega' repairTitle='Falla' />
              </Row>
              <Button text='Ver mas' />
            </Col>
          </Row>
          <br />
        </Container>
      </div>
    )
  }
}

/*

*/
