import React from 'react'
import {
  Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText
} from 'reactstrap'
import QuotationModal from '../QuotationModal'

const InfoCard = (props) => {
  const { data: { answers, _id } } = props
  console.log(answers)

  return (
    <div>
      {answers.map((item, index) => {
        return (
          <Card key={index}>
            <CardHeader>{props.title}</CardHeader>
            <CardBody>
              <div className='description d-flex justify-content-between my-3'>
                <div>
                  <CardTitle>{item.idRepairman}</CardTitle>
                  <CardText>{item.answer}</CardText>
                </div>
                <div className='list-group-item'>$ {item.cost} </div>
              </div>
              <div className='d-flex justify-content-end'>
                <Button className='mx-2 btn btn-danger'>Go somewhere</Button>
                <QuotationModal
                  data={item}
                  _id={_id}
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
