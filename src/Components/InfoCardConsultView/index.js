import React from 'react'
import {
  Card, CardHeader, CardFooter, CardBody,
  CardTitle, CardText
} from 'reactstrap'
import CalificationIndicator from '../CalificationIndicator'
import QuotationModal from '../QuotationModal'

import './infocardconsult.css'
import Walk from './Img/caminar.svg'

const InfoCard = (props) => {
  const { data, data: { answers, _id, brandAndModel } } = props
  console.log(props)

  return (
    <div>
      {answers.map((item, index) => {
        return (
          <Card className='card-response-container' key={index}>
            <CardHeader className='card-response-header'>{props.title}</CardHeader>
            <CardBody className='card-response-body'>
              <div className='card-response-description d-flex justify-content-between my-3'>
                <div className='card-response-info d-flex flex-column justify-content-start '>
                  <CardTitle>{item.repairmanName}</CardTitle>
                  <CalificationIndicator serviceRating='3' />
                  <div className='d-flex align-items-center'><img className='mr-3 icon-walk' src={Walk} alt='' /><span className=''>Va a domicilio</span></div>
                  <div>
                    <p>Descripcion de la cotización: </p>
                    <CardText>{item.answer}</CardText>
                  </div>
                </div>
                <div className='list-group-item cost-label'>$ {item.cost} </div>
              </div>
              <div className='d-flex justify-content-end'>
                <QuotationModal
                  data={item}
                  _id={_id}
                  repairmenName={item.repairmanName}
                  repair={brandAndModel}
                />
              </div>
            </CardBody>
          </Card>
        )
      })}
    </div>
  )
}

export default InfoCard
