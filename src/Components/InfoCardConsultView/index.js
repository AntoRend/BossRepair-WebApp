import React from 'react'
import {
  Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText
} from 'reactstrap'
import CalificationIndicator from '../CalificationIndicator'
import QuotationModal from '../QuotationModal'

import Walk from './Img/caminar.svg'

const InfoCard = (props) => {
  const { data, data: { answers, _id, brandAndModel } } = props
  console.log(data)

  return (
    <div>
      {answers.map((item, index) => {
        return (
          <Card key={index}>
            <CardHeader>{props.title}</CardHeader>
            <CardBody>
              <div className='description d-flex justify-content-between my-3'>
                <div>
                  <CardTitle>{item.repairmanName}</CardTitle>
                  <CalificationIndicator serviceRating='3' />
                  <div className='d-flex align-items-center'><img className='mr-3' src={Walk} width='10%' alt='' /><p className=''>Va a domicilio</p></div>
                  <div>
                    <p>Descripcion de la cotización: </p>
                    <CardText>{item.answer}</CardText>
                  </div>
                </div>
                <div className='list-group-item'>$ {item.cost} </div>
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
            <CardFooter>BossRepair</CardFooter>
          </Card>
        )
      })}
    </div>
  )
}

export default InfoCard
