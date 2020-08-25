import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

// Components
import RouteBar from '../../../Components/RouteBar'
import './index.css'
import DeviceImg from './img/device.jpg'
import Button from '../../../Components/Button'

export default class Profile extends Component {
  render () {
    return (
      <div>
        <Row>
          <Col>
            <RouteBar route='HOME > Posts > Resumen' />
          </Col>
        </Row>
        <Container className='repairmanPostDetails'>
          <Row>
            <div className='repairmanTitleDiv'>
              <h1 className='repairmanTitleText'>Resumen</h1>
            </div>
          </Row>
          <br />
          <Row md='none' className='imgRow'>
            <img src={DeviceImg} className='imgDevice' />
            <br />
          </Row>
          <Row sm='2' className='customerPostDetails'>
            <Col>
              <h2 className='customerPostDetailsTitle'>Categoria</h2>
              <p className='customerPostDetailsText'>Electronicos</p>
              <br />
              <h2 className='customerPostDetailsTitle'>Marca</h2>
              <p className='customerPostDetailsText'>Samsung</p>
              <br />
              <h2 className='customerPostDetailsTitle'>Modelo</h2>
              <p className='customerPostDetailsText'>Galaxy Tab</p>
              <br />
              <h2 className='customerPostDetailsTitle'>Fecha</h2>
              <p className='customerPostDetailsText'>21/08/2020</p>
              <br />
            </Col>
            <Col sm='none'>
              <img src={DeviceImg} className='imgDeviceDesktop' />
              <br />
            </Col>
          </Row>
          <Row className='customerPostDetails'>
            <h2 className='customerPostDetailsTitle'>Descripción de la falla</h2>
            <textarea rows='6' cols='100' disabled className='customerPostDetailsText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto odit ad necessitatibus deserunt, sapiente, officiis quia, possimus amet ducimus culpa exercitationem! Odit suscipit delectus, unde eos cumque laborum sed quae.</textarea>
            <br />
          </Row>
          <br />
          <Row className='customerPostDetails'>
            <Button text='Hacer cotización' />
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
